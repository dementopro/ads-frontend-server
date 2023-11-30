'use client'
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { AccountProvider } from "@/context/account"
import { SeoAnalyzerProvider } from "@/context/seo";
import { useEffect } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

const WithProviders = ({ children , session}: { children: React.ReactNode, session: Session | null }) => {
  return (
    <AccountProvider>
      <SessionProvider session={session} refetchInterval={60} refetchOnWindowFocus>
        <SeoAnalyzerProvider>
          <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID as string}>
            {children}
          </GoogleOAuthProvider>
        </SeoAnalyzerProvider>
      </SessionProvider>
    </AccountProvider>
  )
}

export default WithProviders
