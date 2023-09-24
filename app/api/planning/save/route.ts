// Imports
import { IPlanningObj } from "@/types/planning";
import { NextResponse } from "next/server";
import { getCookie } from '@/lib/cookies';

// Define an asynchronous function called POST that takes a request object (req).
export async function POST(req: Request) {
  // Parse the JSON body of the request into an IPlanningObj object.
  const planning_obj = await req.json() as IPlanningObj;

  // Create a body object with planning_obj and the 'email' cookie (with double quotes removed).
  const body = {
    planning_obj,
    email: getCookie('email')?.replace(/"/g, ''),
  }

  // Send a JSON POST request to an external API to save planning data.
  const res = await fetch(`${process.env.API_BASE_URL}/save_planning_api`, {
    method: 'POST',
    headers: {
      'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
      'content-type': 'application/json', // Set the content type to JSON.
    },
    body: JSON.stringify(body), // Convert the body object to a JSON string and include it as the request body.
  });

  // Parse the response data as JSON.
  const data = await res.json();

  // Return a Next.js JSON response with the same status code as the external API response.
  return NextResponse.json(data, {
    status: res.status,
  });
}