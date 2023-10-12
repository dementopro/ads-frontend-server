import { NextResponse } from "next/server"

import axios from "@/lib/axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') || undefined
  const res = await axios({
    url: `${process.env.API_BASE_URL}/planning_history?id=${id}`,
    method: 'GET',
    headers: {
      'cookie': req.headers.get('cookie') || '',
    },
  })
  const data = res.data;
  return NextResponse.json(data, {
    status: res.status,
  })
}

