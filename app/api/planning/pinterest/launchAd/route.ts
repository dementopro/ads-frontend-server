import { NextRequest, NextResponse } from "next/server";
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const accessToken = body.accessToken;
    
    const pinterestAxios = axios.create({
      baseURL: 'https://api.pinterest.com/v5',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
    console.log("accessToken: ", accessToken);

    const createPinResponse = await pinterestAxios.post('/pins', {
      link: body.link,
      title: body.title,
      description: body.description,
      media_source: {
        source_type: 'image_url',
        url: body.media_image_url
      }
    });


    // console.log("createPinResponse: ", createPinResponse.data);

    // const createAdResponse = await pinterestAxios.post(`/ad_accounts/${body.adAccountId}/ads`, {
    //   ad_group_id: body.adGroupId,
    //   creative_type: "REGULAR",
    //   destination_url: body.link,
    //   pin_id: createPinResponse.data.id
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
