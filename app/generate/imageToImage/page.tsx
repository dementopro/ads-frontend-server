// import Sidebar from '@/app/generate/imageToImage/Sidebar'
// import { UploadImageWithCtx } from '@/app/generate/imageToImage/UploadImage'
import { WithContext } from '@/app/generate/imageToImage/WithContext'
import AdminLayout from '@/layout/admin'
import { getGenerateImageHistoryList, getPretrainBackgroundList, getPretrainFaceList, getPretrainStyleList } from '@/lib/generate'
import React from 'react'

import ReactGA from "react-ga4"

export const metadata = {
  title: 'Image to Image - AdsGency AI',
}

ReactGA.initialize("G-NQ34MWCQDB");
ReactGA.send({ hitType: "pageview", page: "/generate/imageToImage", title: metadata.title });

const ImageToImagePage = async () => {

  const faceList = await getPretrainFaceList()
  const backgroundList = await getPretrainBackgroundList()
  const styleList = await getPretrainStyleList()
  const historyList = await getGenerateImageHistoryList()

  console.log('historyList', historyList)


  return (
    <AdminLayout>
      <section className='flex justify-between h-full mx-[-32px]'>
        <WithContext
          faceList={faceList}
          backgroundList={backgroundList}
          styleList={styleList}
          historyList={historyList}
        />
      </section>
    </AdminLayout>
  )
}

export default ImageToImagePage
