'use client'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { AccountProvider } from "@/context/account"
import { SeoAnalyzerProvider } from "@/context/seo";
import { TutorialsProvider } from "@/context/tutorials";
import { GoogleOAuthProvider } from '@react-oauth/google';

const WithProviders = ({ children , session}: { children: React.ReactNode, session: Session | null }) => {
  return (
    <AccountProvider>
      <SessionProvider session={session} refetchInterval={60} refetchOnWindowFocus>
        <TutorialsProvider>
          <SeoAnalyzerProvider>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}>
              {children}
            </GoogleOAuthProvider>
          </SeoAnalyzerProvider>
        </TutorialsProvider>
      </SessionProvider>
    </AccountProvider>
  )
}

export default WithProviders
