import { NextRequest, NextResponse } from 'next/server';
import {
  getAllSections,
  getSectionsByPillar,
  getSectionsByCategory,
  getSection,
} from '@/lib/content';
import yaml from 'js-yaml';
import type { Section } from '@/lib/types';
import { withCors } from '@/lib/cors';

function resolveSections(scope: string): Section[] {
  if (scope === 'all') return getAllSections();
  if (['inflows', 'outflows', 'supplemental'].includes(scope.toLowerCase())) {
    return getSectionsByPillar(scope.toLowerCase());
  }
  // Category ID: 1-2 dot-separated parts, last part non-numeric (e.g. I.A, S.FX)
  const parts = scope.toUpperCase().split('.');
  if (parts.length <= 2) {
    const byCat = getSectionsByCategory(scope.toUpperCase());
    if (byCat.length) return byCat;
  }
  // Section ID
  const single = getSection(scope.toUpperCase());
  return single ? [single] : [];
}

export async function GET(req: NextRequest) {
  const scope = req.nextUrl.searchParams.get('scope') ?? 'all';
  const format = (req.nextUrl.searchParams.get('format') ?? 'json') as 'json' | 'yaml' | 'md';

  const sections = resolveSections(scope);

  if (format === 'json') {
    return NextResponse.json({ scope, count: sections.length, sections }, { headers: withCors() });
  }

  if (format === 'yaml') {
    const out = sections
      .map(s => {
        const { content: _, ...fm } = s;
        return yaml.dump(fm);
      })
      .join('\n---\n\n');
    return new NextResponse(out, {
      headers: withCors({ 'Content-Type': 'text/yaml; charset=utf-8' }),
    });
  }

  // Markdown
  const out = sections
    .map(s => {
      const { content, ...fm } = s;
      return `---\n${yaml.dump(fm)}---\n\n${content ?? ''}\n`;
    })
    .join('\n\n---\n\n');
  return new NextResponse(out, {
    headers: withCors({ 'Content-Type': 'text/markdown; charset=utf-8' }),
  });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
