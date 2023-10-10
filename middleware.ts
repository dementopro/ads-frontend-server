import { NextRequest } from 'next/server'

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

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  // if (!isAuthenticated(request)) {
  //   // Respond with JSON indicating an error message
  //   return Response.json(
  //     { success: false, message: 'authentication failed' },
  //     { status: 401 }
  //   )
  // }
}

export default config;