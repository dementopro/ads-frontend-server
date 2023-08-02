import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const code = new URL(req.url).searchParams.get('code')
  const response = await fetch(`${process.env.API_BASE_URL}/fb_callback_api?code=${code}`, {
    headers: {
      'cookie': req.headers.get('cookie') || '',
      'Access-Control-Allow-Origin': '*',
    }
  })
  console.log('response.status', response.status)
  const data = await response.json()
  return NextResponse.json(data, {
    status: 200,
  })
}
