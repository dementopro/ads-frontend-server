import { RegisterForm } from '@/types/auth';
import { request } from "@/lib/request"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json() as Partial<RegisterForm>
  console.log('body', body)
  const res = await request('/signup_api', 'POST', body)
  const data = await res.json()
  return NextResponse.json(data, {
    status: res.status,
  })
}
