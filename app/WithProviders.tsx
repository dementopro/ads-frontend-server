'use client'
import AuthContextProvider from "@/context/auth"
import { AccountProvider } from "@/context/account"

const WithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthContextProvider>
      <AccountProvider>
        {children}
      </AccountProvider>
    </AuthContextProvider>
  )
}

export default WithProviders
