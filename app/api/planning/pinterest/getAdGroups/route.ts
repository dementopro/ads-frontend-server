import { NextRequest, NextResponse } from "next/server";
import moment from 'moment';

import { pinterestAxios, setPinterestAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const adAccountID = req.nextUrl.searchParams.get("ad_account_id");
    const body = await req.json();
    const accessToken = body.accessToken;
    
    setPinterestAccessToken(accessToken);

    const response = await pinterestAxios.get(`/ad_accounts/${adAccountID}/ad_groups`);

    return NextResponse.json(response.data.items || [], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
