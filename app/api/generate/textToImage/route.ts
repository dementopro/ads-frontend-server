import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  const { prompt, type, mode } = body
  const res = await fetch(`${process.env.API_BASE_URL}/generate_image_api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'cookie': req.headers.get('cookie') || '',
    },
    body: `prompt=${prompt}&type=${type}&mode=${mode}`,
  })
  const data = await res.json()
  return NextResponse.json(data, {
    status: res.status,
  })
}
