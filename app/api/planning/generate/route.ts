import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const prompt = searchParams.get('prompt') ?? ''
  const res = await fetch(`${process.env.API_BASE_URL}/planning_api?prompt=${prompt}`, {
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
