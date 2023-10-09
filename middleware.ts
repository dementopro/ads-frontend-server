import { withAuth } from "next-auth/middleware";

export default withAuth({
  
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/home/:path*',
    '/planning/:path*',
    '/projects/:path*',
    '/generate/:path*',
    '/socialInsights/:path*',
    '/auth/:path*',
    '/profile/:path*',
  ],
}
