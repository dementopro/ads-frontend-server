// Imports
import { NextResponse } from "next/server";

// Define an asynchronous function called GET that takes a request object (req).
export async function GET(req: Request) {
  // Extract the search parameters from the request URL.
  const { searchParams } = new URL(req.url);

  // Get the 'id' query parameter from the search parameters, or use 'undefined' if not provided.
  const id = searchParams.get('id') || undefined;

  // Send a GET request to an external API to retrieve planning history based on the 'id'.
  const res = await fetch(`${process.env.API_BASE_URL}/planning_history?id=${id}`, {
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