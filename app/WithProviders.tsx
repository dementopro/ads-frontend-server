// Import the necessary dependencies
'use client'
import { AccountProvider } from "@/context/account"

// Define a functional component called WithProviders
const WithProviders = ({ children }: { children: React.ReactNode }) => {
  // Wrap the children components with the AccountProvider
  return (
    <AccountProvider>
      {children}
    </AccountProvider>
  )
}

// Export the WithProviders component
export default WithProviders