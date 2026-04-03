import { NextRequest, NextResponse } from 'next/server';
import { cmdFields } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const result = cmdFields(id);
  if ('error' in result) {
    const status = result.error?.includes('not found') ? 404 : 400;
    return NextResponse.json(result, { status, headers: withCors() });
  }
  return NextResponse.json(result, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
