import { NextRequest, NextResponse } from 'next/server';

/**
 * Proxy: rewrite requests ending in .md to /api/raw-md/[id]
 *
 * Convention: GET /inflows/i-a/i-a-1.md
 *   → extracts the last path segment without .md
 *   → converts i-a-1 → I.A.1 (hyphens to dots, uppercase)
 *   → rewrites to /api/raw-md/I.A.1
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.endsWith('.md')) return NextResponse.next();

  // Strip .md suffix and grab the last path segment
  const withoutExt = pathname.slice(0, -3);
  const parts = withoutExt.split('/').filter(Boolean);
  const lastPart = parts[parts.length - 1];

  // Convert slug → section ID: i-a-1 → I.A.1
  const sectionId = lastPart.replace(/-/g, '.').toUpperCase();

  // Rewrite to path-param route to avoid query-param issues
  const url = new URL(`/api/raw-md/${encodeURIComponent(sectionId)}`, req.url);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
