'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Command } from 'cmdk';
import {
  Search, Eye, Map, List, Tags, Link2, GitCompare,
  SlidersHorizontal, FileJson, Download, BookOpen, X, Copy, Check,
  ArrowLeft, Loader2, ExternalLink,
} from 'lucide-react';
import { useModeStore } from '@/lib/store';

// ─── Command definitions ─────────────────────────────────────────────────────

const ICON_MAP = {
  '/search': Search,
  '/show': Eye,
  '/map': Map,
  '/fields': List,
  '/enums': Tags,
  '/xref': Link2,
  '/diff': GitCompare,
  '/filter': SlidersHorizontal,
  '/schema': FileJson,
  '/export': Download,
  '/glossary': BookOpen,
} as const;

const COMMANDS = [
  { cmd: '/search', description: 'Full-text search across all sections', type: 'Tool', placeholder: 'HQLA eligibility', hint: '/search <query>' },
  { cmd: '/show', description: 'Display a specific section by code', type: 'Tool', placeholder: 'I.A.1', hint: '/show <section_id>' },
  { cmd: '/map', description: 'Map a product or transaction to its FR2052a section', type: 'Tool', placeholder: '30-day repo secured by Treasuries', hint: '/map <product description>' },
  { cmd: '/fields', description: 'List data fields for a section or category', type: 'Tool', placeholder: 'O.D or O.D.1', hint: '/fields <section_id | category_id>' },
  { cmd: '/enums', description: 'List all valid enum values for a field across sections', type: 'Tool', placeholder: 'counterparty', hint: '/enums <field_name>' },
  { cmd: '/xref', description: 'Show cross-references for a section or regulation', type: 'Tool', placeholder: 'I.A.1 or LCR Rule', hint: '/xref <section_id | regulation>' },
  { cmd: '/diff', description: 'Compare two form versions (section or whole form)', type: 'Tool', placeholder: 'I.A.1 --from 2022-04 --to current', hint: '/diff <section_id> [--from version] [--to version]' },
  { cmd: '/filter', description: 'Filter sections by structured attributes', type: 'Tool', placeholder: 'pillar:inflows has_field:counterparty', hint: '/filter pillar:X category:Y has_field:Z field_value:f=v' },
  { cmd: '/schema', description: 'Output the YAML schema for a section', type: 'Tool', placeholder: 'I.A.1', hint: '/schema <section_id>' },
  { cmd: '/export', description: 'Bulk export content as JSON, YAML, or Markdown', type: 'Agent', placeholder: 'inflows --format json', hint: '/export <scope> [--format json|yaml|md]' },
  { cmd: '/glossary', description: 'Look up a regulatory term definition', type: 'Tool', placeholder: 'operational deposit', hint: '/glossary <term>' },
] as const;

type CommandDef = typeof COMMANDS[number];

// ─── API call dispatcher ──────────────────────────────────────────────────────

async function runCommand(cmd: string, args: string): Promise<unknown> {
  const arg = args.trim();

  switch (cmd) {
    case '/search': {
      const r = await fetch(`/api/search?q=${encodeURIComponent(arg)}`);
      return r.json();
    }
    case '/show': {
      const r = await fetch(`/api/section?id=${encodeURIComponent(arg.toUpperCase())}`);
      return r.json();
    }
    case '/map': {
      const r = await fetch(`/api/map?product=${encodeURIComponent(arg)}`);
      return r.json();
    }
    case '/fields': {
      const r = await fetch(`/api/fields?id=${encodeURIComponent(arg.toUpperCase())}`);
      return r.json();
    }
    case '/enums': {
      const r = await fetch(`/api/enums?field=${encodeURIComponent(arg)}`);
      return r.json();
    }
    case '/xref': {
      const r = await fetch(`/api/xref?id=${encodeURIComponent(arg)}`);
      return r.json();
    }
    case '/diff': {
      const parts = arg.split(/\s+--/);
      const sectionId = parts[0].trim();
      const fromPart = parts.find(p => p.startsWith('from '));
      const toPart = parts.find(p => p.startsWith('to '));
      const from = fromPart ? fromPart.replace('from ', '').trim() : '';
      const to = toPart ? toPart.replace('to ', '').trim() : 'current';
      const r = await fetch(
        `/api/diff?id=${encodeURIComponent(sectionId)}&from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`
      );
      return r.json();
    }
    case '/filter': {
      const params = new URLSearchParams();
      arg.split(/\s+/).forEach(pair => {
        const idx = pair.indexOf(':');
        if (idx > 0) {
          params.set(pair.slice(0, idx), pair.slice(idx + 1));
        }
      });
      const r = await fetch(`/api/filter?${params.toString()}`);
      return r.json();
    }
    case '/schema': {
      const r = await fetch(`/api/schema?id=${encodeURIComponent(arg.toUpperCase())}`);
      return r.json();
    }
    case '/export': {
      const parts = arg.split('--format');
      const scope = parts[0].trim() || 'all';
      const format = (parts[1]?.trim() ?? 'json') as 'json' | 'yaml' | 'md';
      if (format === 'json') {
        const r = await fetch(`/api/export?scope=${encodeURIComponent(scope)}&format=json`);
        const data = await r.json();
        return { ...data, _format: 'json' };
      }
      const r = await fetch(`/api/export?scope=${encodeURIComponent(scope)}&format=${format}`);
      const text = await r.text();
      return { content: text, scope, _format: format };
    }
    case '/glossary': {
      const r = await fetch(`/api/glossary?term=${encodeURIComponent(arg)}`);
      return r.json();
    }
    default:
      throw new Error(`Unknown command: ${cmd}`);
  }
}

// ─── Section URL helper ───────────────────────────────────────────────────────

function sectionUrl(sectionId: string, pillar?: string): string {
  const pillarMap: Record<string, string> = { I: 'inflows', O: 'outflows', S: 'supplemental' };
  const parts = sectionId.split('.');
  const p = pillar ?? pillarMap[parts[0]] ?? 'inflows';
  const cat = parts.slice(0, 2).join('.').toLowerCase().replace('.', '-');
  const sec = sectionId.toLowerCase().replace(/\./g, '-');
  return `/${p}/${cat}/${sec}`;
}

// ─── Result sub-renderers (Human mode) ───────────────────────────────────────

function SearchResultsView({ data }: { data: { results?: { section_id: string; section_name: string; pillar: string; match_context: string; score: number }[] } }) {
  const results = data.results ?? [];
  if (!results.length) return <Empty>No sections match your query.</Empty>;
  return (
    <div className="divide-y divide-slate-800">
      {results.slice(0, 15).map(r => (
        <a
          key={r.section_id}
          href={sectionUrl(r.section_id, r.pillar)}
          className="flex items-start gap-3 px-4 py-2.5 hover:bg-slate-800 transition-colors block"
        >
          <span className="font-mono text-[11px] text-primary-400 shrink-0 mt-0.5 w-12">{r.section_id}</span>
          <div className="min-w-0">
            <div className="text-sm text-slate-200">{r.section_name}</div>
            <div className="text-xs text-slate-500 mt-0.5 truncate">{r.match_context}</div>
          </div>
          <span className="text-[10px] text-slate-600 shrink-0 mt-0.5">{Math.round((1 - r.score) * 100)}%</span>
        </a>
      ))}
    </div>
  );
}

function ShowResultView({ data }: { data: Record<string, unknown> }) {
  if (data.error) return <ErrorMsg message={String(data.error)} />;
  const section = data as { section_id: string; section_name: string; definition_summary?: string; data_fields?: { name: string; type: string }[]; pillar?: string };
  return (
    <div className="p-4 space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="font-mono text-xs text-primary-400 bg-primary-900/30 border border-primary-800 rounded px-2 py-0.5">{section.section_id}</span>
        <span className="text-slate-200 text-sm font-medium">{section.section_name}</span>
      </div>
      {section.definition_summary && (
        <p className="text-xs text-slate-400 leading-relaxed">{section.definition_summary}</p>
      )}
      {Array.isArray(section.data_fields) && section.data_fields.length > 0 && (
        <div>
          <div className="text-[10px] text-slate-600 uppercase tracking-wide mb-1.5">Fields</div>
          <div className="flex flex-wrap gap-1">
            {section.data_fields.map((f) => (
              <span key={f.name} className="font-mono text-[11px] text-slate-400 bg-slate-800 border border-slate-700 rounded px-1.5 py-0.5">{f.name}</span>
            ))}
          </div>
        </div>
      )}
      <a href={sectionUrl(section.section_id, section.pillar)} className="inline-flex items-center gap-1 text-xs text-primary-400 hover:underline">
        View full section <ExternalLink size={11} />
      </a>
    </div>
  );
}

function MapResultView({ data }: { data: { matches?: { section_id: string; section_name: string; pillar: string; confidence: number; definition_summary?: string }[]; note?: string } }) {
  const matches = data.matches ?? [];
  return (
    <div className="p-4 space-y-2">
      {data.note && (
        <p className="text-[10px] text-amber-500/80 mb-3 border border-amber-900/40 bg-amber-900/10 rounded px-2 py-1.5">{data.note}</p>
      )}
      {!matches.length
        ? <Empty>No matching sections found.</Empty>
        : matches.map(m => (
            <a key={m.section_id} href={sectionUrl(m.section_id, m.pillar)} className="flex items-center gap-3 py-2 border-b border-slate-800 last:border-0 hover:bg-slate-800/50 rounded px-2 -mx-2 transition-colors block">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-[11px] text-primary-400">{m.section_id}</span>
                  <span className="text-sm text-slate-200 truncate">{m.section_name}</span>
                </div>
                <div className="text-xs text-slate-500 truncate">{m.definition_summary}</div>
              </div>
              <div className="flex flex-col items-end shrink-0 gap-1">
                <span className="text-xs font-mono text-slate-300">{m.confidence}%</span>
                <div className="w-20 h-1.5 bg-slate-700 rounded-full">
                  <div className="h-1.5 bg-primary-500 rounded-full" style={{ width: `${m.confidence}%` }} />
                </div>
              </div>
            </a>
          ))}
    </div>
  );
}

function FieldsResultView({ data }: { data: Record<string, unknown> }) {
  // Section-level result
  if (data.data_fields) {
    const fields = data.data_fields as { name: string; type: string; values?: string[]; description?: string; required?: boolean }[];
    return <FieldTable fields={fields} />;
  }
  // Category-level result
  if (data.fields) {
    const fieldsMap = data.fields as Record<string, { type: string; sections: string[]; values?: string[] }>;
    const rows = Object.entries(fieldsMap).map(([name, info]) => ({
      name,
      type: info.type,
      values: info.values,
      description: `Used in: ${info.sections.join(', ')}`,
    }));
    return (
      <div>
        <div className="px-4 pt-3 pb-1 text-[10px] text-slate-500">
          Category <span className="text-slate-300">{String(data.category)}</span> — {String(data.section_count)} section(s)
        </div>
        <FieldTable fields={rows} />
      </div>
    );
  }
  if (data.error) return <ErrorMsg message={String(data.error)} />;
  return <Empty>No fields found.</Empty>;
}

function FieldTable({ fields }: { fields: { name: string; type: string; values?: string[]; description?: string; required?: boolean }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b border-slate-700 text-[10px] text-slate-500 uppercase tracking-wide">
            <th className="text-left px-4 py-2">Field Name</th>
            <th className="text-left px-4 py-2">Type</th>
            <th className="text-left px-4 py-2">Valid Values / Description</th>
            <th className="text-left px-4 py-2">Req</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {fields.map(f => (
            <tr key={f.name} className="hover:bg-slate-800/50 transition-colors">
              <td className="px-4 py-2 font-mono text-slate-300">{f.name}</td>
              <td className="px-4 py-2">
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded font-mono">{f.type}</span>
              </td>
              <td className="px-4 py-2 text-slate-400 max-w-xs">
                {f.values?.length
                  ? <span className="line-clamp-2">{f.values.join(', ')}</span>
                  : f.description ?? '—'}
              </td>
              <td className="px-4 py-2">
                {f.required === true ? <span className="text-green-500">✓</span>
                  : f.required === false ? <span className="text-slate-600">—</span>
                  : <span className="text-slate-600">—</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function EnumsResultView({ data }: { data: { field?: string; unique_values?: string[]; section_count?: number; by_section?: { section_id: string; section_name: string; values: string[] }[] } }) {
  if (!data.unique_values?.length) return <ErrorMsg message={(data as { error?: string }).error ?? 'Field not found in any section.'} />;
  return (
    <div className="p-4 space-y-3">
      <div className="text-[10px] text-slate-500">
        Field <span className="font-mono text-slate-300">"{data.field}"</span> — {data.unique_values.length} unique values across {data.section_count} section(s)
      </div>
      <div className="flex flex-wrap gap-1.5">
        {data.unique_values.map(v => (
          <span key={v} className="font-mono text-[11px] text-slate-300 bg-slate-800 border border-slate-700 rounded px-2 py-0.5">{v}</span>
        ))}
      </div>
      {(data.by_section ?? []).length > 1 && (
        <details className="text-xs">
          <summary className="text-slate-500 cursor-pointer hover:text-slate-400">Values by section</summary>
          <div className="mt-2 space-y-1.5">
            {data.by_section?.map(s => (
              <div key={s.section_id} className="flex gap-2 text-xs">
                <span className="font-mono text-primary-400 shrink-0 w-14">{s.section_id}</span>
                <span className="text-slate-500 text-[11px]">{s.values.join(', ')}</span>
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function XrefResultView({ data }: { data: Record<string, unknown> }) {
  if (data.type === 'section') {
    const outbound = data.outbound as { section?: string; regulation?: string; relationship?: string; description?: string }[];
    const inbound = data.inbound as { section_id: string; section_name: string; relationship?: string }[];
    return (
      <div className="p-4 space-y-4">
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-2">Outbound references from {String(data.section_id)}</div>
          {!outbound?.length ? <p className="text-xs text-slate-600">None recorded.</p>
            : outbound.map((xr, i) => (
              <div key={i} className="flex items-start gap-2 py-1">
                {xr.section
                  ? <a href={sectionUrl(xr.section)} className="font-mono text-xs text-primary-400 hover:underline shrink-0">→ {xr.section}</a>
                  : <span className="text-xs text-slate-400 flex items-center gap-1"><ExternalLink size={10} /> {xr.regulation}</span>}
                {(xr.relationship || xr.description) && (
                  <span className="text-xs text-slate-600">— {xr.relationship ?? xr.description}</span>
                )}
              </div>
            ))}
        </div>
        <div>
          <div className="text-[10px] text-slate-500 uppercase tracking-wide mb-2">Inbound references to {String(data.section_id)}</div>
          {!inbound?.length ? <p className="text-xs text-slate-600">No other sections reference this one.</p>
            : inbound.map(xr => (
              <div key={xr.section_id} className="flex items-start gap-2 py-1">
                <a href={sectionUrl(xr.section_id)} className="font-mono text-xs text-primary-400 hover:underline shrink-0">{xr.section_id}</a>
                <span className="text-xs text-slate-600">{xr.section_name}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
  // Regulation/concept search
  const matches = data.sections_referencing as { section_id: string; section_name: string; references: unknown[] }[] ?? [];
  return (
    <div className="p-4">
      <div className="text-[10px] text-slate-500 mb-3">{matches.length} section(s) reference "{String(data.query)}"</div>
      {!matches.length ? <Empty>No sections reference this regulation or concept.</Empty>
        : matches.slice(0, 15).map(m => (
          <a key={m.section_id} href={sectionUrl(m.section_id)} className="flex items-center gap-2 py-1.5 hover:bg-slate-800/50 rounded px-1 -mx-1 transition-colors block">
            <span className="font-mono text-xs text-primary-400 w-14 shrink-0">{m.section_id}</span>
            <span className="text-xs text-slate-300">{m.section_name}</span>
          </a>
        ))}
    </div>
  );
}

function DiffResultView({ data }: { data: { message?: string; section_id?: string; from?: string; to?: string; available_versions?: string[] } }) {
  return (
    <div className="p-4">
      <div className="flex items-start gap-3 bg-slate-800/50 border border-slate-700 rounded-lg p-4">
        <GitCompare size={16} className="text-amber-500 shrink-0 mt-0.5" />
        <div className="space-y-2">
          {data.section_id && (
            <div className="text-xs text-slate-400">
              Section: <span className="font-mono text-slate-300">{data.section_id}</span>
              {' · '}
              <span className="text-slate-500">{data.from} → {data.to}</span>
            </div>
          )}
          <p className="text-sm text-slate-300">{data.message}</p>
          {data.available_versions?.length && (
            <div className="text-xs text-slate-500">
              Available: {data.available_versions.join(', ')}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterResultView({ data }: { data: { count?: number; sections?: { section_id: string; section_name: string; category: string; pillar: string }[]; filters?: Record<string, string | null> } }) {
  const sections = data.sections ?? [];
  return (
    <div>
      <div className="px-4 pt-3 pb-1 text-[10px] text-slate-500">
        {data.count} matching section(s)
        {Object.entries(data.filters ?? {}).filter(([, v]) => v).map(([k, v]) => (
          <span key={k} className="ml-2 font-mono bg-slate-800 border border-slate-700 rounded px-1">{k}:{v}</span>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-700 text-[10px] text-slate-500 uppercase tracking-wide">
              <th className="text-left px-4 py-2">ID</th>
              <th className="text-left px-4 py-2">Name</th>
              <th className="text-left px-4 py-2">Category</th>
              <th className="text-left px-4 py-2">Pillar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {sections.slice(0, 20).map(s => (
              <tr key={s.section_id} className="hover:bg-slate-800/50 transition-colors">
                <td className="px-4 py-2">
                  <a href={sectionUrl(s.section_id, s.pillar)} className="font-mono text-primary-400 hover:underline">{s.section_id}</a>
                </td>
                <td className="px-4 py-2 text-slate-300">{s.section_name}</td>
                <td className="px-4 py-2 text-slate-500 font-mono">{s.category}</td>
                <td className="px-4 py-2 text-slate-500 capitalize">{s.pillar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SchemaResultView({ data }: { data: Record<string, unknown> }) {
  if (data.error) return <ErrorMsg message={String(data.error)} />;
  return (
    <div className="p-4">
      <InlineJson data={data} />
    </div>
  );
}

function ExportResultView({ data }: { data: Record<string, unknown> }) {
  const [copied, setCopied] = useState(false);
  const fmt = data._format as string ?? data.format ?? 'json';
  const isJson = fmt === 'json';
  const content = isJson
    ? JSON.stringify({ scope: data.scope, count: data.count, sections: data.sections }, null, 2)
    : String(data.content ?? '');

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const ext = fmt === 'json' ? 'json' : fmt === 'yaml' ? 'yaml' : 'md';
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `fr2052a-${data.scope ?? 'export'}.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 space-y-2">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] text-slate-500">
          {isJson ? String(data.count) + ' sections' : ''} · {fmt.toUpperCase()}
        </span>
        <div className="flex gap-2">
          <button onClick={handleCopy} className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 border border-slate-700 rounded px-2 py-1">
            {copied ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button onClick={handleDownload} className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 border border-slate-700 rounded px-2 py-1">
            <Download size={11} /> Download
          </button>
        </div>
      </div>
      <pre className="text-[11px] text-slate-400 font-mono whitespace-pre-wrap break-words max-h-48 overflow-y-auto bg-slate-800/50 rounded p-3 border border-slate-700 leading-relaxed">
        {content.slice(0, 3000)}{content.length > 3000 ? '\n… (truncated)' : ''}
      </pre>
    </div>
  );
}

function GlossaryResultView({ data }: { data: { results?: { term: string; full_name?: string; definition: string; source?: string; related_sections?: string[] }[] } }) {
  const results = data.results ?? [];
  if (!results.length) return <Empty>No matching terms found.</Empty>;
  return (
    <div className="p-4 space-y-4">
      {results.slice(0, 5).map(t => (
        <div key={t.term} className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold text-slate-200">{t.term}</span>
            {t.full_name && t.full_name !== t.term && (
              <span className="text-xs text-slate-500">{t.full_name}</span>
            )}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">{t.definition}</p>
          <div className="flex items-center gap-3 text-[10px] text-slate-600">
            {t.source && <span>Source: {t.source}</span>}
            {t.related_sections?.length ? (
              <span>
                Related:{' '}
                {t.related_sections.map((s, i) => (
                  <span key={s}>
                    <a href={sectionUrl(s)} className="font-mono text-primary-500/80 hover:underline">{s}</a>
                    {i < (t.related_sections?.length ?? 0) - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Shared helpers ───────────────────────────────────────────────────────────

function Empty({ children }: { children: React.ReactNode }) {
  return <div className="p-4 text-sm text-slate-500 text-center">{children}</div>;
}

function ErrorMsg({ message }: { message: string }) {
  return <div className="p-4 text-sm text-red-400">{message}</div>;
}

function InlineJson({ data }: { data: unknown }) {
  return (
    <pre className="text-[11px] text-slate-300 font-mono whitespace-pre-wrap break-words max-h-64 overflow-y-auto bg-slate-800/50 rounded p-3 border border-slate-700 leading-relaxed">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

// ─── Machine mode raw JSON renderer ──────────────────────────────────────────

function RawJsonView({ data }: { data: unknown }) {
  return (
    <div className="p-4">
      <InlineJson data={data} />
    </div>
  );
}

// ─── Command Results dispatcher ───────────────────────────────────────────────

function CommandResultsView({ cmdName, data, mode }: { cmdName: string; data: unknown; mode: string }) {
  if (mode === 'machine') return <RawJsonView data={data} />;
  const d = data as Record<string, unknown>;
  switch (cmdName) {
    case 'search':   return <SearchResultsView data={d as Parameters<typeof SearchResultsView>[0]['data']} />;
    case 'show':     return <ShowResultView data={d} />;
    case 'map':      return <MapResultView data={d as Parameters<typeof MapResultView>[0]['data']} />;
    case 'fields':   return <FieldsResultView data={d} />;
    case 'enums':    return <EnumsResultView data={d as Parameters<typeof EnumsResultView>[0]['data']} />;
    case 'xref':     return <XrefResultView data={d} />;
    case 'diff':     return <DiffResultView data={d as Parameters<typeof DiffResultView>[0]['data']} />;
    case 'filter':   return <FilterResultView data={d as Parameters<typeof FilterResultView>[0]['data']} />;
    case 'schema':   return <SchemaResultView data={d} />;
    case 'export':   return <ExportResultView data={d} />;
    case 'glossary': return <GlossaryResultView data={d as Parameters<typeof GlossaryResultView>[0]['data']} />;
    default:         return <RawJsonView data={data} />;
  }
}

// ─── Main component ───────────────────────────────────────────────────────────

type Phase = 'commands' | 'args' | 'loading' | 'results';

export default function CommandPalette() {
  const { commandPaletteOpen, setCommandPaletteOpen, mode } = useModeStore();
  const [phase, setPhase] = useState<Phase>('commands');
  const [selectedCmd, setSelectedCmd] = useState<CommandDef | null>(null);
  const [args, setArgs] = useState('');
  const [result, setResult] = useState<{ cmdName: string; data: unknown } | null>(null);
  const argInputRef = useRef<HTMLInputElement>(null);

  // Reset when opening
  useEffect(() => {
    if (commandPaletteOpen) {
      setPhase('commands');
      setSelectedCmd(null);
      setArgs('');
      setResult(null);
    }
  }, [commandPaletteOpen]);

  // Focus arg input when entering args phase
  useEffect(() => {
    if (phase === 'args') {
      setTimeout(() => argInputRef.current?.focus(), 30);
    }
  }, [phase]);

  const close = useCallback(() => setCommandPaletteOpen(false), [setCommandPaletteOpen]);
  const goBack = useCallback(() => {
    setPhase('commands');
    setSelectedCmd(null);
    setArgs('');
    setResult(null);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!commandPaletteOpen);
      }
      if (e.key === 'Escape') {
        if (phase !== 'commands') goBack();
        else close();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [commandPaletteOpen, setCommandPaletteOpen, phase, close, goBack]);

  const selectCommand = useCallback((cmd: CommandDef) => {
    setSelectedCmd(cmd);
    setArgs('');
    setPhase('args');
  }, []);

  const executeCommand = useCallback(async () => {
    if (!selectedCmd) return;
    setPhase('loading');
    try {
      const data = await runCommand(selectedCmd.cmd, args);
      setResult({ cmdName: selectedCmd.cmd.slice(1), data });
      setPhase('results');
    } catch (e) {
      setResult({ cmdName: 'error', data: { error: String(e) } });
      setPhase('results');
    }
  }, [selectedCmd, args]);

  if (!commandPaletteOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center pb-14"
      onClick={close}
    >
      <div
        className="w-full max-w-2xl bg-[#0f172a] border border-slate-700 rounded-t-xl shadow-2xl overflow-hidden font-mono"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Phase: commands ─────────────────────────────────────────── */}
        {phase === 'commands' && (
          <Command loop className="flex flex-col">
            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 shrink-0">
              <span className="text-slate-500 text-sm">›</span>
              <Command.Input
                className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder-slate-500 font-mono"
                placeholder="Type a command…"
              />
              <button onClick={close} className="text-slate-600 hover:text-slate-400 transition-colors">
                <X size={14} />
              </button>
            </div>
            {/* Command list */}
            <Command.List className="max-h-72 overflow-y-auto divide-y divide-slate-800/60">
              <Command.Empty className="py-6 text-center text-xs text-slate-500">
                No commands match.
              </Command.Empty>
              {COMMANDS.map(cmd => {
                const Icon = ICON_MAP[cmd.cmd];
                return (
                  <Command.Item
                    key={cmd.cmd}
                    value={`${cmd.cmd} ${cmd.description}`}
                    onSelect={() => selectCommand(cmd)}
                    className="flex items-center gap-3 px-4 py-2.5 cursor-pointer hover:bg-slate-800 data-[selected=true]:bg-slate-800 transition-colors"
                  >
                    <Icon size={13} className="text-slate-500 shrink-0" />
                    <span className="text-primary-400 font-semibold w-24 shrink-0 text-sm">{cmd.cmd}</span>
                    <span className="text-slate-400 flex-1 text-xs font-sans">{cmd.description}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-sans ${cmd.type === 'Tool' ? 'bg-primary-900/60 text-primary-300' : 'bg-slate-700 text-slate-300'}`}>
                      {cmd.type}
                    </span>
                  </Command.Item>
                );
              })}
            </Command.List>
          </Command>
        )}

        {/* ── Phase: args / loading / results ─────────────────────────── */}
        {phase !== 'commands' && selectedCmd && (
          <>
            {/* Input row */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 shrink-0">
              <button onClick={goBack} className="text-slate-600 hover:text-slate-400 transition-colors">
                <ArrowLeft size={13} />
              </button>
              <span className="text-primary-400 font-semibold text-sm">{selectedCmd.cmd}</span>

              {phase === 'args' && (
                <input
                  ref={argInputRef}
                  value={args}
                  onChange={e => setArgs(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') executeCommand();
                    if (e.key === 'Backspace' && args === '') goBack();
                  }}
                  className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder-slate-500 font-mono"
                  placeholder={selectedCmd.placeholder}
                />
              )}

              {(phase === 'loading' || phase === 'results') && (
                <span className="flex-1 text-slate-400 text-sm truncate">{args || <span className="text-slate-600 italic">no args</span>}</span>
              )}

              <div className="flex items-center gap-2 shrink-0">
                {phase === 'loading' && <Loader2 size={13} className="text-slate-500 animate-spin" />}
                <button onClick={close} className="text-slate-600 hover:text-slate-400 transition-colors">
                  <X size={13} />
                </button>
              </div>
            </div>

            {/* Hint bar */}
            {phase === 'args' && (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-slate-800/40 border-b border-slate-800 text-[10px] text-slate-600 font-sans shrink-0">
                <span className="font-mono text-slate-500">{selectedCmd.hint}</span>
                <span className="ml-auto flex gap-2">
                  <kbd className="border border-slate-700 rounded px-1">Enter</kbd> run
                  <kbd className="border border-slate-700 rounded px-1">⌫</kbd> back
                </span>
              </div>
            )}

            {/* Results area */}
            {phase === 'results' && result && (
              <div className="max-h-[55vh] overflow-y-auto">
                <CommandResultsView cmdName={result.cmdName} data={result.data} mode={mode} />
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <div className="flex items-center gap-3 px-4 py-2 border-t border-slate-800 text-[10px] text-slate-600 font-sans shrink-0">
          <span className="font-mono">FR 2052a Reference API:</span>
          <code className="text-slate-500 font-mono">GET /api/search?q=HQLA</code>
          <span className="mx-1">·</span>
          <a href="/llms.txt" className="text-primary-600 hover:underline">llms.txt</a>
        </div>
      </div>
    </div>
  );
}
