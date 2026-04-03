import { NextRequest, NextResponse } from 'next/server';
import { cmdRawMd } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400, headers: withCors() });
  const result = cmdRawMd(id);
  if (result.type === 'error') {
    const status = result.error === 'Not found' ? 404 : 400;
    return NextResponse.json({ error: result.error }, { status, headers: withCors() });
  }
  return new NextResponse(result.text, {
    headers: withCors({ 'Content-Type': 'text/markdown; charset=utf-8' }),
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
