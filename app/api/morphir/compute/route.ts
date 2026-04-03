import { NextResponse } from 'next/server';
import { cmdComputeLcr } from '@/lib/commands';
import { withCors } from '@/lib/cors';

const postCors = withCors({ 'Access-Control-Allow-Methods': 'POST, OPTIONS' });

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = cmdComputeLcr(body);
    return NextResponse.json(result, { headers: postCors });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Invalid request';
    return NextResponse.json({ error: message }, { status: 400, headers: postCors });
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: postCors });
}
