import HistoricalGenerations from '@/app/generate/textToImage/HistoricalGenerations'
import AdminLayout from '@/layout/admin'
import React from 'react'
import ImageGenerate from '@/app/generate/textToImage/ImageGenerate'
import ReactGATag from '@/components/ReactGATag'

export const metadata = {
  title: 'Text to Image - AdsGency AI',
}


const TextToImagePage = () => {
  return (
    <AdminLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: "/generate/textToImage",
          title: metadata.title
        }}
      />
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
