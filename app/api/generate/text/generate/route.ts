import { request, requestJson } from "@/lib/request"
import { IGeneTextForm } from "@/types/generate"
import { NextResponse } from "next/server"

import axios from "@/lib/axios";

export async function POST(req: Request) {
  const body = await req.json() as IGeneTextForm
  const res = await axios({
    url: `${process.env.API_BASE_URL}/generate_text_api`,
    method: 'POST',
    data: JSON.stringify({
      ...body,
      platform: 'amazon',
    }),
    headers: {
      'cookie': req.headers.get('cookie') || '',
      'content-type': 'application/json',
    }
  })
  const data = res.data
  return NextResponse.json(data, {
    status: res.status,
  })
}

