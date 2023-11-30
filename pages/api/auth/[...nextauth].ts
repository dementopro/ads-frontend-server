import NextAuth, { SessionStrategy, AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessTokenUrl: 'https://oauth2.googleapis.com/token',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/analytics.readonly"
        }
      }
    })
  ],
  session: {
    strategy: 'jwt' as SessionStrategy
  },
  callbacks: {
    async jwt({ token, account, profile, user, trigger, isNewUser }) {
      // console.log ({ token, account, profile, user, trigger, isNewUser })
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.expiresAt = token.expiresAt;

      return session;
    }
  }
};

export default NextAuth(authOptions);
