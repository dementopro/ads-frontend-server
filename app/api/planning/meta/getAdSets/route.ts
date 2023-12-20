import { NextRequest, NextResponse } from "next/server";

import { metaAxios, setMetaAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { adAccountId, accessToken } = body;
    
    setMetaAccessToken(accessToken);
    let adSets = await metaAxios.get(`/${adAccountId}/adsets`, {
      params: {
        fields: 'name'
      }
    });
    adSets = adSets.data;

    return NextResponse.json((adSets as any).data || [], {
      status: 200
    });
  } catch (error) {
    console.log("error: ", error);
    return NextResponse.json(error, {
      status: 400
    });
  }
}
