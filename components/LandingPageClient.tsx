'use client';

import Link from 'next/link';
import { useModeStore } from '@/lib/store';
import CopyButton from './CopyButton';
import type { FR2052aForm } from '@/lib/types';

const PILLAR_DESCRIPTIONS: Record<string, string> = {
  inflows: 'Unencumbered assets, unsecured inflows, secured inflows, and other cash inflows.',
  outflows: 'Wholesale funding, secured outflows, deposit outflows, and other contractual outflows.',
  supplemental: 'Informational positions and foreign exchange exposures.',
};

const PILLAR_BADGE: Record<string, string> = {
  inflows: 'bg-blue-100 text-blue-700 border-blue-200',
  outflows: 'bg-red-100 text-red-700 border-red-200',
  supplemental: 'bg-slate-100 text-slate-600 border-slate-200',
};

interface Props {
  meta: FR2052aForm | null;
  metaRaw: string;
}

export default function LandingPageClient({ meta, metaRaw }: Props) {
  const { mode } = useModeStore();

  // Machine mode — show raw _meta.yaml
  if (mode === 'machine') {
    return (
      <div className="machine-mode min-h-screen p-6 font-mono text-sm">
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <p className="text-[10px] text-slate-600 uppercase tracking-widest mb-1.5 font-sans">
              _meta.yaml
            </p>
            <div className="relative">
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <CopyButton text={metaRaw} />
              </div>
              <pre className="text-slate-300 whitespace-pre-wrap break-words bg-slate-800/60 rounded-lg p-4 border border-slate-700 text-xs leading-relaxed">
                {metaRaw}
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Human mode — styled dashboard
  const pillars = meta?.pillars ?? [
    { id: 'inflows', name: 'Inflows', categories: ['I.A', 'I.U', 'I.S', 'I.O'] },
    { id: 'outflows', name: 'Outflows', categories: ['O.W', 'O.S', 'O.D', 'O.O'] },
    { id: 'supplemental', name: 'Supplemental', categories: ['S.I', 'S.FX'] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
            OMB {meta?.omb_control_number ?? '7100-0361'}
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500">Effective {meta?.effective_date ?? '2023-04-01'}</span>
        </div>
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">
          FR 2052a — Complex Institution Liquidity Monitoring Report
        </h1>
        <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
          Structured reference for all FR 2052a sections, data fields, and cross-references.
          Toggle between Human mode (readable) and Machine mode (raw structured text) using the bar below.
        </p>
      </div>

      {/* Key metadata cards */}
      {meta && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Authority</p>
            <p className="text-xs text-slate-700 font-medium leading-snug">{meta.authority}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Current Version</p>
            <p className="text-xs text-slate-700 font-mono font-medium">{meta.current_version}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Respondent Threshold</p>
            <p className="text-xs text-slate-700 font-medium leading-snug">{meta.respondent_panel.threshold}</p>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-4">
            <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-1">Daily Reporters</p>
            <p className="text-xs text-slate-600 leading-snug">{meta.frequency.daily.slice(0, 2).join('; ')}</p>
          </div>
        </div>
      )}

      {/* Pillar + category grid */}
      <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Form Structure</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map(pillar => (
          <div
            key={pillar.id}
            className="bg-white border border-slate-200 rounded-lg overflow-hidden"
          >
            {/* Pillar header */}
            <Link
              href={`/${pillar.id}`}
              className="flex items-center justify-between px-4 py-3 border-b border-slate-100 hover:bg-slate-50 transition-colors group"
            >
              <span className="text-sm font-semibold text-slate-800 group-hover:text-primary-600">
                {pillar.name}
              </span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${PILLAR_BADGE[pillar.id] ?? 'bg-slate-100 text-slate-500 border-slate-200'}`}>
                {pillar.categories.length} categories
              </span>
            </Link>
            {/* Category list */}
            <div className="divide-y divide-slate-50">
              {pillar.categories.map(cat => (
                <Link
                  key={cat}
                  href={`/${pillar.id}/${cat.toLowerCase().replace('.', '-')}`}
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-xs font-mono text-primary-500 w-10 shrink-0">{cat}</span>
                  <span className="text-xs text-slate-500 group-hover:text-slate-700">View sections →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Respondent panel */}
      {meta && (
        <div className="mt-8 bg-white border border-slate-200 rounded-lg p-5">
          <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Respondent Panel</h2>
          <ul className="space-y-1">
            {meta.respondent_panel.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="text-primary-400 mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
