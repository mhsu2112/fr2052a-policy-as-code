import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import type { Section, FR2052aForm, GlossaryTerm, MorphirRule, MorphirMapping } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// ── Module-level cache ──────────────────────────────────────────────
// Content is static between deploys, so we cache after the first read.
let _sectionsCache: Section[] | null = null;
let _rawCache: Map<string, { rawFrontmatter: string; rawBody: string }> | null = null;

function loadAllSections(): Section[] {
  const sections: Section[] = [];
  const pillars = ['inflows', 'outflows', 'supplemental'];

  for (const pillar of pillars) {
    const pillarDir = path.join(CONTENT_DIR, pillar);
    if (!fs.existsSync(pillarDir)) continue;

    const categories = fs.readdirSync(pillarDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name);

    for (const category of categories) {
      const categoryDir = path.join(pillarDir, category);
      const files = fs.readdirSync(categoryDir)
        .filter(f => f.endsWith('.md') && !f.startsWith('_'));

      for (const file of files) {
        const filePath = path.join(categoryDir, file);
        const raw = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(raw);
        sections.push({
          ...data,
          content,
        } as Section);
      }
    }
  }

  return sections;
}

export function getAllSections(): Section[] {
  if (!_sectionsCache) {
    _sectionsCache = loadAllSections();
  }
  return _sectionsCache;
}

export function getSection(sectionId: string): Section | null {
  const sections = getAllSections();
  return sections.find(s => s.section_id === sectionId) ?? null;
}

export function getSectionsByPillar(pillar: string): Section[] {
  const pillarDir = path.join(CONTENT_DIR, pillar);
  if (!fs.existsSync(pillarDir)) return [];

  const sections: Section[] = [];
  const categories = fs.readdirSync(pillarDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  for (const category of categories) {
    const categoryDir = path.join(pillarDir, category);
    const files = fs.readdirSync(categoryDir)
      .filter(f => f.endsWith('.md') && !f.startsWith('_'));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      sections.push({ ...data, content } as Section);
    }
  }

  return sections;
}

export function getSectionsByCategory(categoryId: string): Section[] {
  const allSections = getAllSections();
  return allSections.filter(s => s.category === categoryId);
}

export function getFormMetadata(): FR2052aForm {
  const metaPath = path.join(CONTENT_DIR, '_meta.yaml');
  const raw = fs.readFileSync(metaPath, 'utf-8');
  return yaml.load(raw) as FR2052aForm;
}

export function getGlossary(): GlossaryTerm[] {
  const glossaryPath = path.join(CONTENT_DIR, 'glossary', 'terms.yaml');
  const raw = fs.readFileSync(glossaryPath, 'utf-8');
  const data = yaml.load(raw) as { terms: GlossaryTerm[] };
  return data.terms;
}

export function getFormMetadataRaw(): string {
  const metaPath = path.join(CONTENT_DIR, '_meta.yaml');
  return fs.readFileSync(metaPath, 'utf-8');
}

export function getMorphirMapping(): MorphirMapping {
  const mapPath = path.join(CONTENT_DIR, 'morphir', 'rule-map.yaml');
  if (!fs.existsSync(mapPath)) return { rules: [] };
  const raw = fs.readFileSync(mapPath, 'utf-8');
  return yaml.load(raw) as MorphirMapping;
}

export function getMorphirRulesForSection(sectionId: string): MorphirRule[] {
  const mapping = getMorphirMapping();
  return mapping.rules.filter(r => r.fr2052a.includes(sectionId.toUpperCase()));
}

export function getSectionsForMorphirRule(ruleName: string): string[] {
  const mapping = getMorphirMapping();
  const rule = mapping.rules.find(r => r.rule === ruleName);
  return rule?.fr2052a ?? [];
}

export function getSectionRaw(sectionId: string): {
  section: Section;
  rawFrontmatter: string;
  rawBody: string;
} | null {
  const pillars = ['inflows', 'outflows', 'supplemental'];
  for (const pillar of pillars) {
    const pillarDir = path.join(CONTENT_DIR, pillar);
    if (!fs.existsSync(pillarDir)) continue;
    const categories = fs.readdirSync(pillarDir, { withFileTypes: true })
      .filter(d => d.isDirectory()).map(d => d.name);
    for (const category of categories) {
      const categoryDir = path.join(pillarDir, category);
      const files = fs.readdirSync(categoryDir)
        .filter(f => f.endsWith('.md') && !f.startsWith('_'));
      for (const file of files) {
        const filePath = path.join(categoryDir, file);
        const raw = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(raw);
        const section = { ...data, content } as Section;
        if (section.section_id === sectionId) {
          const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
          const rawFrontmatter = match ? match[0].trimEnd() : '';
          return { section, rawFrontmatter, rawBody: content.trimStart() };
        }
      }
    }
  }
  return null;
}
