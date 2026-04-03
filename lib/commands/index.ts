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
} from '@/lib/content';
import { search } from '@/lib/search';
import Fuse from 'fuse.js';
import yaml from 'js-yaml';
import type { Section } from '@/lib/types';

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
    return {
      query: id,
      type: 'section',
      section_id: section.section_id,
      section_name: section.section_name,
      outbound: section.cross_references ?? [],
      inbound,
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

// ── /raw-md ───────────────────────────────────────────────────────────────────

export function cmdRawMd(id: string) {
  if (!id) return { type: 'error', error: 'id required' };
  const raw = getSectionRaw(id.toUpperCase());
  if (!raw) return { type: 'error', error: 'Not found' };
  const { rawFrontmatter, rawBody } = raw;
  return { type: 'md', text: `${rawFrontmatter}\n\n${rawBody}` };
}
