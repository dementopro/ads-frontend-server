import { NextRequest, NextResponse } from "next/server";
import { GoogleAdsApi, enums } from 'google-ads-api';
const { google } = require('googleapis');

export async function POST(req: NextRequest) {
  try {
    //const body = await req.json();
    const websiteURL = req.nextUrl.searchParams.get("site");
    const body = await req.json();
    const clientId = process.env.GOOGLE_CLIENT_ID as string;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
    const developerToken = process.env.GOOGLE_ADS_DEVELOPER_TOKEN as string;
    const customerId = process.env.GOOGLE_ADS_CUSTOMER_ID as string;
    const accessToken = body.accessToken;
    const refreshToken = body.refreshToken;
    console.log("accessToken: ", accessToken, ", refreshToken: ", refreshToken);
    const auth = new google.auth.OAuth2({
      clientId,
      clientSecret
    });

    auth.setCredentials({
      access_token: accessToken,
      refresh_token: refreshToken
    });

    const client = new GoogleAdsApi({
      client_id: clientId,
      client_secret: clientSecret,
      developer_token: developerToken
    });

    const customers = await client.listAccessibleCustomers(refreshToken);
    console.log("customers: ", customerId, customers);

    const customer = client.Customer({
      customer_id: '5497314662',
      login_customer_id: '3273028968',
      refresh_token: refreshToken
    });

    const now = Date.now();
    console.log("current date: ", now.toString());

    const totalRows = await customer.reportCount({
      entity: "search_term_view",
      attributes: ["search_term_view.resource_name"]
    });
    // const campaigns = await customer.report({
    //   entity: "campaign",
    //   metrics: [
    //     "metrics.cost_micros",
    //     "metrics.clicks",
    //     "metrics.impressions",
    //     "metrics.all_conversions"
    //   ],
    //   segments: ["segments.date"],
    //   limit: 100
    // });
    // console.log("campaigns: ", campaigns);
    // const adwords = google.ads({ auth, version: "v8" });

    return NextResponse.json([], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
