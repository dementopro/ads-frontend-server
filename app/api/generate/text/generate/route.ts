import { request, requestJson } from "@/lib/request"
import { IGeneTextForm } from "@/types/generate"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json() as IGeneTextForm
  const res = await fetch(`${process.env.API_BASE_URL}/generate_text_api`, {
    method: 'POST',
    body: JSON.stringify({
      ...body,
      platform: 'amazon',
    }),
    headers: {
      'cookie': req.headers.get('cookie') || '',
      'content-type': 'application/json',
    }
  })
  const data = await res.json()
  return NextResponse.json(data, {
    status: res.status,
  })
}

