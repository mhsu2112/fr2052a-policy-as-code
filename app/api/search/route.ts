import { NextRequest, NextResponse } from 'next/server';
import { getAllSections } from '@/lib/content';
import { search } from '@/lib/search';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') ?? '';
  if (!q) return NextResponse.json({ results: [] }, { headers: withCors() });
  const sections = getAllSections();
  const results = search(q, sections);
  return NextResponse.json({ results }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
