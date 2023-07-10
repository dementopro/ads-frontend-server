import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const { email } = body

  const res = await fetch(`${process.env.API_BASE_URL}/send_verification_email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${email}`,
  })
  const data = await res.json()
  const response = NextResponse.json(data, {
    status: res.status,
  })
  const setCookie = res.headers.get('set-cookie')
  if (setCookie) {
    response.headers.append('set-cookie', setCookie)
  }
  return response
}
