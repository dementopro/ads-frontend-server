import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import Cookies from 'universal-cookie';


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookies = new Cookies(request.headers.get('cookie'))
  const session = cookies.get('session')
  const email = cookies.get('email')
  if (!session || !email) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/home/:path*',
    '/planning/:path*',
    '/projects/:path*',
    '/generate/:path*'
  ],
}
