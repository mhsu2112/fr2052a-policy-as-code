import CopyButton from './CopyButton';
import type { Section } from '@/lib/types';

export default function MachineRenderer({
  section,
  rawFrontmatter = '',
  rawBody = '',
}: {
  section: Section;
  rawFrontmatter?: string;
  rawBody?: string;
}) {
  const body = rawBody || section.content || '';

  return (
    <div className="machine-mode min-h-full p-6 font-mono text-sm">
      <div className="max-w-3xl mx-auto space-y-5">

        {/* Frontmatter block */}
        {rawFrontmatter && (
          <div className="relative group">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-1.5 font-sans">
              Frontmatter
            </p>
            <div className="relative">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <CopyButton text={rawFrontmatter} />
              </div>
              <pre className="text-slate-300 whitespace-pre-wrap break-words bg-slate-800/60 rounded-lg p-4 border border-slate-700 text-xs leading-relaxed">
                {rawFrontmatter}
              </pre>
            </div>
          </div>
        )}

        {/* Markdown body block */}
        {body && (
          <div className="relative group">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-1.5 font-sans">
              Markdown Body
            </p>
            <div className="relative">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <CopyButton text={body} />
              </div>
              <pre className="text-slate-200 whitespace-pre-wrap break-words bg-slate-800/60 rounded-lg p-4 border border-slate-700 text-xs leading-relaxed">
                {body}
              </pre>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
