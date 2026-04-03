// FR 2052a TypeScript type definitions

export interface FR2052aForm {
  form_id: string;
  form_name: string;
  omb_control_number: string;
  authority: string;
  current_version: string;
  effective_date: string;
  frequency: {
    daily: string[];
    monthly: string[];
  };
  respondent_panel: {
    threshold: string;
    includes: string[];
  };
  pillars: Pillar[];
  pdf_url: string;
  historical_versions: HistoricalVersion[];
}

export interface HistoricalVersion {
  date: string;
  url: string;
  status: 'current' | 'not_yet_populated' | 'archived';
}

export interface Pillar {
  id: string;
  name: string;
  categories: string[];
}

export interface Category {
  id: string; // e.g. "I.A"
  name: string;
  pillar: string;
  sections: Section[];
}

export interface Section {
  section_id: string; // e.g. "I.A.1"
  section_name: string;
  pillar: string;
  category: string;
  category_name: string;
  definition_summary: string;
  definition_full?: string; // verbatim instruction text body (markdown)
  data_fields: DataField[];
  cross_references: CrossReference[];
  reporting_notes?: string;
  version_history: VersionHistoryEntry[];
  // Raw markdown body (everything after frontmatter)
  content?: string;
  morphir_rules?: MorphirRule[];
}

export type DataFieldType = 'enum' | 'date_bucket' | 'decimal' | 'boolean' | 'string';

export interface DataField {
  name: string;
  type: DataFieldType;
  values?: string[]; // for enum type
  description?: string;
  required?: boolean;
  conditional_on?: string;
  currency?: string;
}

export interface CrossReference {
  section?: string; // internal section code
  regulation?: string; // external regulation citation
  relationship?: string;
  description?: string;
}

export interface VersionHistoryEntry {
  version: string; // date string "YYYY-MM-DD"
  change: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  source: string;
  related_sections: string[];
}

export interface Annotation {
  id: string;
  org_id: string;
  section_id: string;
  user_id: string;
  content: string; // markdown
  category: 'interpretation' | 'internal_policy' | 'examiner_guidance' | 'open_question';
  visibility: 'org_private' | 'community_anonymous' | 'community_attributed';
  created_at: string;
  updated_at: string;
}

export interface SearchResult {
  section_id: string;
  section_name: string;
  category: string;
  pillar: string;
  match_context: string;
  score: number;
}

export type Mode = 'human' | 'machine';

// ── Morphir LCR integration ──────────────────────────────────────────

export interface MorphirRule {
  rule: string;           // Morphir rule name, e.g. "32(a)(1)"
  cfr: string;            // 12 CFR 249 section, e.g. "§249.32(a)(1)"
  weight: number;         // stress rate (0.0 – 1.0)
  fr2052a: string[];      // FR 2052a section_ids (2025 version)
  category: 'outflow' | 'inflow' | 'hqla';
  module: string;         // Morphir Elm module name
  description: string;
  status: 'confirmed' | 'provisional';
}

export interface MorphirMapping {
  rules: MorphirRule[];
}
