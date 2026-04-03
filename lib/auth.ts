import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: { org: true },
        });

        if (!user?.password_hash) return null;

        const valid = await bcrypt.compare(credentials.password, user.password_hash);
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? user.email,
          org_id: user.org_id ?? undefined,
          org_name: user.org?.name ?? undefined,
        };
      },
    }),
  ],

  session: { strategy: 'jwt' },

  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.org_id = (user as { org_id?: string }).org_id;
        token.org_name = (user as { org_name?: string }).org_name;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as SessionUser).id = token.id as string;
        (session.user as SessionUser).org_id = token.org_id as string | undefined;
        (session.user as SessionUser).org_name = token.org_name as string | undefined;
      }
      return session;
    },
  },

  pages: {
    signIn: '/auth/signin',
  },
};

export interface SessionUser {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  org_id?: string;
  org_name?: string;
}
