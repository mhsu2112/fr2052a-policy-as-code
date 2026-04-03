import { getSectionRaw, getAllSections, getFormMetadata, getMorphirRulesForSection } from '@/lib/content';
import SectionPageClient from '@/components/SectionPageClient';
import { notFound } from 'next/navigation';

const PILLAR_MAP: Record<string, string> = { I: 'inflows', O: 'outflows', S: 'supplemental' };

/** Pre-build all 164 section pages at build time */
export async function generateStaticParams() {
  const sections = getAllSections();
  return sections.map((s) => {
    const parts = s.section_id.split('.');
    const pillar = PILLAR_MAP[parts[0]] ?? 'inflows';
    const category = parts.slice(0, 2).join('.').toLowerCase().replace('.', '-');
    const section = s.section_id.toLowerCase().replace(/\./g, '-');
    return { pillar, category, section };
  });
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ pillar: string; category: string; section: string }>;
}) {
  const { section } = await params;
  const sectionId = section.toUpperCase().replace(/-/g, '.');

  let result, allSections, metadata;
  try {
    result = getSectionRaw(sectionId);
    allSections = getAllSections();
    metadata = getFormMetadata();
  } catch {
    return notFound();
  }

  if (!result) return notFound();

  const morphirRules = getMorphirRulesForSection(sectionId);

  return (
    <SectionPageClient
      section={result.section}
      rawFrontmatter={result.rawFrontmatter}
      rawBody={result.rawBody}
      metadata={metadata}
      allSections={allSections}
      morphirRules={morphirRules}
    />
  );
}
