// Import
import { NextResponse } from "next/server";

// Define an asynchronous function called POST that takes a request object (req).
export async function POST(req: Request) {
  // Parse the JSON body of the request.
  const body = await req.json();

  // Destructure values from the body object.
  const { prompt, type, mode } = body;

  // Create a URLSearchParams object and append key-value pairs to it.
  const formData = new URLSearchParams();
  formData.append('prompt', prompt);
  formData.append('type', type);
  formData.append('mode', mode);

  // Log the formData for debugging purposes.
  console.log('formData', formData.toString());

  // Send a POST request to an external API to generate an image.
  const res = await fetch(`${process.env.API_BASE_URL}/generate_image/text_to_img_v4`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', // Set the content type to URL-encoded form data.
      'cookie': req.headers.get('cookie') || '', // Include the 'cookie' header if present in the request.
    },
    body: formData.toString(), // Convert the formData to a string and include it as the request body.
  });

  return res
}