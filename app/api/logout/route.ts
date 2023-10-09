import { cookies } from 'next/headers';
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  // const res = await fetch(`${process.env.API_BASE_URL}/logout_api`, {
  //   headers: {
  //     'cookie': req.headers.get('cookie') || '',
  //   }
  // })
  const cookie = cookies()
  cookie.delete('email')
  cookie.delete('session')
  cookie.delete('remember_token')
  // const data = await res.json()
  return NextResponse.json({success: true}, {
    status: 200,
  })
}
