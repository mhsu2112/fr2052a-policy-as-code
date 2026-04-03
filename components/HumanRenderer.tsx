import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Section } from '@/lib/types';
import CrossRefLinks from './CrossRefLinks';

export default function HumanRenderer({ section }: { section: Section }) {
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

      {/* Data fields table */}
      {section.data_fields && section.data_fields.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Data Fields</h2>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-slate-600 font-mono">Field Name</th>
                  <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-slate-600">Type</th>
                  <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-slate-600">Valid Values</th>
                  <th className="text-left px-4 py-2.5 text-[11px] font-semibold text-slate-600">Required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {section.data_fields.map((field, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-2.5 font-mono text-xs text-slate-800">{field.name}</td>
                    <td className="px-4 py-2.5">
                      <span className="text-[11px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                        {field.type}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 text-xs text-slate-600">
                      {field.values ? (
                        <div className="flex flex-wrap gap-1">
                          {field.values.map((v, vi) => (
                            <span key={vi} className="inline-block px-1.5 py-0.5 bg-slate-100 rounded text-[11px] font-mono">
                              {v}
                            </span>
                          ))}
                        </div>
                      ) : field.description ? (
                        field.description
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="px-4 py-2.5 text-xs">
                      {field.required === true ? (
                        <span className="text-green-600 font-medium">Yes</span>
                      ) : field.required === false ? (
                        <span className="text-slate-400">No</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Cross-references */}
      {section.cross_references && section.cross_references.length > 0 && (
        <div className="mb-8">
          <h2 className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-3">Cross-References</h2>
          <CrossRefLinks refs={section.cross_references} />
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
