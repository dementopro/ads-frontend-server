// Imports
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const code = new URL(req.url).searchParams.get('code');

  // Send a GET request to an external API with the extracted 'code'.
  const response = await fetch(`${process.env.API_BASE_URL}/fb_callback_api?code=${code}`, {
    headers: {
      'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
      'Access-Control-Allow-Origin': '*', // Allow requests from any origin (CORS).
    }
  });

  // Log the HTTP response status.
  console.log('response.status', response.status);

  // Parse the response data as JSON.
  const data = await response.json();

  // Return a Next.js JSON response with a status code of 200 and the parsed data.
  return NextResponse.json(data, {
    status: 200,
  });
}