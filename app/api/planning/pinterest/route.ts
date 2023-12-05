import { NextRequest, NextResponse } from "next/server";
import PinterestAPI from 'pinterest-node-api';
import axios from 'axios';
import moment from 'moment';

var pinterest = new PinterestAPI();
export async function POST(req: NextRequest) {
  try {
    //const body = await req.json();
    const websiteURL = req.nextUrl.searchParams.get("site");
    const body = await req.json();
    const accessToken = body.accessToken;
    const refreshToken = body.refreshToken;
    
    console.log("accessToken: ", accessToken);
    // const pinterest = PinterestAPI(accessToken);
    pinterest.setUserToken(accessToken);
    const pinterestAxios = axios.create({
        baseURL: 'https://api.pinterest.com/v5',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });
    let adAccounts = await pinterestAxios.get("/ad_accounts");
    adAccounts = adAccounts.data;
    const adAccountID = (adAccounts as any)["items"][0].id;
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
