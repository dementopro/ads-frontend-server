import { NextRequest, NextResponse } from "next/server";
const imghash = require('imghash');

import { metaAxios, setMetaAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pageId, adAccountId, accessToken, link, title, description, media_image_url } = body;

    setMetaAccessToken(accessToken);
    // const launchAdResponse = await metaAxios.post(`/${adAccountId}/adcreatives`, {
    //   name: title,
    //   object_story_spec: {
    //     link_data: {
    //       image_hash: await imghash.hash(media_image_url),
    //       link: link,
    //       message: description
    //     },
    //     page_id: pageId
    //   },
    // });

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
