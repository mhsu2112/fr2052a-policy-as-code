'use client';

import { useModeStore } from '@/lib/store';
import ScrollTOC from './ScrollTOC';
import HumanRenderer from './HumanRenderer';
import MachineRenderer from './MachineRenderer';
import AnnotationPanel from './AnnotationPanel';
import type { FR2052aForm, Section, MorphirRule } from '@/lib/types';

interface Props {
  section: Section;
  rawFrontmatter: string;
  rawBody: string;
  metadata: FR2052aForm;
  allSections: Section[];
  morphirRules: MorphirRule[];
}

export default function SectionPageClient({
  section,
  rawFrontmatter,
  rawBody,
  metadata,
  allSections,
  morphirRules,
}: Props) {
  const { mode } = useModeStore();
  const isDark = mode === 'machine';

  return (
    <div
      className={`flex ${isDark ? 'bg-slate-900' : 'bg-surface-50'}`}
      style={{ height: 'calc(100vh - 6rem)' }}
    >
      <ScrollTOC
        metadata={metadata}
        sections={allSections}
        activeId={section.section_id}
        scrollMode={false}
      />

      <div className="flex-1 overflow-y-auto">
        {mode === 'human' ? (
          <HumanRenderer section={section} morphirRules={morphirRules} />
        ) : (
          <MachineRenderer
            section={section}
            rawFrontmatter={rawFrontmatter}
            rawBody={rawBody}
            morphirRules={morphirRules}
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
