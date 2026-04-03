import { NextRequest, NextResponse } from 'next/server';
import { cmdMorphir } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get('query') || req.nextUrl.searchParams.get('q') || '';
  if (!query) return NextResponse.json({ error: 'query required' }, { status: 400, headers: withCors() });
  const result = cmdMorphir(query);
  if ('error' in result) {
    return NextResponse.json(result, { status: 400, headers: withCors() });
  }
  return NextResponse.json(result, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
