import { LoginForm } from '@/types/auth';
import { request } from "@/lib/request"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json() as Partial<LoginForm>
  const res = await request('/login_api', 'POST', body)
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
