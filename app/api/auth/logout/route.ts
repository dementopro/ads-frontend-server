// Imports
import { cookies } from 'next/headers';
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  // Send a GET request to an external API to log out the user.
  const res = await fetch(`${process.env.API_BASE_URL}/logout_api`, {
    headers: {
      'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
    }
  });

  // Delete specific cookies related to the user's session.
  const cookie = cookies();
  cookie.delete('email');
  cookie.delete('session');
  cookie.delete('remember_token');

  // Parse the response data as JSON.
  const data = await res.json();

  // Return a Next.js JSON response with the same status code as the external API response.
  return NextResponse.json(data, {
    status: res.status,
  });
}