import { NextRequest, NextResponse } from 'next/server';
import { getSection, getSectionsByCategory } from '@/lib/content';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400, headers: withCors() });

  // Category IDs have exactly 2 parts (e.g. I.A, O.D, S.FX)
  const parts = id.toUpperCase().split('.');
  const isCategory = parts.length <= 2 || (parts.length === 2 && isNaN(Number(parts[1])));

  if (isCategory) {
    const categoryId = id.toUpperCase();
    const sections = getSectionsByCategory(categoryId);
    if (!sections.length) return NextResponse.json({ error: 'Category not found' }, { status: 404, headers: withCors() });

    // Consolidated view: field -> { type, sections[], values? }
    const fieldMap: Record<string, { type: string; sections: string[]; values?: string[] }> = {};
    for (const section of sections) {
      for (const field of section.data_fields ?? []) {
        if (!fieldMap[field.name]) {
          fieldMap[field.name] = { type: field.type, sections: [], values: field.values };
        }
        fieldMap[field.name].sections.push(section.section_id);
      }
    }

    return NextResponse.json({
      category: categoryId,
      section_count: sections.length,
      fields: fieldMap,
    }, { headers: withCors() });
  }

  // Section ID
  const section = getSection(id.toUpperCase());
  if (!section) return NextResponse.json({ error: 'Section not found' }, { status: 404, headers: withCors() });

  return NextResponse.json({
    section_id: section.section_id,
    section_name: section.section_name,
    data_fields: section.data_fields,
  }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
