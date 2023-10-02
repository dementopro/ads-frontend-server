// import Sidebar from '@/app/generate/imageToImage/Sidebar'
// import { UploadImageWithCtx } from '@/app/generate/imageToImage/UploadImage'
import { WithContext } from '@/app/generate/imageToImage/WithContext'
import ReactGATag from '@/components/ReactGATag'
import AdminLayout from '@/layout/admin'
import { getPretrainBackgroundList, getPretrainFaceList, getPretrainStyleList } from '@/lib/generate'
import React from 'react'


export const metadata = {
  title: 'Image to Image - AdsGency AI',
}


const ImageToImagePage = async () => {

  const [faceList, backgroundList, styleList] = await Promise.all([
    getPretrainFaceList(),
    getPretrainBackgroundList(),
    getPretrainStyleList(),
  ]);


  return (
    <AdminLayout>
      <ReactGATag fieldObject={{
        hitType: "pageview",
        page: "/generate/imageToImage",
        title: metadata.title
      }} />
      <section className='flex justify-between h-full mx-[-32px]'>
        <WithContext
          faceList={faceList}
          backgroundList={backgroundList}
          styleList={styleList}
        />
      </section>
    </AdminLayout>
  )
}

export default ImageToImagePage
