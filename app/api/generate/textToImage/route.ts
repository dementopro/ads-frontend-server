import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { prompt, type, mode } = body
  const formData = new URLSearchParams();
  formData.append('prompt', prompt);
  formData.append('type', type);
  formData.append('mode', mode);
  const res = await fetch(`${process.env.API_BASE_URL}/generate_image_api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'cookie': req.headers.get('cookie') || '',
    },
    body: formData.toString(),
  })
  const data = await res.json()
  return NextResponse.json(data, {
    status: res.status,
  })
}
