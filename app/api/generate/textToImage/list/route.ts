import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const res = await fetch(`${process.env.API_BASE_URL}/get_image_list_api`, {
    method: 'GET',
    headers: {
      'cookie': req.headers.get('cookie') || '',
    },
  })
  const data = await res.json()
  return NextResponse.json(data, {
    status: res.status,
  })
}
