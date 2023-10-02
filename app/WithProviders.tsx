'use client'
import { AccountProvider } from "@/context/account"

const WithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  )
}

export default WithProviders
