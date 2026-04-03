import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { CrossReference } from '@/lib/types';

function sectionCodeToUrl(code: string): string {
  const pillarMap: Record<string, string> = { I: 'inflows', O: 'outflows', S: 'supplemental' };
  const parts = code.split('.');
  const pillar = pillarMap[parts[0]] ?? 'inflows';
  const cat = parts.slice(0, 2).join('.').toLowerCase().replace('.', '-');
  const section = code.toLowerCase().replace(/\./g, '-');
  return `/${pillar}/${cat}/${section}`;
}

export default function CrossRefLinks({ refs }: { refs: CrossReference[] }) {
  if (!refs || refs.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {refs.map((ref, i) => (
        <div key={i}>
          {ref.section ? (
            <Link
              href={sectionCodeToUrl(ref.section)}
              title={ref.relationship ?? ref.description}
              className="inline-flex items-center gap-1.5 text-xs text-primary-600 bg-primary-50 border border-primary-200 rounded-full px-3 py-1 hover:bg-primary-100 transition-colors font-mono"
            >
              <span>→ {ref.section}</span>
              {ref.relationship && (
                <span className="font-sans text-[11px] text-slate-500 font-normal">· {ref.relationship}</span>
              )}
            </Link>
          ) : ref.regulation ? (
            <span
              title={ref.description}
              className="inline-flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1 font-medium"
            >
              <ExternalLink size={11} className="text-slate-400 shrink-0" />
              {ref.regulation}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
