// Import
import { NextResponse } from "next/server";

// Define an asynchronous function called GET that takes a request object (req).
export async function GET(req: Request) {
  // Extract the search parameters from the request URL.
  const { searchParams } = new URL(req.url);

  // Get the 'prompt' query parameter from the search parameters, or use an empty string if not provided.
  const prompt = searchParams.get('prompt') ?? '';

  // Send a GET request to an external API for planning using the 'prompt'.
  const res = await fetch(`${process.env.API_BASE_URL}/planning_api?prompt=${prompt}`, {
    method: 'GET',
    headers: {
      'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
    },
  });

  // Parse the response data as JSON.
  const data = await res.json();

  // Return a Next.js JSON response with the same status code as the external API response.
  return NextResponse.json(data, {
    status: res.status,
  });
}