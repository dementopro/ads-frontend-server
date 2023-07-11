import UploadImage from '@/app/generate/imageToImage/UploadImage'
import AdminLayout from '@/layout/admin'
import React from 'react'

export const metadata = {
  title: 'Image to Image - AdsGency AI',
}

const ImageToImagePage = () => {
  return (
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Image to Image
        </h1>
        <UploadImage />
      </section>
    </AdminLayout>
  )
}

export default ImageToImagePage
