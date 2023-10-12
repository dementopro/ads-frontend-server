
import React from 'react'
import Empty from '@/components/Empty';
import SavedItem from '@/app/generate/productDescription/SavedItem';
import { headers } from 'next/headers';
import { SUCCESS_CODE } from '@/data/constant';
import { IGeneText, IGeneTextForm, IGeneTextResp } from '@/types/generate';

import axios from '@/lib/axios';

async function getCopyList(mode: IGeneTextForm['mode'] = 'description') {
  const cookie = headers().get('cookie') || ''
  const response = await axios({
    url: `${process.env.API_BASE_URL}/inquiry_text_api`,
    method: 'POST',
    headers: {
      cookie,
      'content-type': 'application/json',
    },
    data: JSON.stringify({ mode })
  })
  if (response.status !== 200) {
    // throw new Error('Failed to fetch data')
    console.log('error', response.data)
    return []
  }
  const data: IGeneTextResp = response.data
  if (data.status === SUCCESS_CODE) {
    return data.data
  } else {
    console.log('data', data)
    return []
  }
}


const SavedCopy = async ({ mode }: { mode?: IGeneTextForm['mode'] }) => {
  const copyList = await getCopyList(mode ?? 'description')

  return (
    <>

      <h2 className='text-white font-medium text-xl my-6'>
        Saved copy({copyList.length})
      </h2>
      <div className='flex flex-wrap gap-5'>
        {
          !copyList.length
            ?
            <Empty />
            :
            copyList.map((item, index) => (
              <SavedItem key={index} item={item} />
            ))
        }
      </div>
    </>
  )
}

export default SavedCopy
