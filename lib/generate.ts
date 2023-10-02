// Function to fetch a list of pretrain face data
export async function getPretrainFaceList() {
  // Get the user's cookie (if available)
  const cookie = headers().get('cookie') || '';
  
  // Make an API request to fetch pretrain face data
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_face`, {
    method: 'GET',
    headers: {
      cookie
    }
  });
  
  // Check if the API request was successful
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  // Parse the response data
  const data: IPretrainListResp = await response.json();
  
  // Check if the response data has a success status
  if (data.status === SUCCESS_CODE) {
    return data.data;
  } else {
    return [];
  }
}

// Function to fetch a list of pretrain background data
export async function getPretrainBackgroundList() {
  // Get the user's cookie (if available)
  const cookie = headers().get('cookie') || '';
  
  // Make an API request to fetch pretrain background data
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_background`, {
    method: 'GET',
    headers: {
      cookie
    }
  });
  
  // Check if the API request was successful
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  // Parse the response data
  const data: IPretrainListResp = await response.json();
  
  // Check if the response data has a success status
  if (data.status === SUCCESS_CODE) {
    return data.data;
  } else {
    return [];
  }
}

// Function to fetch a list of pretrain style data for generating images
export async function getPretrainStyleList(): Promise<PretrainItem[]> {
  // Get the user's cookie (if available)
  const cookie = headers().get('cookie') || '';
  
  // Make an API request to fetch pretrain style data
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_style`, {
    method: 'GET',
    headers: {
      cookie
    }
  });
  
  // Check if the API request was successful
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  // Parse the response data
  const data = await response.json();
  
  // Check if the response data has a success status
  if (data.status === SUCCESS_CODE) {
    // Map the response data to a specific structure
    return data.data.map((item: string) => {
      return {
        name: item,
        image_path: '',
        lora: '',
        prompt: ''
      }
    });
  } else {
    return [];
  }
}