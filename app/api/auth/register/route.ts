import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, password, org_name } = body as {
      name?: string;
      email?: string;
      password?: string;
      org_name?: string;
    };

    if (!email || !password || !org_name) {
      return NextResponse.json(
        { error: 'email, password, and org_name are required' },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }

    const password_hash = await bcrypt.hash(password, 12);

    // Create org and user in one transaction
    const org = await prisma.organization.create({
      data: { name: org_name, verified: true },
    });

    const user = await prisma.user.create({
      data: {
        email,
        name: name ?? email.split('@')[0],
        password_hash,
        org_id: org.id,
        role: 'member',
      },
    });

    return NextResponse.json(
      { id: user.id, email: user.email, name: user.name, org_id: org.id, org_name: org.name },
      { status: 201 }
    );
  } catch (err) {
    console.error('Registration error:', err);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
