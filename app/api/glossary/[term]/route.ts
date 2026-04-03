import { NextRequest, NextResponse } from 'next/server';
import { cmdGlossary } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ term: string }> }
) {
  const { term } = await params;
  return NextResponse.json(cmdGlossary(term), { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
