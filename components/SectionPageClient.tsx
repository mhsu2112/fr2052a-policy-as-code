'use client';

import { useModeStore } from '@/lib/store';
import SectionNav from './SectionNav';
import HumanRenderer from './HumanRenderer';
import MachineRenderer from './MachineRenderer';
import AnnotationPanel from './AnnotationPanel';
import type { FR2052aForm, Section } from '@/lib/types';

interface Props {
  section: Section;
  rawFrontmatter: string;
  rawBody: string;
  metadata: FR2052aForm;
  allSections: Section[];
}

export default function SectionPageClient({
  section,
  rawFrontmatter,
  rawBody,
  metadata,
  allSections,
}: Props) {
  const { mode } = useModeStore();
  const isDark = mode === 'machine';

  return (
    <div
      className={`flex ${isDark ? 'bg-slate-900' : 'bg-surface-50'}`}
      style={{ height: 'calc(100vh - 6.5rem)' }}
    >
      <SectionNav metadata={metadata} sections={allSections} />

      <div className="flex-1 overflow-y-auto">
        {mode === 'human' ? (
          <HumanRenderer section={section} />
        ) : (
          <MachineRenderer
            section={section}
            rawFrontmatter={rawFrontmatter}
            rawBody={rawBody}
          />
        )}
      </div>

      {/* Annotation panel — human mode only */}
      {mode === 'human' && (
        <AnnotationPanel sectionId={section.section_id} />
      )}
    </div>
  );
}
