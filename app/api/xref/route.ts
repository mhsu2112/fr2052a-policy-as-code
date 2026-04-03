import { NextRequest, NextResponse } from 'next/server';
import { getAllSections, getSection } from '@/lib/content';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400, headers: withCors() });

  const allSections = getAllSections();
  const normalizedId = id.toUpperCase();

  // Try as a section ID first
  const section = getSection(normalizedId);
  if (section) {
    // Find inbound references
    const inbound = allSections
      .filter(s => s.section_id !== normalizedId)
      .filter(s => s.cross_references?.some(xr => xr.section === normalizedId))
      .map(s => ({
        section_id: s.section_id,
        section_name: s.section_name,
        relationship: s.cross_references?.find(xr => xr.section === normalizedId)?.relationship,
      }));

    return NextResponse.json({
      query: id,
      type: 'section',
      section_id: section.section_id,
      section_name: section.section_name,
      outbound: section.cross_references ?? [],
      inbound,
    }, { headers: withCors() });
  }

  // Search as regulation name / concept
  const query = id.toLowerCase();
  const matches = allSections
    .filter(s =>
      s.cross_references?.some(xr =>
        xr.regulation?.toLowerCase().includes(query) ||
        xr.description?.toLowerCase().includes(query) ||
        xr.relationship?.toLowerCase().includes(query)
      )
    )
    .map(s => ({
      section_id: s.section_id,
      section_name: s.section_name,
      references: s.cross_references?.filter(xr =>
        xr.regulation?.toLowerCase().includes(query) ||
        xr.description?.toLowerCase().includes(query) ||
        xr.relationship?.toLowerCase().includes(query)
      ),
    }));

  return NextResponse.json({
    query: id,
    type: 'regulation_or_concept',
    sections_referencing: matches,
    count: matches.length,
  }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
