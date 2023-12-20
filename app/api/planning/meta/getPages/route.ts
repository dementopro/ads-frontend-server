import { NextRequest, NextResponse } from "next/server";

import { metaAxios, setMetaAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { accountId, accessToken } = body;
    
    setMetaAccessToken(accessToken);
    let pages = await metaAxios.get(`/${accountId}/accounts`, {
      params: {
        fields: 'name'
      }
    });
    pages = pages.data;

    return NextResponse.json((pages as any).data || [], {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 400
    });
  }
}
