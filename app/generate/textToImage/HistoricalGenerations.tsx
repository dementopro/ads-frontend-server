'use client'
import { SUCCESS_CODE } from '@/data/constant'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


async function getImageList() {
  const res = await fetch(`/api/generate/textToImage/list`, {
    method: 'GET',
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  if (data.status === SUCCESS_CODE) {
    return data.image_list as any[]
  } else {
    console.log('data', data)
    return []
  }
}


const HistoricalGenerations = () => {
  const [imageList, setImageList] = useState<any[]>([])
  useEffect(() => {
    getImageList().then((res) => {
      setImageList(res)
    })
  }, [])


  return (
    <>
      <h2 className='text-white font-medium text-xl my-6'>
        Historical Generations({imageList.length})
      </h2>
      <div className='flex flex-wrap gap-5 mb-8'>
        {
          !imageList.length
            ? <div className='w-full flex items-center justify-center'>
              <span className='text-primary-gray'>No content has been generated yet</span>
            </div>
            : imageList.map((image, index) => (
              <div key={index} className='flex gap-3 flex-col p-4 bg-[#1E1F22] rounded-lg border border-[#3A3A3A]'>
                <Image src={image} alt='generate image' width={228} height={228} />
                <div className='text-base'>Travel product</div>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default HistoricalGenerations
