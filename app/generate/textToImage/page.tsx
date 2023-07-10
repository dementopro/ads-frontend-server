import HistoricalGenerations from '@/app/generate/textToImage/HistoricalGenerations'
import AdminLayout from '@/layout/admin'
import React from 'react'
import ImageGenerate from '@/app/generate/textToImage/ImageGenerate'


const TextToImagePage = () => {
  return (
    <AdminLayout>
      <section className='flex flex-col justify-center'>
        <h1 className='text-white font-medium text-2xl mb-6'>
          Text to Image
        </h1>
        <ImageGenerate />
        <HistoricalGenerations />
      </section>
    </AdminLayout>
  )
}

export default TextToImagePage
