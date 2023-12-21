import { NextRequest, NextResponse } from "next/server";
import _ from 'lodash';

import { getImageAsBase64 } from "@/utils/image";
import { metaAxios, setMetaAccessToken } from "../index";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { pageId, adAccountId, adSetId, accessToken, link, title, description, media_image_url } = body;

    setMetaAccessToken(accessToken);
    const hash = await getImageAsBase64(media_image_url);
    const adImageResponse = await metaAxios.post(`/${adAccountId}/adimages`, {
      bytes: hash
    });
    const imageHash = adImageResponse.data?.images.bytes.hash;
    const launchAdResponse = await metaAxios.post(`/${adAccountId}/ads`, {
      name: title,
      adset_id: adSetId,
      creative: {
        object_story_spec: {
          link_data: {
            image_hash: imageHash,
            link: link,
            description: description
          },
          page_id: pageId
        },
        degrees_of_freedom_spec: {
          creative_features_spec: {
            standard_enhancements: {
              enroll_status: 'OPT_OUT'
            }
          }
        }
      },
      status: 'PAUSED'
    });

    return NextResponse.json([], {
      status: 200
    });
  } catch (error) {
    console.log((error as any).response.data.error);
    //console.log("error: ", Error(_.get(error, 'response.data.error', (error as any).message)));
    return NextResponse.json(Error(_.get(error, 'response.data.error.error_user_msg', (error as any).message)), {
      status: 400
    });
  }
}
