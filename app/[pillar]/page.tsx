import Link from 'next/link';
import { getFormMetadata } from '@/lib/content';
import { notFound } from 'next/navigation';

const PILLAR_DESCRIPTIONS: Record<string, string> = {
  inflows: 'Cash inflows and liquid asset positions that generate liquidity over the reporting horizon.',
  outflows: 'Funding outflows, obligations, and contingent liquidity demands.',
  supplemental: 'Informational and foreign exchange positions supplementing the core inflow/outflow data.',
};

export default async function PillarPage({ params }: { params: Promise<{ pillar: string }> }) {
  const { pillar } = await params;
  let meta;
  try {
    meta = getFormMetadata();
  } catch {
    return notFound();
  }

  const pillarData = meta.pillars.find(p => p.id === pillar);
  if (!pillarData) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-6">
        <Link href="/" className="text-xs text-slate-400 hover:text-primary-600 mb-3 block">← FR 2052a</Link>
        <h1 className="text-2xl font-semibold text-slate-900">{pillarData.name}</h1>
        <p className="text-sm text-slate-600 mt-1">{PILLAR_DESCRIPTIONS[pillar] ?? ''}</p>
      </div>

      <div className="grid gap-3">
        {pillarData.categories.map(cat => (
          <Link
            key={cat}
            href={`/${pillar}/${cat.toLowerCase().replace('.', '-')}`}
            className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all group"
          >
            <span className="text-sm font-mono font-semibold text-primary-600 w-12">{cat}</span>
            <span className="text-sm text-slate-600 group-hover:text-slate-800">View sections →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
