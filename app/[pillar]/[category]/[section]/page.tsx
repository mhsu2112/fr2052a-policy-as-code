import { getSectionRaw, getAllSections, getFormMetadata } from '@/lib/content';
import SectionPageClient from '@/components/SectionPageClient';
import { notFound } from 'next/navigation';

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

  return (
    <SectionPageClient
      section={result.section}
      rawFrontmatter={result.rawFrontmatter}
      rawBody={result.rawBody}
      metadata={metadata}
      allSections={allSections}
    />
  );
}
