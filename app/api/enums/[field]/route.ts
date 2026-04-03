import { NextRequest, NextResponse } from 'next/server';
import { cmdEnums } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ field: string }> }
) {
  const { field } = await params;
  const result = cmdEnums(field);
  if ('error' in result) {
    return NextResponse.json(result, { status: 400, headers: withCors() });
  }
  return NextResponse.json(result, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
