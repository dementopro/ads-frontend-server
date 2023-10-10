import { IPlanningObj } from "@/types/planning"
import { NextResponse } from "next/server"
import { getCookie } from '@/lib/cookies';

export async function POST(req: Request) {
  const planning_obj = await req.json() as IPlanningObj
  const body = {
    planning_obj,
    email: (await getCookie('email'))?.replace(/"/g, ''),
  }
  const res = await fetch(`${process.env.API_BASE_URL}/save_planning_api`, {
    method: 'POST',
    headers: {
      'cookie': req.headers.get('cookie') || '',
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  return NextResponse.json(data, {
    status: res.status,
  })
}

