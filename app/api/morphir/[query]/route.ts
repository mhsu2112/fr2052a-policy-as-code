import { NextRequest, NextResponse } from 'next/server';
import { cmdMorphir } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ query: string }> }
) {
  const { query } = await params;
  const result = cmdMorphir(decodeURIComponent(query));
  if ('error' in result) {
    return NextResponse.json(result, { status: 400, headers: withCors() });
  }
  return NextResponse.json(result, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
