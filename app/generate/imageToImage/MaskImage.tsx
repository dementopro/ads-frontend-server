import { GeneImageContext } from '@/context/generate'
import Image from 'next/image'
import React, { useContext } from 'react'

const MaskImage = () => {

  const {
    updateShowCrop,
    isCrop,
    cropImage,
    originalImageUrl
  } = useContext(GeneImageContext)

  function handleCrop() {
    if (originalImageUrl) {
      updateShowCrop(true)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center gap-4 w-[340px]'>
        <div
          onClick={() => handleCrop()}
          className='rounded-lg bg-[#1B1C21] w-full h-[340px] overflow-hidden relative group'>
          {
            cropImage &&
            <>
              <Image alt='image' fill src={cropImage} className='h-full w-full object-contain' />
              <div className={`cursor-pointer w-full h-full absolute right-0 top-0 left-0 bottom-0  group-hover:flex flex-col items-center justify-center bg-black/60 border-2  border-primary-purple rounded-lg ${!isCrop ? 'flex' : 'hidden'}`}>
                <Image alt='upload' width={44} height={44} src={'/images/admin/image-ai.svg'} />
                <div className='text-primary-purple mt-1'>
                  Choose inpainting areas
                </div>
                <p className='text-primary-gray text-center font-medium w-[296px] mt-2'>
                  Please click to select the areas you wish to change.
                </p>
                <p className='text-[#878A92] text-center text-xs w-[302px] mt-9'>
                  Size not more than 10MB, aspect ratio less than 2, format does not support gif format
                </p>
              </div>
            </>
          }
        </div>
        <div className='text-primary-gray'>Select area</div>
      </div>
    </>
  )
}

export default MaskImage
