import { getFormMetadata, getFormMetadataRaw, getAllSections, getSectionRaw } from '@/lib/content';
import LandingPageClient from '@/components/LandingPageClient';

export default async function HomePage() {
  let meta = null;
  let metaRaw = '';
  let allSections: ReturnType<typeof getAllSections> = [];
  let rawContentMap: Record<string, { rawFrontmatter: string; rawBody: string }> = {};

  try {
    meta = getFormMetadata();
    metaRaw = getFormMetadataRaw();
    allSections = getAllSections();

    // Build raw content map for machine mode
    for (const section of allSections) {
      const raw = getSectionRaw(section.section_id);
      if (raw) {
        rawContentMap[section.section_id] = {
          rawFrontmatter: raw.rawFrontmatter,
          rawBody: raw.rawBody,
        };
      }
    }
  } catch {
    // Content not yet available — LandingPageClient handles null gracefully
  }

  return (
    <LandingPageClient
      meta={meta}
      metaRaw={metaRaw}
      allSections={allSections}
      rawContentMap={rawContentMap}
    />
  );
}
