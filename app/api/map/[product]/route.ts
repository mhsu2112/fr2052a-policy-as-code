import { NextRequest, NextResponse } from 'next/server';
import { cmdMap } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ product: string }> }
) {
  const { product } = await params;
  const result = cmdMap(decodeURIComponent(product));
  if ('error' in result) {
    return NextResponse.json(result, { status: 400, headers: withCors() });
  }
  return NextResponse.json(result, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
