import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import type { Section, FR2052aForm, GlossaryTerm } from './types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getAllSections(): Section[] {
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
