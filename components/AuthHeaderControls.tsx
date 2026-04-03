'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import type { SessionUser } from '@/lib/auth';

export default function AuthHeaderControls() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div className="w-20 h-4 bg-slate-100 rounded animate-pulse" />;
  }

  if (!session) {
    return (
      <Link
        href="/auth/signin"
        className="text-xs text-slate-500 hover:text-slate-700 border border-slate-200 rounded px-2.5 py-1 hover:bg-slate-50 transition-colors"
      >
        Sign in
      </Link>
    );
  }

  const user = session.user as SessionUser;

  return (
    <div className="flex items-center gap-2">
      <div className="text-right hidden sm:block">
        <p className="text-xs font-medium text-slate-700 leading-tight">
          {user.name ?? user.email}
        </p>
        {user.org_name && (
          <p className="text-[10px] text-slate-400 leading-tight">{user.org_name}</p>
        )}
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="text-xs text-slate-400 hover:text-slate-600 border border-slate-200 rounded px-2 py-0.5 hover:bg-slate-50 transition-colors"
        title="Sign out"
      >
        Sign out
      </button>
    </div>
  );
}
