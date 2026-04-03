import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions, type SessionUser } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

function unauthed() {
  return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
}

// PUT /api/annotations/[id]
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return unauthed();

  const { id } = await params;
  const user = session.user as SessionUser;

  const annotation = await prisma.annotation.findUnique({ where: { id } });
  if (!annotation) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  if (annotation.user_id !== user.id) {
    return NextResponse.json({ error: 'Forbidden — only the author can edit' }, { status: 403 });
  }

  const body = await req.json();
  const { content, category } = body as { content?: string; category?: string };

  const validCategories = ['interpretation', 'internal_policy', 'examiner_guidance', 'open_question'];
  if (category && !validCategories.includes(category)) {
    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
  }

  const updated = await prisma.annotation.update({
    where: { id },
    data: {
      ...(content !== undefined && { content }),
      ...(category !== undefined && { category }),
    },
    include: { user: { select: { id: true, name: true, email: true } } },
  });

  return NextResponse.json({ annotation: updated });
}

// DELETE /api/annotations/[id]
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session) return unauthed();

  const { id } = await params;
  const user = session.user as SessionUser;

  const annotation = await prisma.annotation.findUnique({ where: { id } });
  if (!annotation) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  if (annotation.user_id !== user.id) {
    return NextResponse.json({ error: 'Forbidden — only the author can delete' }, { status: 403 });
  }

  await prisma.annotation.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
