import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      org_id?: string;
      org_name?: string;
    };
  }

  interface User {
    org_id?: string;
    org_name?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    org_id?: string;
    org_name?: string;
  }
}
