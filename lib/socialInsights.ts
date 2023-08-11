import { SUCCESS_CODE } from "@/data/constant";

export async function checkFacebookIsConnected() {
  try {
    const response = await fetch('/fapi/inquiry_fb_link_status', {
      method: 'GET',
    })
    if (response.ok) {
      const data: IResponse = await response.json();
      return data.status === SUCCESS_CODE;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function checkTikTokIsConnected() {
  try {
    const response = await fetch('/fapi/inquiry_tt_link_status', {
      method: 'GET',
    })
    if (response.ok) {
      const data: IResponse = await response.json();
      return data.status === SUCCESS_CODE;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
