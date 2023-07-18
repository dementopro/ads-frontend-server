import Empty from '@/components/Empty'
import { SUCCESS_CODE } from '@/data/constant'
import { IGeneImage, IGeneImageHistory } from '@/types/generate'
import { headers } from 'next/headers'
import Image from 'next/image'
import React from 'react'


async function getImageList(): Promise<IGeneImage[]> {
  const cookie = headers().get('cookie') || ''
  const res = await fetch(`${process.env.API_BASE_URL}/get_image_list_api`, {
    method: 'GET',
    headers: {
      cookie
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: IGeneImageHistory = await res.json()
  if (data.status === SUCCESS_CODE) {
    const filePath = data.file_path
    const imageList = data.image_list.map((image) => ({
      ...image,
      filename: `${process.env.NEXT_PUBLIC_IMG_URL}${filePath}/${image.filename}`
    }))
    return imageList
  } else {
    console.log('data', data)
    return []
  }
}


const HistoricalGenerations = async () => {

  const imageList = await getImageList()

  return (
    <>
      <h2 className='text-white font-medium text-xl my-6'>
        Historical Generations({imageList.length})
      </h2>
      <div className='flex flex-wrap gap-5'>
        {
          !imageList.length
            ? <Empty />
            : imageList.map((image, index) => (
              <div key={index} className='flex max-w-[260px] gap-3 flex-col p-4 bg-[#1E1F22] rounded-lg border border-[#3A3A3A]'>
                <Image src={image.filename} alt='generate image' width={228} height={228} />
                <div title={image.prompt} className='text-base line-clamp-1'>{image.prompt}</div>
                <div title={image.description} className='text-xs text-primary-gray line-clamp-2'>{image.description}</div>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default HistoricalGenerations
