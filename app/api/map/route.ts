import { NextRequest, NextResponse } from 'next/server';
import { getAllSections } from '@/lib/content';
import Fuse from 'fuse.js';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const product = req.nextUrl.searchParams.get('product');
  if (!product) return NextResponse.json({ error: 'product required' }, { status: 400, headers: withCors() });

  const sections = getAllSections();

  const fuse = new Fuse(sections, {
    keys: [
      { name: 'section_name', weight: 0.3 },
      { name: 'definition_summary', weight: 0.4 },
      { name: 'content', weight: 0.2 },
      { name: 'data_fields.values', weight: 0.1 },
    ],
    includeScore: true,
    threshold: 0.65,
  });

  const results = fuse.search(product).slice(0, 5);

  return NextResponse.json({
    query: product,
    matches: results.map(r => ({
      section_id: r.item.section_id,
      section_name: r.item.section_name,
      category: r.item.category,
      category_name: r.item.category_name,
      pillar: r.item.pillar,
      confidence: Math.round((1 - (r.score ?? 1)) * 100),
      definition_summary: r.item.definition_summary,
    })),
    note: 'Classification guidance only — verify against the full section instructions.',
  }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
