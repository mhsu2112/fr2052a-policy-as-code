import { NextRequest, NextResponse } from 'next/server';
import { getSection } from '@/lib/content';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400, headers: withCors() });
  const section = getSection(id);
  if (!section) return NextResponse.json({ error: 'Not found' }, { status: 404, headers: withCors() });
  return NextResponse.json(section, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
