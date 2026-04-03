import { NextRequest, NextResponse } from 'next/server';
import { cmdExport } from '@/lib/commands';
import { withCors } from '@/lib/cors';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ scope: string }> }
) {
  const { scope } = await params;
  const format = (req.nextUrl.searchParams.get('format') ?? 'json') as 'json' | 'yaml' | 'md';
  const result = cmdExport(scope, format);

  if (result.type === 'json') {
    return NextResponse.json(result.data, { headers: withCors() });
  }
  if (result.type === 'yaml') {
    return new NextResponse(result.text, {
      headers: withCors({ 'Content-Type': 'text/yaml; charset=utf-8' }),
    });
  }
  return new NextResponse(result.text, {
    headers: withCors({ 'Content-Type': 'text/markdown; charset=utf-8' }),
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
