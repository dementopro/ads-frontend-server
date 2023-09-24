// Imports
import { request } from "@/lib/request";
import { IGeneTextForm } from "@/types/generate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Parse the JSON body of the request into an IGeneTextForm object.
  const body = await req.json() as IGeneTextForm;

  // Send a custom request to an external API to perform an inquiry with a limit of 10.
  const res = await request(`/inquiry_text_api`, 'POST', {
    ...body,
    limit: 10, // Include the 'limit' field in the request body.
  }, {
    'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
  });

  // Parse the response data as JSON.
  const data = await res.json();

  // Return a Next.js JSON response with the same status code as the external API response.
  return NextResponse.json(data, {
    status: res.status,
  });
}