'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useModeStore } from '@/lib/store';
import type { FR2052aForm, Section } from '@/lib/types';

const PILLAR_BADGE: Record<string, string> = {
  inflows: 'bg-blue-100 text-blue-700 border-blue-200',
  outflows: 'bg-red-100 text-red-700 border-red-200',
  supplemental: 'bg-slate-100 text-slate-600 border-slate-200',
};

const PILLAR_BADGE_DARK: Record<string, string> = {
  inflows: 'bg-blue-900/30 text-blue-400 border-blue-800',
  outflows: 'bg-red-900/30 text-red-400 border-red-800',
  supplemental: 'bg-slate-700/40 text-slate-400 border-slate-600',
};

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

function catSlug(cat: string) {
  return cat.toLowerCase().replace('.', '-');
}

function sectionSlug(id: string) {
  return id.toLowerCase().replace(/\./g, '-');
}

export default function SectionNav({
  metadata,
  sections,
}: {
  metadata: FR2052aForm;
  sections: Section[];
}) {
  const pathname = usePathname();
  const { mode } = useModeStore();
  const dark = mode === 'machine';

  const [openPillars, setOpenPillars] = useState<Record<string, boolean>>({});
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  // Auto-expand the pillar and category matching the current path
  useEffect(() => {
    const nextPillars: Record<string, boolean> = {};
    const nextCats: Record<string, boolean> = {};
    for (const pillar of metadata.pillars) {
      for (const cat of pillar.categories) {
        const catPath = `/${pillar.id}/${catSlug(cat)}`;
        if (pathname.startsWith(catPath)) {
          nextPillars[pillar.id] = true;
          nextCats[cat] = true;
        }
      }
    }
    setOpenPillars(p => ({ ...p, ...nextPillars }));
    setOpenCategories(p => ({ ...p, ...nextCats }));
  }, [pathname, metadata.pillars]);

  const togglePillar = (id: string) =>
    setOpenPillars(p => ({ ...p, [id]: !p[id] }));
  const toggleCategory = (id: string) =>
    setOpenCategories(p => ({ ...p, [id]: !p[id] }));

  const navClass = dark
    ? 'w-64 shrink-0 border-r border-slate-700 bg-slate-900 overflow-y-auto h-full text-slate-300'
    : 'w-64 shrink-0 border-r border-slate-200 bg-white overflow-y-auto h-full text-slate-700';

  return (
    <nav className={navClass}>
      <div className="p-3">
        {metadata.pillars.map(pillar => {
          const isOpen = openPillars[pillar.id] ?? false;
          const badge = dark
            ? (PILLAR_BADGE_DARK[pillar.id] ?? '')
            : (PILLAR_BADGE[pillar.id] ?? '');
          const pillarSections = sections.filter(s => s.pillar === pillar.id);

          return (
            <div key={pillar.id} className="mb-1">
              {/* Pillar toggle */}
              <button
                onClick={() => togglePillar(pillar.id)}
                className={`w-full flex items-center gap-2 px-2 py-1.5 rounded text-xs font-semibold transition-colors ${
                  dark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                {isOpen
                  ? <ChevronDown size={12} className="shrink-0" />
                  : <ChevronRight size={12} className="shrink-0" />}
                <span className="uppercase tracking-wide">{pillar.name}</span>
                <span className={`ml-auto text-[10px] font-mono px-1.5 py-0.5 rounded border ${badge}`}>
                  {pillar.categories.length}
                </span>
              </button>

              {isOpen && (
                <div className="mt-0.5 ml-3 space-y-0.5">
                  {pillar.categories.map(cat => {
                    const catOpen = openCategories[cat] ?? false;
                    const catSections = pillarSections.filter(s => s.category === cat);
                    const catPath = `/${pillar.id}/${catSlug(cat)}`;
                    const isCatActive = pathname.startsWith(catPath);

                    return (
                      <div key={cat}>
                        <button
                          onClick={() => toggleCategory(cat)}
                          className={`w-full flex items-center gap-1.5 px-2 py-1 rounded text-xs transition-colors ${
                            isCatActive
                              ? dark
                                ? 'text-blue-400 bg-blue-900/20'
                                : 'text-primary-600 bg-primary-50'
                              : dark
                                ? 'text-slate-400 hover:text-slate-300 hover:bg-slate-800'
                                : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                          }`}
                        >
                          {catOpen
                            ? <ChevronDown size={10} className="shrink-0" />
                            : <ChevronRight size={10} className="shrink-0" />}
                          <span className={`font-mono text-[11px] shrink-0 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                            {cat}
                          </span>
                          <span className="truncate">{CATEGORY_NAMES[cat] ?? cat}</span>
                        </button>

                        {catOpen && (
                          <div className="ml-4 mt-0.5 space-y-0.5">
                            {catSections.length === 0 ? (
                              <p className={`px-2 py-0.5 text-[11px] italic ${dark ? 'text-slate-600' : 'text-slate-400'}`}>
                                No sections yet
                              </p>
                            ) : (
                              catSections.map(section => {
                                const sectionPath = `/${pillar.id}/${catSlug(cat)}/${sectionSlug(section.section_id)}`;
                                const isActive = pathname === sectionPath;
                                return (
                                  <Link
                                    key={section.section_id}
                                    href={sectionPath}
                                    className={`flex items-start gap-1.5 px-2 py-1 rounded text-xs transition-colors border-l-2 ${
                                      isActive
                                        ? dark
                                          ? 'border-blue-500 text-blue-300 bg-blue-900/20'
                                          : 'border-blue-500 text-primary-600 bg-primary-50'
                                        : dark
                                          ? 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                                          : 'border-transparent text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                                    }`}
                                  >
                                    <span className={`font-mono text-[10px] shrink-0 mt-0.5 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
                                      {section.section_id}
                                    </span>
                                    <span className="leading-snug">{section.section_name}</span>
                                  </Link>
                                );
                              })
                            )}
                          </div>
                        )}
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
