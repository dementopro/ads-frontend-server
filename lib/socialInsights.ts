import { SUCCESS_CODE } from "@/data/constant";

// Function to check if Facebook is connected
export async function checkFacebookIsConnected() {
  try {
    // Send a GET request to inquire about Facebook link status
    const response = await fetch('/fapi/inquiry_fb_link_status', {
      method: 'GET',
    });

    // Check if the response is OK (status code 200)
    if (response.ok) {
      // Parse the response as JSON
      const data: IResponse = await response.json();
      
      // Check if the status in the response matches the success code
      return data.status === SUCCESS_CODE;
    } else {
      // Return false if the response status is not OK
      return false;
    }
  } catch (error) {
    // Return false if an error occurs during the request
    return false;
  }
}

// Function to check if TikTok is connected
export async function checkTikTokIsConnected() {
  try {
    // Send a GET request to inquire about TikTok link status
    const response = await fetch('/fapi/inquiry_tt_link_status', {
      method: 'GET',
    });

    // Check if the response is OK (status code 200)
    if (response.ok) {
      // Parse the response as JSON
      const data: IResponse = await response.json();
      
      // Check if the status in the response matches the success code
      return data.status === SUCCESS_CODE;
    } else {
      // Return false if the response status is not OK
      return false;
    }
  } catch (error) {
    // Return false if an error occurs during the request
    return false;
  }
}

// Function to check if Pinterest is connected
export async function checkPinterestIsConnected() {
  try {
    // Send a GET request to inquire about Pinterest link status
    const response = await fetch('/fapi/inquiry_pt_link_status', {
      method: 'GET',
    });

    // Check if the response is OK (status code 200)
    if (response.ok) {
      // Parse the response as JSON
      const data: IResponse = await response.json();
      
      // Check if the status in the response matches the success code
      return data.status === SUCCESS_CODE;
    } else {
      // Return false if the response status is not OK
      return false;
    }
  } catch (error) {
    // Return false if an error occurs during the request
    return false;
  }
}