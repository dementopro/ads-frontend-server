'use client'

import { AccountProvider } from "@/context/account"
import { SeoAnalyzerProvider } from "@/context/seo";
import { useEffect } from "react"

const WithProviders = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Clear localStorage when this component is mounted in the browser
    localStorage.clear();
  }, []);
  return (
    <AccountProvider>
      <SeoAnalyzerProvider>
        {children}
      </SeoAnalyzerProvider>
    </AccountProvider>
  )
}

export default WithProviders
