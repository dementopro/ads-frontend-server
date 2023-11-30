import { NextRequest, NextResponse } from "next/server";
import { google } from 'googleapis';

export async function POST(req: NextRequest) {
  try {
    //const body = await req.json();
    const websiteURL = req.nextUrl.searchParams.get("site");
    const body = await req.json();
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const accessToken = body.accessToken;
    const refreshToken = body.refreshToken;
    const auth = new google.auth.OAuth2({
      clientId,
      clientSecret
    });

    auth.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken
    });

    const analytics = google.analytics({ auth, version: "v3" });
    const response = await analytics.data.ga.get({
      "ids": `ga:${process.env.GOOGLE_VIEW_ID}`,
      "start-date": "30daysAgo",
      "end-date": "today",
      "metrics": "ga:users,ga:sessions,ga:pageviews",
      "dimensions": "ga:date",
      "filters": `ga:pagePath==/${websiteURL}`
    });

    return NextResponse.json(response.data.rows || [], {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(error, {
      status: 400
    });
  }
}
