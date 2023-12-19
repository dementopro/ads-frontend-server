import { NextRequest, NextResponse } from "next/server";

import { metaAxios, setMetaAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const adAccountID = req.nextUrl.searchParams.get("ad_account_id");
    const body = await req.json();
    const { accountAccessToken } = body;
    
    setMetaAccessToken(accountAccessToken);

    const response = await metaAxios.get(`/${adAccountID}/insights`, {
      params: {
        metric: `page_impressions, page_total_actions, page_website_clicks_logged_in_unique, page_engaged_users,
                  page_negative_feedback, page_actions_post_reactions_like_total, page_actions_post_reactions_love_total,
                  page_fan_adds_unique, page_video_views`,
        access_token: accountAccessToken,
        period: 'month'
      }
    });

    return NextResponse.json(response.data.data || [], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
