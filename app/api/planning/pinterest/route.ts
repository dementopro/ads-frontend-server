import { NextRequest, NextResponse } from "next/server";

import { pinterestAxios, setPinterestAccessToken } from "./index";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const accessToken = body.accessToken;
    
    setPinterestAccessToken(accessToken);
    let adAccounts = await pinterestAxios.get("/ad_accounts");
    adAccounts = adAccounts.data;

    return NextResponse.json((adAccounts as any).items || [], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
