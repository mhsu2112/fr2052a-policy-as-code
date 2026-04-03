import { NextRequest, NextResponse } from 'next/server';
import { getAllSections } from '@/lib/content';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const fieldName = req.nextUrl.searchParams.get('field');
  if (!fieldName) return NextResponse.json({ error: 'field required' }, { status: 400, headers: withCors() });

  const sections = getAllSections();
  const bySection: { section_id: string; section_name: string; values: string[] }[] = [];
  const allValues = new Set<string>();

  for (const section of sections) {
    const field = section.data_fields?.find(
      f => f.name.toLowerCase() === fieldName.toLowerCase()
    );
    if (field?.values?.length) {
      bySection.push({
        section_id: section.section_id,
        section_name: section.section_name,
        values: field.values,
      });
      field.values.forEach(v => allValues.add(v));
    }
  }

  return NextResponse.json({
    field: fieldName,
    unique_values: [...allValues].sort(),
    section_count: bySection.length,
    by_section: bySection,
  }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
