import type { User } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    accessToken: string;
    refreshToken: string;
    expiresAt: number;
  };
}
