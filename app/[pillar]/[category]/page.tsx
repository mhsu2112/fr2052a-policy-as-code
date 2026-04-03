import Link from 'next/link';
import { getSectionsByCategory, getFormMetadata } from '@/lib/content';
import { notFound } from 'next/navigation';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ pillar: string; category: string }>;
}) {
  const { pillar, category } = await params;
  // category slug is like "i-a" for "I.A"
  const categoryId = category.toUpperCase().replace('-', '.');

  let sections;
  try {
    sections = getSectionsByCategory(categoryId);
  } catch {
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-6">
        <Link href={`/${pillar}`} className="text-xs text-slate-400 hover:text-primary-600 mb-3 block">← {pillar}</Link>
        <h1 className="text-2xl font-semibold text-slate-900">{categoryId}</h1>
        <p className="text-sm text-slate-500 mt-1">{sections.length} section(s)</p>
      </div>

      {sections.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-lg p-8 text-center">
          <p className="text-slate-500 text-sm">No sections found for {categoryId}.</p>
          <p className="text-slate-400 text-xs mt-1">Content will be added as the FR 2052a PDF is parsed.</p>
        </div>
      ) : (
        <div className="grid gap-3">
          {sections.map(section => (
            <Link
              key={section.section_id}
              href={`/${pillar}/${category}/${section.section_id.toLowerCase().replace(/\./g, '-')}`}
              className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono text-primary-600 bg-primary-50 border border-primary-200 rounded px-1.5 py-0.5 shrink-0">
                  {section.section_id}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">{section.section_name}</h3>
                  {section.definition_summary && (
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-2">{section.definition_summary}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
