import NextAuth, { SessionStrategy, AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import PinterestProvider from 'next-auth/providers/pinterest';
import InstagramProvider from 'next-auth/providers/instagram';
import FacebookProvider from 'next-auth/providers/facebook';

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
          scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/adwords"
        }
      }
    }),
    PinterestProvider({
      clientId: process.env.PINTEREST_ID as string,
      clientSecret: process.env.PINTEREST_SECRET as string,
      httpOptions: {
        timeout: 100000
      },
      authorization: {
        params: {
          scope: "user_accounts:read ads:read ads:write boards:read boards:write pins:read pins:write"
        }
      }
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID as string,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
    })
  ],
  session: {
    strategy: 'jwt' as SessionStrategy
  },
  callbacks: {
    async jwt({ token, account, profile, user, trigger, session }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at;
        token.provider = account.provider;
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session[token.provider] = {
        accountId: token.providerAccountId,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        expiresAt: token.expiresAt
      };

      return session;
    }
  }
};

export default NextAuth(authOptions);
