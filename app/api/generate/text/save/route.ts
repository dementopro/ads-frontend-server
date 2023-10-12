import { requestJson } from "@/lib/request"
import { IGeneTextForm } from "@/types/generate"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json() as IGeneTextForm
  const res = await requestJson(`/save_text_api`, 'POST', body, {
    'cookie': req.headers.get('cookie') || '',
    'content-type': 'application/json'
  })
  const data = res.data
  return NextResponse.json(data, {
    status: res.status,
  })
}

