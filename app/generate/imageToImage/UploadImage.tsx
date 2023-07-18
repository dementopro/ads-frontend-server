'use client'
import CropImage from '@/app/generate/imageToImage/CropImage'
import GeneResult from '@/app/generate/imageToImage/GeneResult'
import MaskImage from '@/app/generate/imageToImage/MaskImage'
import OriginImageUpload from '@/app/generate/imageToImage/OriginImageUpload'
import PreTrainedPick from '@/app/generate/imageToImage/PreTrainedPick'
import Topbar from '@/app/generate/imageToImage/Topbar'
import { GeneImageContext } from '@/context/generate'
import { PretrainItem } from '@/types/generate'
import React, { useContext, useEffect } from 'react'


type Props = {
  faceList: PretrainItem[]
  backgroundList: PretrainItem[]
  styleList: PretrainItem[]
}

const UploadImage = ({ faceList, backgroundList, styleList }: Props) => {

  const {
    updatePretrainList, showCrop,
    isGenerating,
    generatedImage,
  } = useContext(GeneImageContext)

  useEffect(() => {
    updatePretrainList({
      faceList,
      backgroundList,
      styleList,
    })
  }, [faceList, backgroundList, styleList])


  return (
    <>
      {
        !generatedImage ? (
          <>
            <Topbar />
            <div className='flex flex-wrap gap-12'>
              <OriginImageUpload />
              <MaskImage />
            </div>
            {showCrop && <CropImage />}
            <PreTrainedPick />
          </>
        ) : <GeneResult />
      }
      {
        isGenerating && (
          <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='flex flex-col items-center'>
              <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-purple' />
              <span className='text-white mt-4'>Generating...</span>
            </div>
          </div>
        )
      }
    </>
  )
}

export default UploadImage
