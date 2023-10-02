// Import statements
import React from 'react';
import Empty from '@/components/Empty';
import SavedItem from '@/app/generate/productDescription/SavedItem';
import { headers } from 'next/headers';
import { SUCCESS_CODE } from '@/data/constant';
import { IGeneText, IGeneTextForm, IGeneTextResp } from '@/types/generate';

// Function to fetch the list of saved copies
async function getCopyList(mode: IGeneTextForm['mode'] = 'description') {
  const cookie = headers().get('cookie') || '';
  const response = await fetch(`${process.env.API_BASE_URL}/inquiry_text_api`, {
    method: 'POST',
    headers: {
      cookie,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ mode })
  });
  if (!response.ok) {
    // Handle the case where fetching data fails
    console.log('error', response);
    return [];
  }
  const data: IGeneTextResp = await response.json();
  if (data.status === SUCCESS_CODE) {
    return data.data;
  } else {
    // Handle the case where the response status is not successful
    console.log('data', data);
    return [];
  }
}

// SavedCopy component
const SavedCopy = async ({ mode }: { mode?: IGeneTextForm['mode'] }) => {
  // Fetch the list of saved copies
  const copyList = await getCopyList(mode ?? 'description');

  return (
    <>
      {/* Display the number of saved copies */}
      <h2 className='text-white font-medium text-xl my-6'>
        Saved copy({copyList.length})
      </h2>
      <div className='flex flex-wrap gap-5'>
        {
          // Check if there are no saved copies
          !copyList.length
            ?
            // Display an empty state
            <Empty />
            :
            // Map and render each saved copy
            copyList.map((item, index) => (
              <SavedItem key={index} item={item} />
            ))
        }
      </div>
    </>
  );
}

export default SavedCopy;