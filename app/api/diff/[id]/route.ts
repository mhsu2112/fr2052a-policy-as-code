import { NextRequest, NextResponse } from 'next/server';
import { cmdDiff } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const from = req.nextUrl.searchParams.get('from') ?? undefined;
  const to = req.nextUrl.searchParams.get('to') ?? undefined;
  return NextResponse.json(cmdDiff(id, from, to), { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
