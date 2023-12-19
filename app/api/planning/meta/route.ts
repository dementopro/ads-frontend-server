import { NextRequest, NextResponse } from "next/server";

import { metaAxios, setMetaAccessToken } from "./index";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { accessToken, accountId } = body;
    
    setMetaAccessToken(accessToken);
    let accounts = await metaAxios.get(`/${accountId}/accounts`);
    accounts = accounts.data;

    return NextResponse.json((accounts as any).data || [], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
