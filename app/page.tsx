import { getFormMetadata, getFormMetadataRaw } from '@/lib/content';
import LandingPageClient from '@/components/LandingPageClient';

export default async function HomePage() {
  let meta = null;
  let metaRaw = '';
  try {
    meta = getFormMetadata();
    metaRaw = getFormMetadataRaw();
  } catch {
    // Content not yet available — LandingPageClient handles null gracefully
  }

  return <LandingPageClient meta={meta} metaRaw={metaRaw} />;
}
