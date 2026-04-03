import Fuse from 'fuse.js';
import type { Section, SearchResult } from './types';

// ── Cached Fuse index (singleton) ───────────────────────────────────
let _fuseCache: Fuse<Section> | null = null;
let _fuseSectionCount = 0;

export function buildSearchIndex(sections: Section[]): Fuse<Section> {
  // Rebuild only if sections have changed (e.g. after cache invalidation)
  if (_fuseCache && _fuseSectionCount === sections.length) return _fuseCache;

  _fuseCache = new Fuse(sections, {
    keys: [
      { name: 'section_id', weight: 0.35 },
      { name: 'section_name', weight: 0.3 },
      { name: 'category_name', weight: 0.1 },
      { name: 'definition_summary', weight: 0.15 },
      { name: 'reporting_notes', weight: 0.05 },
      { name: 'content', weight: 0.05 },
      { name: 'data_fields.name', weight: 0.1 },
      { name: 'data_fields.values', weight: 0.05 },
    ],
    includeScore: true,
    includeMatches: true,
    threshold: 0.4,
    ignoreLocation: true,
  });
  _fuseSectionCount = sections.length;
  return _fuseCache;
}

export function search(query: string, sections: Section[]): SearchResult[] {
  const fuse = buildSearchIndex(sections);
  const results = fuse.search(query);

  return results.slice(0, 20).map(r => {
    // Pick the best match context from any matched field
    let matchContext = r.item.definition_summary ?? '';
    if (r.matches?.length) {
      const best = r.matches.find(m => m.key !== 'section_id' && m.key !== 'section_name');
      if (best?.value) matchContext = best.value;
    }

    return {
      section_id: r.item.section_id,
      section_name: r.item.section_name,
      category: r.item.category,
      pillar: r.item.pillar,
      match_context: matchContext,
      score: r.score ?? 0,
    };
  });
}
