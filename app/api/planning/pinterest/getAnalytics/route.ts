import { NextRequest, NextResponse } from "next/server";
import moment from 'moment';

import { pinterestAxios, setPinterestAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const adAccountID = req.nextUrl.searchParams.get("ad_account_id");
    const body = await req.json();
    const accessToken = body.accessToken;
    
    setPinterestAccessToken(accessToken);

    const endDate = moment().format("YYYY-MM-DD");
    const startDate = moment().subtract(30, 'days').format("YYYY-MM-DD");
    const response = await pinterestAxios.get(`/ad_accounts/${adAccountID}/analytics?start_date=${startDate}&end_date=${endDate}&columns=TOTAL_CLICKTHROUGH,TOTAL_IMPRESSION,SPEND_IN_DOLLAR&granularity=DAY`);

    return NextResponse.json(response.data || [], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
