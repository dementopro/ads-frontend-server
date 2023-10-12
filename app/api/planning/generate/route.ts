import { NextResponse } from "next/server"

import axios from "@/lib/axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const prompt = searchParams.get('prompt') ?? ''
  const res = await axios({
    url: `${process.env.API_BASE_URL}/planning_api?prompt=${prompt}`,
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
