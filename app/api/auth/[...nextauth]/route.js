import { setCookie } from "@/lib/cookie"
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // The credentials are used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {

        try {
          const formData = new FormData()
          for (const [key, value] of Object.entries(credentials)) {
            formData.append(key, value)
          }
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login_api`, {
            method: 'POST',
            body: formData,
          })

          if (!res.ok) {
            // credentials are invalid
            return null;
          }

          const parsedResponse = await res.json();
          const parsedCookie = res.headers.get('set-cookie')
          if (parsedCookie && parsedCookie.startsWith('session=')) {
            const jwt = parsedCookie.replace ('session=','')
            return {
              ...credentials,
              jwt,
            };
          }
          return null;

          // You can make more request to get other information about the user eg. Profile details

          // return user credentials together with jwt
        } catch (e) {
          console.log (e)
          return null;
        }
      },
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    async redirect ({url, baseUrl}) {
      // console.log (url, baseUrl)
      return baseUrl
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log ({ user })
      return true
    },
    async session({ session, token, user }) {
      return session
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token
    }
  }
}
const handler = NextAuth(authOptions)

export { handler as POST, handler as GET }