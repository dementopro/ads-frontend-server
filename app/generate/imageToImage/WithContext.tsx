'use client'
import Sidebar from '@/app/generate/imageToImage/Sidebar'
import UploadImage from '@/app/generate/imageToImage/UploadImage'
import { GeneImageProvider } from '@/context/generate'
import { NewImage, PretrainItem } from '@/types/generate'
import React from 'react'


type Props = {
  faceList: PretrainItem[]
  backgroundList: PretrainItem[]
  styleList: PretrainItem[]
}

export const WithContext = (props: Props) => {
  return (
    <GeneImageProvider>
      <div className='h-full flex-1 flex flex-col pl-8 overflow-auto'>
        {/* <h1 className='text-white font-medium text-2xl mb-6'>
            Image to Image
          </h1> */}
        <div className='flex flex-col pr-8'>
          <UploadImage {...props} />
        </div>
      </div>
      <Sidebar />
    </GeneImageProvider>
  )
}
