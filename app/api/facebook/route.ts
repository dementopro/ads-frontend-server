import { NextResponse } from "next/server"

import axios from '@/lib/axios';

export async function GET(req: Request) {
  const code = new URL(req.url).searchParams.get('code')
  const response = await axios({
    url: `${process.env.API_BASE_URL}/fb_callback_api?code=${code}`,
    method: 'GET',
    headers: {
      'cookie': req.headers.get('cookie') || '',
      'Access-Control-Allow-Origin': '*',
    }
  })

  const data = response.data;
  return NextResponse.json(data, {
    status: 200,
  })
}
