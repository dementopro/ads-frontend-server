// Imports
import { requestJson } from "@/lib/request";
import { IGeneTextForm } from "@/types/generate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Parse the JSON body of the request into an IGeneTextForm object.
  const body = await req.json() as IGeneTextForm;

  // Send a JSON POST request to an external API to save text data.
  const res = await requestJson(`/save_text_api`, 'POST', body, {
    'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
    'content-type': 'application/json', // Set the content type to JSON.
  });

  // Parse the response data as JSON.
  const data = await res.json();

  // Return a Next.js JSON response with the same status code as the external API response.
  return NextResponse.json(data, {
    status: res.status,
  });
}