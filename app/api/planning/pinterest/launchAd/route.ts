import { NextRequest, NextResponse } from "next/server";
import PinterestAPI from 'pinterest-node-api';
import axios from 'axios';
import moment from 'moment';

var pinterest = new PinterestAPI();
export async function POST(req: NextRequest) {
  try {
    const websiteURL = req.nextUrl.searchParams.get("site");
    const body = await req.json();
    const accessToken = body.accessToken;
    
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
    
    if (adAccountID)
        throw new Error('Launching new Add is not working');

    return NextResponse.json({success: true }, {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
