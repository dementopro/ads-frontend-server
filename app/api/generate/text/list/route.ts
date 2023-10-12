import { request } from "@/lib/request"
import { IGeneTextForm } from "@/types/generate"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json() as IGeneTextForm
  const res = await request(`/inquiry_text_api`, 'POST', {
    ...body,
    limit: 10,
  }, {
    'cookie': req.headers.get('cookie') || '',
  })
  const data = res.data
  return NextResponse.json(data, {
    status: res.status,
  })
}

