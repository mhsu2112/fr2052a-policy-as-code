/**
 * Pure server-side command functions.
 * Used by both API routes and the MCP server — no Next.js dependencies.
 */

import {
  getAllSections,
  getSection,
  getSectionsByPillar,
  getSectionsByCategory,
  getSectionRaw,
  getGlossary,
  getMorphirMapping,
  getMorphirRulesForSection,
} from '@/lib/content';
import { search } from '@/lib/search';
import Fuse from 'fuse.js';
import yaml from 'js-yaml';
import type { Section } from '@/lib/types';
import {
  lcr as computeLcr,
  hqlaAmount,
  totalNetCashOutflowAmount,
} from '@/lib/morphir/calculations';
import { outflowRules } from '@/lib/morphir/outflows';
import { inflowRules } from '@/lib/morphir/inflows';
import type { Flow } from '@/lib/morphir/types';

// ── /search ──────────────────────────────────────────────────────────────────

export function cmdSearch(q: string) {
  if (!q) return { results: [] };
  const sections = getAllSections();
  return { results: search(q, sections) };
}

// ── /show ─────────────────────────────────────────────────────────────────────

export function cmdShow(id: string) {
  if (!id) return { error: 'id required' };
  const section = getSection(id.toUpperCase());
  if (!section) return { error: 'Not found' };
  return section;
}

// ── /map ─────────────────────────────────────────────────────────────────────

export function cmdMap(product: string) {
  if (!product) return { error: 'product required' };
  const sections = getAllSections();
  const fuse = new Fuse(sections, {
    keys: [
      { name: 'section_name', weight: 0.3 },
      { name: 'definition_summary', weight: 0.4 },
      { name: 'content', weight: 0.2 },
      { name: 'data_fields.values', weight: 0.1 },
    ],
    includeScore: true,
    threshold: 0.65,
  });
  const results = fuse.search(product).slice(0, 5);
  return {
    query: product,
    matches: results.map(r => ({
      section_id: r.item.section_id,
      section_name: r.item.section_name,
      category: r.item.category,
      category_name: r.item.category_name,
      pillar: r.item.pillar,
      confidence: Math.round((1 - (r.score ?? 1)) * 100),
      definition_summary: r.item.definition_summary,
    })),
    note: 'Classification guidance only — verify against the full section instructions.',
  };
}

// ── /fields ───────────────────────────────────────────────────────────────────

export function cmdFields(id: string) {
  if (!id) return { error: 'id required' };
  const upper = id.toUpperCase();
  const parts = upper.split('.');
  const isCategory = parts.length <= 2;

  if (isCategory) {
    const sections = getSectionsByCategory(upper);
    if (!sections.length) return { error: 'Category not found' };
    const fieldMap: Record<string, { type: string; sections: string[]; values?: string[] }> = {};
    for (const section of sections) {
      for (const field of section.data_fields ?? []) {
        if (!fieldMap[field.name]) {
          fieldMap[field.name] = { type: field.type, sections: [], values: field.values };
        }
        fieldMap[field.name].sections.push(section.section_id);
      }
    }
    return { category: upper, section_count: sections.length, fields: fieldMap };
  }

  const section = getSection(upper);
  if (!section) return { error: 'Section not found' };
  return { section_id: section.section_id, section_name: section.section_name, data_fields: section.data_fields };
}

// ── /enums ────────────────────────────────────────────────────────────────────

export function cmdEnums(fieldName: string) {
  if (!fieldName) return { error: 'field required' };
  const sections = getAllSections();
  const bySection: { section_id: string; section_name: string; values: string[] }[] = [];
  const allValues = new Set<string>();

  for (const section of sections) {
    const field = section.data_fields?.find(f => f.name.toLowerCase() === fieldName.toLowerCase());
    if (field?.values?.length) {
      bySection.push({ section_id: section.section_id, section_name: section.section_name, values: field.values });
      field.values.forEach(v => allValues.add(v));
    }
  }

  return {
    field: fieldName,
    unique_values: [...allValues].sort(),
    section_count: bySection.length,
    by_section: bySection,
  };
}

// ── /xref ─────────────────────────────────────────────────────────────────────

export function cmdXref(id: string) {
  if (!id) return { error: 'id required' };
  const allSections = getAllSections();
  const normalizedId = id.toUpperCase();

  const section = getSection(normalizedId);
  if (section) {
    const inbound = allSections
      .filter(s => s.section_id !== normalizedId)
      .filter(s => s.cross_references?.some(xr => xr.section === normalizedId))
      .map(s => ({
        section_id: s.section_id,
        section_name: s.section_name,
        relationship: s.cross_references?.find(xr => xr.section === normalizedId)?.relationship,
      }));
    const morphirRules = getMorphirRulesForSection(normalizedId);
    return {
      query: id,
      type: 'section',
      section_id: section.section_id,
      section_name: section.section_name,
      outbound: section.cross_references ?? [],
      inbound,
      morphir_rules: morphirRules.length ? morphirRules : undefined,
    };
  }

  const query = id.toLowerCase();
  const matches = allSections
    .filter(s =>
      s.cross_references?.some(xr =>
        xr.regulation?.toLowerCase().includes(query) ||
        xr.description?.toLowerCase().includes(query) ||
        xr.relationship?.toLowerCase().includes(query)
      )
    )
    .map(s => ({
      section_id: s.section_id,
      section_name: s.section_name,
      references: s.cross_references?.filter(xr =>
        xr.regulation?.toLowerCase().includes(query) ||
        xr.description?.toLowerCase().includes(query) ||
        xr.relationship?.toLowerCase().includes(query)
      ),
    }));

  return { query: id, type: 'regulation_or_concept', sections_referencing: matches, count: matches.length };
}

// ── /diff ─────────────────────────────────────────────────────────────────────

export function cmdDiff(id: string, from = '(previous version)', to = 'current') {
  return {
    section_id: id,
    from,
    to,
    status: 'single_version',
    message:
      'Version comparison will be available when historical form versions are populated. ' +
      'Currently only the 2025-02-26 version is loaded. ' +
      'Historical versions (2023-03-01, 2022-04-29, and earlier) are planned for a future content update.',
    current_version: '2025-02-26',
    available_versions: ['2025-02-26'],
    added_fields: [],
    removed_fields: [],
    changed_definitions: [],
    changed_notes: [],
  };
}

// ── /schema ───────────────────────────────────────────────────────────────────

export function cmdSchema(id: string) {
  if (!id) return { error: 'id required' };
  const section = getSection(id.toUpperCase());
  if (!section) return { error: 'Not found' };
  const { content: _c, ...frontmatter } = section;
  return frontmatter;
}

// ── /filter ───────────────────────────────────────────────────────────────────

export function cmdFilter(params: {
  pillar?: string;
  category?: string;
  has_field?: string;
  field_value?: string;
}) {
  let sections = getAllSections();
  if (params.pillar) sections = sections.filter(s => s.pillar === params.pillar!.toLowerCase());
  if (params.category) sections = sections.filter(s => s.category === params.category!.toUpperCase());
  if (params.has_field) {
    const fn = params.has_field.toLowerCase();
    sections = sections.filter(s => s.data_fields?.some(f => f.name.toLowerCase() === fn));
  }
  if (params.field_value) {
    const [fname, fval] = params.field_value.split('=');
    if (fname && fval) {
      const fn = fname.toLowerCase();
      sections = sections.filter(s =>
        s.data_fields?.some(f => f.name.toLowerCase() === fn && f.values?.includes(fval))
      );
    }
  }
  return {
    filters: params,
    count: sections.length,
    sections: sections.map(s => ({
      section_id: s.section_id,
      section_name: s.section_name,
      category: s.category,
      category_name: s.category_name,
      pillar: s.pillar,
      definition_summary: s.definition_summary,
    })),
  };
}

// ── /export ───────────────────────────────────────────────────────────────────

function resolveSections(scope: string): Section[] {
  if (scope === 'all') return getAllSections();
  if (['inflows', 'outflows', 'supplemental'].includes(scope.toLowerCase())) {
    return getSectionsByPillar(scope.toLowerCase());
  }
  const parts = scope.toUpperCase().split('.');
  if (parts.length <= 2) {
    const byCat = getSectionsByCategory(scope.toUpperCase());
    if (byCat.length) return byCat;
  }
  const single = getSection(scope.toUpperCase());
  return single ? [single] : [];
}

export function cmdExport(scope: string, format: 'json' | 'yaml' | 'md' = 'json') {
  const sections = resolveSections(scope);

  if (format === 'json') {
    return { type: 'json', data: { scope, count: sections.length, sections } };
  }

  if (format === 'yaml') {
    const text = sections
      .map(s => {
        const { content: _, ...fm } = s;
        return yaml.dump(fm);
      })
      .join('\n---\n\n');
    return { type: 'yaml', text };
  }

  // Markdown
  const text = sections
    .map(s => {
      const { content, ...fm } = s;
      return `---\n${yaml.dump(fm)}---\n\n${content ?? ''}\n`;
    })
    .join('\n\n---\n\n');
  return { type: 'md', text };
}

// ── /glossary ─────────────────────────────────────────────────────────────────

export function cmdGlossary(term?: string) {
  const terms = getGlossary();
  if (!term) return { terms };

  const fuse = new Fuse(terms, {
    keys: [
      { name: 'term', weight: 0.5 },
      { name: 'full_name', weight: 0.3 },
      { name: 'definition', weight: 0.2 },
    ],
    threshold: 0.4,
    includeScore: true,
  });

  const results = fuse.search(term).map(r => r.item);
  return { query: term, results };
}

// ── /morphir ─────────────────────────────────────────────────────────────────

export function cmdMorphir(query: string) {
  if (!query) return { error: 'query required' };
  const mapping = getMorphirMapping();

  // Category filter
  if (['outflows', 'outflow', 'inflows', 'inflow', 'hqla'].includes(query.toLowerCase())) {
    const cat = query.toLowerCase().replace(/s$/, ''); // normalize "outflows" → "outflow"
    const filtered = mapping.rules.filter(r => r.category === cat);
    return { query, type: 'category_filter', count: filtered.length, rules: filtered };
  }

  // "all" — return full mapping
  if (query.toLowerCase() === 'all') {
    return { query, type: 'full_mapping', count: mapping.rules.length, rules: mapping.rules };
  }

  // Check if it looks like a Morphir rule code (contains parentheses or starts with digits)
  if (/^\d/.test(query) || query.includes('(')) {
    const rule = mapping.rules.find(r => r.rule === query);
    if (rule) {
      return {
        query,
        type: 'morphir_rule',
        rule,
        linked_sections: rule.fr2052a.map(id => {
          const s = getSection(id);
          return s
            ? { section_id: s.section_id, section_name: s.section_name, category: s.category, pillar: s.pillar }
            : { section_id: id };
        }),
      };
    }
    // Partial match
    const matches = mapping.rules.filter(r => r.rule.includes(query) || r.cfr.includes(query));
    if (matches.length) {
      return { query, type: 'morphir_rule_search', count: matches.length, rules: matches };
    }
  }

  // Check if it looks like a section ID
  const upper = query.toUpperCase();
  const rulesForSection = getMorphirRulesForSection(upper);
  if (rulesForSection.length) {
    const section = getSection(upper);
    return {
      query,
      type: 'section_rules',
      section_id: upper,
      section_name: section?.section_name,
      morphir_rules: rulesForSection,
    };
  }

  // Fallback: fuzzy search in descriptions
  const descMatches = mapping.rules.filter(r =>
    r.description.toLowerCase().includes(query.toLowerCase()) ||
    r.cfr.toLowerCase().includes(query.toLowerCase())
  );
  if (descMatches.length) {
    return { query, type: 'description_search', count: descMatches.length, rules: descMatches };
  }

  return { query, type: 'no_results', message: 'No matching Morphir rules or sections found.' };
}

// ── /raw-md ───────────────────────────────────────────────────────────────────

export function cmdRawMd(id: string) {
  if (!id) return { type: 'error', error: 'id required' };
  const raw = getSectionRaw(id.toUpperCase());
  if (!raw) return { type: 'error', error: 'Not found' };
  const { rawFrontmatter, rawBody } = raw;
  return { type: 'md', text: `${rawFrontmatter}\n\n${rawBody}` };
}

// ── /morphir/classify ─────────────────────────────────────────────────────────

/**
 * Classify a single Flow against all outflow and inflow rules.
 * Returns matching rules with weights, weighted amounts, and linked FR 2052a sections.
 */
export function cmdClassifyFlow(input: { flow: Flow; date?: string }) {
  const { flow } = input;

  const matchingOutflows = outflowRules
    .filter(rule => rule.applies(flow))
    .map(rule => ({
      rule: rule.name,
      weight: rule.weight,
      weighted_amount: flow.amount * rule.weight,
      type: 'outflow' as const,
    }));

  const matchingInflows = inflowRules
    .filter(rule => rule.applies(flow))
    .map(rule => ({
      rule: rule.name,
      weight: rule.weight,
      weighted_amount: flow.amount * rule.weight,
      type: 'inflow' as const,
    }));

  const allMatches = [...matchingOutflows, ...matchingInflows];

  // Cross-reference to FR 2052a sections via the rule-map
  const mapping = getMorphirMapping();
  const linkedSections = allMatches.flatMap(m => {
    const ruleEntry = mapping.rules.find(r => r.rule === m.rule);
    return ruleEntry?.fr2052a ?? [];
  });
  const uniqueSections = [...new Set(linkedSections)];

  return {
    flow_amount: flow.amount,
    matching_rules: allMatches,
    match_count: allMatches.length,
    linked_fr2052a_sections: uniqueSections,
    disclaimer:
      'Based on 12 CFR 249 (2014 final rule) / FINOS Morphir LCR sample. ' +
      'Verify against current regulatory requirements.',
  };
}

// ── /morphir/compute ──────────────────────────────────────────────────────────

interface LcrInput {
  hqla_flows: Flow[];
  outflow_flows: Flow[];
  inflow_flows: Flow[];
  reporting_date: string;
}

/**
 * Compute the full LCR from three flow buckets.
 * Returns HQLA breakdown, outflow/inflow drill-down by rule, and final LCR ratio.
 */
export function cmdComputeLcr(input: LcrInput) {
  const { hqla_flows, outflow_flows, inflow_flows, reporting_date } = input;

  const result = computeLcr(hqla_flows, outflow_flows, inflow_flows, reporting_date);

  // HQLA breakdown by level
  const level1 = hqla_flows
    .filter(f => f.assetCategory === 'Level1Assets')
    .reduce((s, f) => s + f.amount, 0);
  const level2a = hqla_flows
    .filter(f => f.assetCategory === 'Level2aAssets')
    .reduce((s, f) => s + f.amount * 0.85, 0);
  const level2b = hqla_flows
    .filter(f => f.assetCategory === 'Level2bAssets')
    .reduce((s, f) => s + f.amount * 0.5, 0);

  // Outflow rule drill-down
  const outflowByRule = outflowRules
    .map(rule => {
      const matching = outflow_flows.filter(f => rule.applies(f));
      const gross = matching.reduce((s, f) => s + f.amount, 0);
      return {
        rule: rule.name,
        weight: rule.weight,
        flow_count: matching.length,
        gross_amount: gross,
        weighted_amount: gross * rule.weight,
      };
    })
    .filter(r => r.flow_count > 0);

  // Inflow rule drill-down
  const inflowByRule = inflowRules
    .map(rule => {
      const matching = inflow_flows.filter(f => rule.applies(f));
      const gross = matching.reduce((s, f) => s + f.amount, 0);
      return {
        rule: rule.name,
        weight: rule.weight,
        flow_count: matching.length,
        gross_amount: gross,
        weighted_amount: gross * rule.weight,
      };
    })
    .filter(r => r.flow_count > 0);

  return {
    reporting_date,
    lcr_ratio: isFinite(result.ratio) ? result.ratio : null,
    lcr_percentage: isFinite(result.ratio)
      ? (result.ratio * 100).toFixed(2) + '%'
      : '∞',
    hqla: {
      level1_gross: level1,
      level2a_haircut: level2a,
      level2b_haircut: level2b,
      total_adjusted: result.hqla,
    },
    outflows: {
      by_rule: outflowByRule,
      gross_total: result.grossOutflow,
    },
    inflows: {
      by_rule: inflowByRule,
      capped_total: result.cappedInflow,
    },
    maturity_mismatch_add_on: result.mismatchAddOn,
    total_net_cash_outflow: result.netCashOutflow,
    flow_counts: {
      hqla: hqla_flows.length,
      outflows: outflow_flows.length,
      inflows: inflow_flows.length,
    },
    disclaimer:
      'Based on 12 CFR 249 (2014 final rule) / FINOS Morphir LCR sample. ' +
      'For educational/illustrative purposes. Verify against current regulatory requirements.',
  };
}

// ── /morphir/stress ───────────────────────────────────────────────────────────

type StressAdjustment =
  | { type: 'scale_outflows'; factor: number }
  | { type: 'scale_inflows'; factor: number }
  | { type: 'reduce_hqla'; factor: number }
  | { type: 'add_flows'; bucket: 'hqla' | 'outflows' | 'inflows'; flows: Flow[] };

/**
 * Run a stress test: compute base LCR, apply adjustments, compute stressed LCR,
 * return base vs. stressed comparison with delta analysis.
 */
export function cmdStressTest(input: {
  hqla_flows: Flow[];
  outflow_flows: Flow[];
  inflow_flows: Flow[];
  reporting_date: string;
  adjustments: StressAdjustment[];
}) {
  const { hqla_flows, outflow_flows, inflow_flows, reporting_date, adjustments } = input;

  // Base case
  const base = cmdComputeLcr({ hqla_flows, outflow_flows, inflow_flows, reporting_date });

  // Apply adjustments to create stressed flow buckets
  let sHqla = [...hqla_flows];
  let sOut = [...outflow_flows];
  let sIn = [...inflow_flows];

  for (const adj of adjustments) {
    switch (adj.type) {
      case 'scale_outflows':
        sOut = sOut.map(f => ({ ...f, amount: f.amount * adj.factor }));
        break;
      case 'scale_inflows':
        sIn = sIn.map(f => ({ ...f, amount: f.amount * adj.factor }));
        break;
      case 'reduce_hqla':
        sHqla = sHqla.map(f => ({ ...f, amount: f.amount * adj.factor }));
        break;
      case 'add_flows':
        if (adj.bucket === 'hqla') sHqla = [...sHqla, ...adj.flows];
        else if (adj.bucket === 'outflows') sOut = [...sOut, ...adj.flows];
        else sIn = [...sIn, ...adj.flows];
        break;
    }
  }

  // Stressed case
  const stressed = cmdComputeLcr({
    hqla_flows: sHqla,
    outflow_flows: sOut,
    inflow_flows: sIn,
    reporting_date,
  });

  const baseRatio = base.lcr_ratio ?? Infinity;
  const stressedRatio = stressed.lcr_ratio ?? Infinity;
  const ratioDelta = isFinite(stressedRatio) && isFinite(baseRatio)
    ? stressedRatio - baseRatio
    : null;

  return {
    reporting_date,
    base: {
      lcr_ratio: base.lcr_ratio,
      lcr_percentage: base.lcr_percentage,
      hqla_total: base.hqla.total_adjusted,
      total_net_cash_outflow: base.total_net_cash_outflow,
    },
    stressed: {
      lcr_ratio: stressed.lcr_ratio,
      lcr_percentage: stressed.lcr_percentage,
      hqla_total: stressed.hqla.total_adjusted,
      total_net_cash_outflow: stressed.total_net_cash_outflow,
    },
    delta: {
      lcr_ratio_change: ratioDelta,
      lcr_pp_change: ratioDelta !== null
        ? (ratioDelta * 100).toFixed(2) + ' pp'
        : null,
      hqla_change: stressed.hqla.total_adjusted - base.hqla.total_adjusted,
      net_outflow_change: stressed.total_net_cash_outflow - base.total_net_cash_outflow,
    },
    adjustments_applied: adjustments,
    disclaimer:
      'Based on 12 CFR 249 (2014 final rule) / FINOS Morphir LCR sample. ' +
      'For educational/illustrative purposes. Verify against current regulatory requirements.',
  };
}
