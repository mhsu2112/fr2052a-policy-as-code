import { NextRequest, NextResponse } from 'next/server';
import { withCors } from '@/lib/cors';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  const from = req.nextUrl.searchParams.get('from') ?? '(previous version)';
  const to = req.nextUrl.searchParams.get('to') ?? 'current';

  return NextResponse.json({
    section_id: id,
    from,
    to,
    status: 'single_version',
    message:
      'Version comparison will be available when historical form versions are populated. ' +
      'Currently only the 2025-02-26 version is loaded. ' +
      'Historical versions (2023-03-01, 2022-04-29, and earlier) are planned for a future content update.',
    current_version: '2025-02-26',
    available_versions: ['2025-02-26'],
    added_fields: [],
    removed_fields: [],
    changed_definitions: [],
    changed_notes: [],
  }, { headers: withCors() });
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: withCors() });
}
