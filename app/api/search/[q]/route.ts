import { NextRequest, NextResponse } from 'next/server';
import { cmdSearch } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ q: string }> }
) {
  const { q } = await params;
  return NextResponse.json(cmdSearch(decodeURIComponent(q)), { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
