import { NextRequest, NextResponse } from 'next/server';
import { getAllSections } from '@/lib/content';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  const pillar = params.get('pillar');
  const category = params.get('category');
  const has_field = params.get('has_field');
  const field_value = params.get('field_value'); // "fieldname=value"

  let sections = getAllSections();

  if (pillar) {
    sections = sections.filter(s => s.pillar === pillar.toLowerCase());
  }
  if (category) {
    sections = sections.filter(s => s.category === category.toUpperCase());
  }
  if (has_field) {
    const fn = has_field.toLowerCase();
    sections = sections.filter(s =>
      s.data_fields?.some(f => f.name.toLowerCase() === fn)
    );
  }
  if (field_value) {
    const [fname, fval] = field_value.split('=');
    if (fname && fval) {
      const fn = fname.toLowerCase();
      sections = sections.filter(s =>
        s.data_fields?.some(
          f => f.name.toLowerCase() === fn && f.values?.includes(fval)
        )
      );
    }
  }

  return NextResponse.json({
    filters: { pillar, category, has_field, field_value },
    count: sections.length,
    sections: sections.map(s => ({
      section_id: s.section_id,
      section_name: s.section_name,
      category: s.category,
      category_name: s.category_name,
      pillar: s.pillar,
      definition_summary: s.definition_summary,
    })),
  }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
