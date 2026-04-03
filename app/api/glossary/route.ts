import { NextRequest, NextResponse } from 'next/server';
import { getGlossary } from '@/lib/content';
import Fuse from 'fuse.js';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const term = req.nextUrl.searchParams.get('term');
  const terms = getGlossary();

  if (!term) {
    return NextResponse.json({ terms }, { headers: withCors() });
  }

  const fuse = new Fuse(terms, {
    keys: [
      { name: 'term', weight: 0.5 },
      { name: 'full_name', weight: 0.3 },
      { name: 'definition', weight: 0.2 },
    ],
    threshold: 0.4,
    includeScore: true,
  });

  const results = fuse.search(term).map(r => r.item);
  return NextResponse.json({ query: term, results }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
