import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Section, MorphirRule } from '@/lib/types';
import CrossRefLinks from './CrossRefLinks';

export default function HumanRenderer({
  section,
  morphirRules = [],
}: {
  section: Section;
  morphirRules?: MorphirRule[];
}) {
  return (
    <article className="max-w-3xl px-8 py-8">

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-primary-600 bg-primary-50 px-2 py-0.5 rounded border border-primary-200">
            {section.section_id}
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500">{section.category_name}</span>
        </div>
        <h1 className="text-2xl font-semibold text-slate-900">{section.section_name}</h1>
      </header>

      {/* Definition callout */}
      {section.definition_summary && (
        <div className="mb-8 flex gap-0">
          <div className="w-1 shrink-0 bg-blue-500 rounded-l" />
          <div className="flex-1 bg-blue-50 border border-l-0 border-blue-200 rounded-r-lg p-4">
            <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wide mb-1.5">Definition</p>
            <p className="text-sm text-slate-700 leading-relaxed">{section.definition_summary}</p>
          </div>
        </div>
      )}

      {/* Markdown body */}
      {section.content && (
        <div className="mb-8 text-sm text-slate-700 leading-relaxed space-y-3">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => (
                <h2 className="text-base font-semibold text-slate-800 mt-6 mb-2 first:mt-0">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-sm font-semibold text-slate-700 mt-4 mb-1.5">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-outside ml-5 space-y-1 mb-3">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-outside ml-5 space-y-1 mb-3">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-sm text-slate-600 leading-relaxed">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-slate-800">{children}</strong>
              ),
              code: ({ children }) => (
                <code className="font-mono text-[12px] bg-slate-100 px-1 py-0.5 rounded text-slate-700">{children}</code>
              ),
            }}
          >
            {section.content}
          </ReactMarkdown>
        </div>
      )}

      {/* Data fields — inline prose (PDF style) */}
      {section.data_fields && section.data_fields.length > 0 && (
        <div className="mb-8">
          <p className="text-sm text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-600">Applicable fields: </span>
            {section.data_fields.map((f) => f.name).join(', ')}.
          </p>
        </div>
      )}

      {/* Cross-references */}
      {section.cross_references && section.cross_references.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Cross-References</h2>
          <CrossRefLinks refs={section.cross_references} />
        </div>
      )}

      {/* LCR Rule Mapping (Morphir) */}
      {morphirRules.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">LCR Rule Mapping</h2>
          <div className="space-y-3">
            {morphirRules.map((rule, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-semibold text-slate-800">{rule.cfr}</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-slate-600">{(rule.weight * 100).toFixed(0)}% rate</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{rule.description}</p>
                    <div className="flex items-center gap-3 mt-2 text-[11px] text-slate-400">
                      <span>Module: <span className="font-mono">{rule.module}</span></span>
                      <span>·</span>
                      <span>Weight: {rule.weight}</span>
                    </div>
                  </div>
                  <span className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded ${
                    rule.status === 'confirmed'
                      ? 'bg-green-100 text-green-700 border border-green-200'
                      : 'bg-amber-50 text-amber-600 border border-amber-200'
                  }`}>
                    {rule.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[10px] text-slate-400 leading-relaxed">
              Based on <a href="https://github.com/finos/morphir-examples/tree/main/src/Morphir/Sample/Reg/LCR" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">FINOS Morphir LCR sample</a> (2014 final rule / 2019 FR 2052a). Status indicates mapping confidence vs. the 2025 form.
            </p>
            <a
              href="/calculator"
              className="shrink-0 ml-4 text-[11px] text-primary-600 hover:text-primary-700 hover:underline whitespace-nowrap"
            >
              Try in LCR Calculator →
            </a>
          </div>
        </div>
      )}

      {/* Reporting notes */}
      {section.reporting_notes && (
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Reporting Notes</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-sm text-slate-600 leading-relaxed">{section.reporting_notes}</p>
          </div>
        </div>
      )}

      {/* Version history timeline */}
      {section.version_history && section.version_history.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-4">Version History</h2>
          <div className="space-y-0">
            {section.version_history.map((entry, i) => (
              <div key={i} className="flex gap-4">
                {/* Timeline column */}
                <div className="flex flex-col items-center w-4 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary-400 mt-1 shrink-0 z-10" />
                  {i < section.version_history.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 mt-1" style={{ minHeight: '1.5rem' }} />
                  )}
                </div>
                {/* Content column */}
                <div className="pb-4 flex gap-6">
                  <span className="text-xs font-mono text-slate-400 shrink-0 pt-0.5 w-24">{entry.version}</span>
                  <p className="text-xs text-slate-700 leading-relaxed">{entry.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </article>
  );
}
