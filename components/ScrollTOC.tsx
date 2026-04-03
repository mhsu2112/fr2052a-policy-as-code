'use client';

import { useState, useEffect } from 'react';
import { useModeStore } from '@/lib/store';
import type { FR2052aForm, Section } from '@/lib/types';

const CATEGORY_NAMES: Record<string, string> = {
  'I.A': 'Assets',
  'I.U': 'Unsecured',
  'I.S': 'Secured',
  'I.O': 'Other',
  'O.W': 'Wholesale',
  'O.S': 'Secured',
  'O.D': 'Deposits',
  'O.O': 'Other',
  'S.DC': 'Derivatives & Collateral',
  'S.L': 'Liquidity Risk Measurement',
  'S.B': 'Balance Sheet',
  'S.I': 'Informational',
  'S.FX': 'Foreign Exchange',
};

const PILLAR_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  inflows: { color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  outflows: { color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  supplemental: { color: '#475569', bg: '#f8fafc', border: '#cbd5e1' },
};

interface Props {
  metadata: FR2052aForm;
  sections: Section[];
  /** Currently active section ID (from IntersectionObserver) */
  activeId?: string | null;
  /** If true, TOC items scroll-to anchors; if false, they navigate via links */
  scrollMode?: boolean;
  /** Show General Instructions group */
  showGeneral?: boolean;
  /** General section IDs for the TOC */
  generalIds?: string[];
}

export default function ScrollTOC({
  metadata,
  sections,
  activeId,
  scrollMode = true,
  showGeneral = false,
  generalIds = [],
}: Props) {
  const { mode } = useModeStore();
  const dark = mode === 'machine';

  const [collapsed, setCollapsed] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = { general: true };
    for (const p of metadata.pillars) init[p.id] = true;
    return init;
  });

  const toggle = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Style tokens
  const bg = dark ? 'bg-slate-900' : 'bg-white';
  const borderCol = dark ? 'border-slate-700' : 'border-slate-200';
  const textPrimary = dark ? 'text-slate-200' : 'text-slate-700';
  const textMuted = dark ? 'text-slate-500' : 'text-slate-400';
  const hoverBg = dark ? 'hover:bg-slate-800' : 'hover:bg-slate-50';
  const activeBg = dark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-700';

  if (collapsed) {
    return (
      <nav
        className={`shrink-0 ${bg} border-r ${borderCol} flex flex-col items-center pt-4 gap-3 transition-all duration-200`}
        style={{ width: 48, position: 'sticky', top: 48, height: 'calc(100vh - 48px - 48px)' }}
      >
        <button
          onClick={() => setCollapsed(false)}
          className={`${textMuted} hover:opacity-80 p-1`}
          title="Expand contents"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
        {showGeneral && (
          <div className="w-2 h-2 rounded-full" style={{ background: dark ? '#94a3b8' : '#64748b' }} title="General" />
        )}
        {metadata.pillars.map((p) => (
          <div
            key={p.id}
            className="w-2 h-2 rounded-full"
            style={{ background: PILLAR_COLORS[p.id]?.color ?? '#64748b' }}
            title={p.name}
          />
        ))}
      </nav>
    );
  }

  return (
    <nav
      className={`shrink-0 ${bg} border-r ${borderCol} overflow-y-auto transition-all duration-200`}
      style={{ width: 240, position: 'sticky', top: 48, height: 'calc(100vh - 48px - 48px)' }}
    >
      <div className="p-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-[10px] font-semibold uppercase tracking-widest ${textMuted}`}>Contents</span>
          <button onClick={() => setCollapsed(true)} className={`${textMuted} hover:opacity-80 p-0.5`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>

        {/* General Instructions group */}
        {showGeneral && generalIds.length > 0 && (
          <div className="mb-2">
            <button
              onClick={() => toggle('general')}
              className={`flex items-center gap-2 w-full text-left py-1 px-1 rounded transition-colors ${hoverBg}`}
            >
              <svg
                width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                className={`shrink-0 transition-transform ${textPrimary} ${expanded.general ? 'rotate-90' : ''}`}
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dark ? '#94a3b8' : '#64748b' }} />
              <span className={`text-xs font-semibold ${textPrimary}`}>General Instructions</span>
            </button>
            {expanded.general && (
              <div className="ml-5 mt-0.5">
                {generalIds.map((gid) => {
                  const label = gid
                    .replace('gen-', '')
                    .replace('field-definitions', 'Field Definitions')
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, (c) => c.toUpperCase());
                  const isActive = activeId === gid;
                  return (
                    <button
                      key={gid}
                      onClick={() => scrollTo(gid)}
                      className={`block w-full text-left text-[11px] py-1 px-2 rounded transition-all truncate ${
                        isActive ? activeBg : `${textMuted} ${hoverBg}`
                      }`}
                      style={isActive ? { fontWeight: 500 } : {}}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Pillar groups */}
        {metadata.pillars.map((pillar) => {
          const isOpen = expanded[pillar.id] ?? true;
          const pColor = PILLAR_COLORS[pillar.id];
          const pillarSections = sections.filter((s) => s.pillar === pillar.id);
          const cats = [...new Set(pillarSections.map((s) => s.category))];

          return (
            <div key={pillar.id} className="mb-2">
              <button
                onClick={() => toggle(pillar.id)}
                className={`flex items-center gap-2 w-full text-left py-1 px-1 rounded transition-colors ${hoverBg}`}
              >
                <svg
                  width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                  className={`shrink-0 transition-transform ${textPrimary} ${isOpen ? 'rotate-90' : ''}`}
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: pColor?.color ?? '#64748b' }} />
                <span className={`text-xs font-semibold ${textPrimary}`}>{pillar.name}</span>
              </button>

              {isOpen && (
                <div className="ml-3 mt-0.5">
                  {cats.map((catId) => {
                    const catSections = pillarSections.filter((s) => s.category === catId);
                    return (
                      <div key={catId} className="mb-1">
                        <p className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 ${textMuted}`}>
                          {catId} — {CATEGORY_NAMES[catId] ?? catId}
                        </p>
                        {catSections.map((s) => {
                          const isActive = activeId === s.section_id;
                          return (
                            <button
                              key={s.section_id}
                              onClick={() => scrollTo(`section-${s.section_id}`)}
                              className={`block w-full text-left text-[11px] py-1 px-2 rounded transition-all truncate ${
                                isActive ? activeBg : `${textMuted} ${hoverBg}`
                              }`}
                              style={isActive ? { fontWeight: 500 } : {}}
                            >
                              <span className="font-mono mr-1.5">{s.section_id}</span>
                              <span className="opacity-75">{s.section_name}</span>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
