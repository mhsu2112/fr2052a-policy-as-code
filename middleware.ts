import { NextRequest, NextResponse } from 'next/server';

/**
 * Middleware: rewrite requests ending in .md to /api/raw-md?id=<SECTION_ID>
 *
 * Convention: GET /inflows/i-a/i-a-1.md
 *   → extracts the last path segment without .md
 *   → converts i-a-1 → I.A.1 (hyphens to dots, uppercase)
 *   → rewrites to /api/raw-md?id=I.A.1
 *
 * Also accepts: GET /api/section/I.A.1.md → rewrites to /api/raw-md?id=I.A.1
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.endsWith('.md')) return NextResponse.next();

  // Strip .md suffix and grab the last path segment as the section identifier
  const withoutExt = pathname.slice(0, -3); // remove .md
  const parts = withoutExt.split('/').filter(Boolean);
  const lastPart = parts[parts.length - 1];

  // Convert slug → section ID: i-a-1 → I.A.1
  const sectionId = lastPart.replace(/-/g, '.').toUpperCase();

  const url = req.nextUrl.clone();
  url.pathname = '/api/raw-md';
  url.searchParams.set('id', sectionId);

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
