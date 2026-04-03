import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, type SessionUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

function unauthed() {
  return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
}

function dbUnavailable() {
  return NextResponse.json({ error: 'Annotations are not available (no database configured)' }, { status: 503 });
}

// GET /api/annotations?section_id=I.A.1
export async function GET(req: NextRequest) {
  if (!prisma) return dbUnavailable();

  const session = await getServerSession(authOptions);
  if (!session) return unauthed();

  const user = session.user as SessionUser;
  if (!user.org_id) {
    return NextResponse.json({ error: 'No organization associated with account' }, { status: 403 });
  }

  const section_id = req.nextUrl.searchParams.get('section_id');
  if (!section_id) {
    return NextResponse.json({ error: 'section_id required' }, { status: 400 });
  }

  const annotations = await prisma.annotation.findMany({
    where: { org_id: user.org_id, section_id },
    include: { user: { select: { id: true, name: true, email: true } } },
    orderBy: { created_at: 'desc' },
  });

  return NextResponse.json({ annotations });
}

// POST /api/annotations
export async function POST(req: NextRequest) {
  if (!prisma) return dbUnavailable();

  const session = await getServerSession(authOptions);
  if (!session) return unauthed();

  const user = session.user as SessionUser;
  if (!user.org_id) {
    return NextResponse.json({ error: 'No organization associated with account' }, { status: 403 });
  }

  const body = await req.json();
  const { section_id, content, category } = body as {
    section_id?: string;
    content?: string;
    category?: string;
  };

  if (!section_id || !content || !category) {
    return NextResponse.json(
      { error: 'section_id, content, and category are required' },
      { status: 400 }
    );
  }

  const validCategories = ['interpretation', 'internal_policy', 'examiner_guidance', 'open_question'];
  if (!validCategories.includes(category)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  const annotation = await prisma.annotation.create({
    data: {
      org_id: user.org_id,
      user_id: user.id,
      section_id,
      content,
      category,
      visibility: 'org_private',
    },
    include: { user: { select: { id: true, name: true, email: true } } },
  });

  return NextResponse.json({ annotation }, { status: 201 });
}
