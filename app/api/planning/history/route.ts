import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') || undefined
  const res = await fetch(`${process.env.API_BASE_URL}/planning_history?id=${id}`, {
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

