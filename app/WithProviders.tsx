'use client'

import { AccountProvider } from "@/context/account"
import { SeoAnalyzerProvider } from "@/context/seo";
import { useEffect } from "react";
import { GoogleOAuthProvider } from '@react-oauth/google';

const WithProviders = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Clear localStorage when this component is mounted in the browser
    localStorage.clear();
  }, []);
  return (
    <AccountProvider>
      <SeoAnalyzerProvider>
        <GoogleOAuthProvider clientId="176418914084-gk8rf20881ifp8els3utulr46o80l5u5.apps.googleusercontent.com">
          {children}
        </GoogleOAuthProvider>
      </SeoAnalyzerProvider>
    </AccountProvider>
  )
}

export default WithProviders
