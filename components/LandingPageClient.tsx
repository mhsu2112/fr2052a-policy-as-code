'use client';

import { useState, useEffect } from 'react';
import { useModeStore } from '@/lib/store';
import ScrollTOC from './ScrollTOC';
import CopyButton from './CopyButton';
import CrossRefLinks from './CrossRefLinks';
import type { FR2052aForm, Section } from '@/lib/types';

/* ── General Instructions content ── */
const GENERAL_SECTIONS = [
  {
    id: 'gen-background',
    title: 'Background',
    paragraphs: [
      'The FR 2052a was developed following the 2008 financial crisis to provide supervisors with timely information about the liquidity positions of large banking organizations. The report collects detailed data on selected assets, liabilities, funding activities, and contingent liabilities.',
      'The data collected on this report is used to monitor the liquidity profile of supervised institutions and for calculations related to the Liquidity Coverage Ratio (LCR) rule under 12 CFR 249.',
    ],
  },
  {
    id: 'gen-purpose',
    title: 'Purpose',
    paragraphs: [
      'The purpose of the FR 2052a report is to collect quantitative information on selected assets, liabilities, funding activities, and contingent liabilities of large financial institutions to monitor their overall liquidity risk profile.',
      'The data collected are used in the supervision and regulation of these financial institutions. Data may also be used in the analysis of specific financial markets and in understanding dynamics within the financial sector.',
    ],
  },
  {
    id: 'gen-confidentiality',
    title: 'Confidentiality',
    paragraphs: [
      'Individual respondent data collected on this form are regarded as confidential under the Freedom of Information Act (5 U.S.C. \u00a7552(b)(4) and (b)(8)).',
    ],
  },
  {
    id: 'gen-lrm',
    title: 'Liquidity Risk Measurement Standards',
    paragraphs: [
      'The FR 2052a references the Liquidity Risk Measurement (LRM) Standards for several key definitions, including operational deposits, High Quality Liquid Assets (HQLA) classification, and secured funding transaction treatment.',
      'Where the FR 2052a instructions reference the \u201cLRM Standards,\u201d this refers to the standards described in 12 CFR 249 (Liquidity Coverage Ratio rule) and related supervisory guidance.',
    ],
  },
  {
    id: 'gen-who-must-report',
    title: 'Who Must Report',
    paragraphs: [
      'Top-tier U.S. bank holding companies with $100 billion or more in total consolidated assets (Regulation YY Category I\u2013IV firms), top-tier savings and loan holding companies, and foreign banking organizations with combined U.S. assets of $100 billion or more.',
      'The Federal Reserve may also require any supervised institution to begin filing the FR 2052a if circumstances warrant enhanced monitoring.',
    ],
  },
  {
    id: 'gen-frequency',
    title: 'Frequency and Timing of Data Submission',
    paragraphs: [
      'Category I and II firms must report daily (by 11:00 a.m. ET on the following business day). Category III and IV firms report monthly (by the 15th calendar day following the as-of date). During periods of stress, the Federal Reserve may require monthly reporters to increase to daily reporting.',
      'All data must be reported as of the close of business on the as-of date. Weekend and holiday submissions follow the next-business-day convention.',
    ],
  },
];

const FIELD_DEFINITIONS = [
  { name: 'Reporting Entity', desc: 'Identifies whether the data pertains to the Consolidated entity, a Parent Only entity, or a Material Entity.' },
  { name: 'Currency', desc: 'The ISO 4217 currency code for the reported item.' },
  { name: 'Product', desc: 'The FR 2052a product code corresponding to the specific line item (e.g., I.A.1, O.D.1).' },
  { name: 'Sub-Product', desc: 'A further classification within a product code where additional granularity is required.' },
  { name: 'Counterparty', desc: 'The type of counterparty for the reported item. Categories include Retail, Small Business, Non-Financial Corporate, Sovereign, Central Bank, GSE, PSE, MDB, Pension Fund, Bank, Broker-Dealer, Investment Company or Advisor, Financial Market Utility, and others.' },
  { name: 'Collateral Class', desc: 'Classification of collateral for secured transactions, aligned with HQLA tiering: Level 1, Level 2A, Level 2B, and Non-HQLA.' },
  { name: 'Maturity Bucket', desc: 'Contractual maturity or next repricing date, in standard buckets: Open/Overnight, 2\u20137 days, 8\u201330 days, 31\u201390 days, 91\u2013180 days, 181 days\u20131 year, and >1 year.' },
  { name: 'Market Value', desc: 'The fair market value of the reported item in the reporting currency.' },
  { name: 'Internal', desc: 'A boolean indicating whether the transaction is between entities within the same consolidated organization.' },
  { name: 'Forward Start Bucket', desc: 'For forward-starting transactions, the future date on which the transaction becomes effective.' },
];

const GENERAL_IDS = [...GENERAL_SECTIONS.map((s) => s.id), 'field-definitions'];

const PILLAR_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  inflows: { color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe' },
  outflows: { color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  supplemental: { color: '#475569', bg: '#f8fafc', border: '#cbd5e1' },
};

const CATEGORY_NAMES: Record<string, string> = {
  'I.A': 'Assets', 'I.U': 'Unsecured', 'I.S': 'Secured', 'I.O': 'Other',
  'O.W': 'Wholesale', 'O.S': 'Secured', 'O.D': 'Deposits', 'O.O': 'Other',
  'S.DC': 'Derivatives & Collateral', 'S.L': 'Liquidity Risk Measurement',
  'S.B': 'Balance Sheet', 'S.I': 'Informational', 'S.FX': 'Foreign Exchange',
};

/* ── Subcomponents ── */

function HumanSectionBlock({ section }: { section: Section }) {
  const pc = PILLAR_COLORS[section.pillar] ?? PILLAR_COLORS.supplemental;
  return (
    <article id={`section-${section.section_id}`} className="scroll-mt-16 mb-10">
      <div className="flex items-start gap-3 mb-2">
        <span
          className="shrink-0 text-xs font-mono font-semibold px-2 py-1 rounded"
          style={{ background: pc.bg, color: pc.color, border: `1px solid ${pc.border}` }}
        >
          {section.section_id}
        </span>
        <h3 className="text-lg font-semibold text-slate-900 leading-snug">{section.section_name}</h3>
      </div>

      {section.definition_summary && (
        <div className="border-l-[3px] border-blue-300 bg-blue-50/60 rounded-r-lg px-4 py-3 mb-3">
          <p className="text-sm text-slate-700 leading-relaxed">{section.definition_summary}</p>
        </div>
      )}

      {section.content && (
        <p className="text-sm text-slate-600 leading-relaxed mb-3">{section.content.trim()}</p>
      )}

      {section.data_fields && section.data_fields.length > 0 && (
        <p className="text-sm text-slate-500 leading-relaxed mb-3">
          <span className="font-semibold text-slate-600">Applicable fields: </span>
          {section.data_fields.map((f) => f.name).join(', ')}.
        </p>
      )}

      {section.cross_references && section.cross_references.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-slate-500">Refs:</span>
          <CrossRefLinks refs={section.cross_references} />
        </div>
      )}

      {section.reporting_notes && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 mb-3">
          <p className="text-xs text-amber-800 leading-relaxed">
            <span className="font-semibold">Note: </span>{section.reporting_notes}
          </p>
        </div>
      )}

      <div className="border-b border-slate-200 mt-6" />
    </article>
  );
}

function MachineSectionBlock({ section, rawFrontmatter, rawBody }: {
  section: Section;
  rawFrontmatter?: string;
  rawBody?: string;
}) {
  const fm = rawFrontmatter || `---\nsection_id: ${section.section_id}\nsection_name: ${section.section_name}\npillar: ${section.pillar}\ncategory: ${section.category}\n---`;
  const body = rawBody || section.content || '';

  return (
    <article id={`section-${section.section_id}`} className="scroll-mt-16 mb-6">
      <div className="relative group">
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <CopyButton text={`${fm}\n\n${body}`} />
        </div>
        <pre className="text-xs leading-relaxed p-4 rounded-t-lg whitespace-pre-wrap break-words bg-slate-800/60 border border-slate-700 text-blue-300">
          {fm}
        </pre>
        <pre className="text-xs leading-relaxed p-4 rounded-b-lg whitespace-pre-wrap break-words bg-slate-800/30 border border-t-0 border-slate-700 text-slate-300">
          {body.trim()}
        </pre>
      </div>
    </article>
  );
}

/* ── Main ── */

interface Props {
  meta: FR2052aForm | null;
  metaRaw: string;
  allSections: Section[];
  /** Map from section_id to { rawFrontmatter, rawBody } for machine mode */
  rawContentMap?: Record<string, { rawFrontmatter: string; rawBody: string }>;
}

export default function LandingPageClient({ meta, metaRaw, allSections, rawContentMap = {} }: Props) {
  const { mode } = useModeStore();
  const [activeId, setActiveId] = useState<string | null>(null);
  const isHuman = mode === 'human';

  /* IntersectionObserver for scroll tracking */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id.startsWith('section-')) {
              setActiveId(id.replace('section-', ''));
            } else {
              setActiveId(id);
            }
          }
        }
      },
      { rootMargin: '-60px 0px -70% 0px', threshold: 0 }
    );
    const els = document.querySelectorAll('article[id^="section-"], div[id^="gen-"], div[id="field-definitions"]');
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mode]);

  // Build pillar → category → section grouping
  const pillars = meta?.pillars ?? [
    { id: 'inflows', name: 'Inflows', categories: ['I.A', 'I.U', 'I.S', 'I.O'] },
    { id: 'outflows', name: 'Outflows', categories: ['O.W', 'O.S', 'O.D', 'O.O'] },
    { id: 'supplemental', name: 'Supplemental', categories: ['S.I', 'S.FX'] },
  ];

  const fallbackMeta = {
    form_id: 'FR_2052a',
    form_name: 'Complex Institution Liquidity Monitoring Report',
    omb_control_number: '7100-0361',
    authority: 'Federal Reserve System',
    current_version: '2025-02-26',
    effective_date: '2023-04-01',
    frequency: { daily: [], monthly: [] },
    respondent_panel: { threshold: '', includes: [] },
    pillars,
    pdf_url: '',
    historical_versions: [],
  } as FR2052aForm;

  const effectiveMeta = meta ?? fallbackMeta;

  return (
    <div className={`flex ${isHuman ? 'bg-surface-50' : 'bg-slate-900'}`} style={{ height: 'calc(100vh - 6rem)' }}>
      {/* TOC Sidebar */}
      <ScrollTOC
        metadata={effectiveMeta}
        sections={allSections}
        activeId={activeId}
        scrollMode
        showGeneral
        generalIds={GENERAL_IDS}
      />

      {/* Main content scroll */}
      <main className="flex-1 overflow-y-auto" style={{ paddingBottom: 64 }}>
        <div className="max-w-3xl mx-auto px-8 pt-10">

          {/* ── Hero ── */}
          {isHuman ? (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded px-2 py-0.5">
                  OMB {effectiveMeta.omb_control_number}
                </span>
                <span className="text-slate-300">&middot;</span>
                <span className="text-xs text-slate-500">Effective {effectiveMeta.effective_date}</span>
              </div>
              <h1 className="text-2xl font-semibold text-slate-900 mb-2">
                FR 2052a &mdash; Complex Institution Liquidity Monitoring Report
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
                Structured reference for all FR 2052a sections, data fields, and cross-references.
                Toggle between <strong>Human</strong> and <strong>Machine</strong> mode using the bar below.
              </p>
            </div>
          ) : (
            <div className="mb-8 font-mono">
              <p className="text-xs text-slate-500 mb-1"># FR 2052a &mdash; Complex Institution Liquidity Monitoring Report</p>
              <p className="text-xs text-slate-600">
                # form_id: FR_2052a | version: {effectiveMeta.current_version} | omb: {effectiveMeta.omb_control_number}
              </p>
            </div>
          )}

          {/* ── General Instructions ── */}
          <div className="mb-10">
            {isHuman ? (
              <div className="flex items-center gap-3 mb-6 sticky top-0 bg-surface-50/95 backdrop-blur-sm py-3 -mx-2 px-2 z-10 rounded-lg">
                <div className="w-1 h-6 rounded-full bg-slate-500" />
                <h2 className="text-lg font-bold text-slate-800">General Instructions</h2>
              </div>
            ) : (
              <div className="mb-4 pb-2 border-b border-slate-700">
                <p className="text-sm font-bold text-slate-200">## General Instructions</p>
              </div>
            )}

            {GENERAL_SECTIONS.map((gs) =>
              isHuman ? (
                <div key={gs.id} id={gs.id} className="scroll-mt-16 mb-8">
                  <h3 className="text-base font-semibold text-slate-800 mb-2">{gs.title}</h3>
                  {gs.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-slate-600 leading-relaxed mb-2">{p}</p>
                  ))}
                </div>
              ) : (
                <div key={gs.id} id={gs.id} className="scroll-mt-16 mb-4">
                  <pre className="text-xs leading-relaxed p-4 rounded-lg whitespace-pre-wrap bg-slate-800/30 border border-slate-700 text-slate-300">
{`### ${gs.title}\n\n${gs.paragraphs.join('\n\n')}`}
                  </pre>
                </div>
              )
            )}

            {/* Field Definitions */}
            {isHuman ? (
              <div id="field-definitions" className="scroll-mt-16 mb-8">
                <h3 className="text-base font-semibold text-slate-800 mb-3">Field Definitions</h3>
                <p className="text-sm text-slate-500 mb-4">
                  The following fields are used across all FR 2052a reporting items.
                </p>
                <dl className="space-y-3">
                  {FIELD_DEFINITIONS.map((fd) => (
                    <div key={fd.name}>
                      <dt className="text-sm font-semibold text-slate-700">{fd.name}</dt>
                      <dd className="text-sm text-slate-500 leading-relaxed">{fd.desc}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : (
              <div id="field-definitions" className="scroll-mt-16 mb-4">
                <pre className="text-xs leading-relaxed p-4 rounded-lg whitespace-pre-wrap bg-slate-800/60 border border-slate-700 text-blue-300">
{`---\nfield_definitions:\n${FIELD_DEFINITIONS.map((fd) => `  ${fd.name}:\n    description: "${fd.desc}"`).join('\n')}\n---`}
                </pre>
              </div>
            )}

            <div className={`border-b ${isHuman ? 'border-slate-200' : 'border-slate-700'} mb-8`} />
          </div>

          {/* ── Pillar sections ── */}
          {pillars.map((pillar) => {
            const pc = PILLAR_COLORS[pillar.id] ?? PILLAR_COLORS.supplemental;
            const pillarSections = allSections.filter((s) => s.pillar === pillar.id);
            const cats = [...new Set(pillarSections.map((s) => s.category))];

            return (
              <div key={pillar.id} className="mb-10">
                {/* Sticky pillar header */}
                {isHuman ? (
                  <div className="flex items-center gap-3 mb-6 sticky top-0 bg-surface-50/95 backdrop-blur-sm py-3 -mx-2 px-2 z-10 rounded-lg">
                    <div className="w-1 h-6 rounded-full" style={{ background: pc.color }} />
                    <h2 className="text-lg font-bold text-slate-800">{pillar.name}</h2>
                    <span className="text-xs text-slate-400 font-mono">
                      {pillarSections.length} sections
                    </span>
                  </div>
                ) : (
                  <div className="mb-4 pb-2 border-b border-slate-700">
                    <p className="text-sm font-bold text-slate-200">## {pillar.name}</p>
                  </div>
                )}

                {cats.map((catId) => {
                  const catSections = pillarSections.filter((s) => s.category === catId);
                  return (
                    <div key={catId} className="mb-8">
                      {isHuman ? (
                        <div className="flex items-center gap-2 mb-4">
                          <span
                            className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                            style={{ color: pc.color, background: pc.bg, border: `1px solid ${pc.border}` }}
                          >
                            {catId}
                          </span>
                          <h3 className="text-sm font-semibold text-slate-600">
                            {CATEGORY_NAMES[catId] ?? catId}
                          </h3>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-500 mb-3 font-mono">
                          ### {catId} &mdash; {CATEGORY_NAMES[catId] ?? catId}
                        </p>
                      )}

                      {catSections.map((s) =>
                        isHuman ? (
                          <HumanSectionBlock key={s.section_id} section={s} />
                        ) : (
                          <MachineSectionBlock
                            key={s.section_id}
                            section={s}
                            rawFrontmatter={rawContentMap[s.section_id]?.rawFrontmatter}
                            rawBody={rawContentMap[s.section_id]?.rawBody}
                          />
                        )
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* End marker */}
          <div className="py-12 text-center">
            <p className={`text-xs ${isHuman ? 'text-slate-400' : 'text-slate-600'}`}>
              End of FR 2052a Reference &middot; v{effectiveMeta.current_version}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
