import ImageSegmentationCanvas from '@/app/generate/imageToImage/ImageSegmentationCanvas'
import { GeneImageContext } from '@/context/generate'
import Image from 'next/image'
import React, { MouseEvent, useContext } from 'react'


const CropImage = () => {

  const {
    updateShowCrop,
    cropImage,
    updateIsCrop,
    updatePreTrainStep,
    updatePreTrainedOption,
    updateLabel,
    img_seg
  } = useContext(GeneImageContext)

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      updateShowCrop(false)
    }
  }

  function onConfrom() {
    updateIsCrop(true)
    updateShowCrop(false)
    updatePreTrainStep('background')
    updatePreTrainedOption({
      image: cropImage || ''
    })
  }

  function onCancel() {
    updateShowCrop(false)
    updateLabel('Background')
  }

  function onReset() {
    updateLabel('Background')
  }

  return (
    <div className='z-50 fixed top-0 right-0 left-0 bottom-0 w-100vw h-full bg-black/80 flex items-center justify-center' onClick={handleClick}>
      <div className='flex flex-col items-center justify-center gap-12'>
        <p className='text-2xl font-medium'>
          Click on all areas in the image that you want to change.
        </p>
        <div className='rounded-md overflow-hidden relative w-[510px] h-[510px]'>
          {
            cropImage && img_seg.length > 0 &&
            <ImageSegmentationCanvas imgSrc={cropImage} imgSegmentation={img_seg} />
          }
        </div>
        <div className='h-[66px] flex items-center justify-center bg-[#23252B] rounded-lg text-2xl'>
          <button onClick={onReset} className='h-full px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={22} height={30} src={'/images/admin/reset.svg'} alt='reset' />
            <span>Reset</span>
          </button>
          <span className='text-[#484848] flex items-center w-[1px] h-[34px]'>|</span>
          <button onClick={onCancel} className='px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={28} height={28} src={'/images/admin/cancel.svg'} alt='cancel' />
            <span>Cancel</span>
          </button>
          <span className='text-[#484848] flex items-center w-[1px] h-[34px]'>|</span>
          {/* <button className='px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={28} height={28} src={'/images/admin/pen.svg'} alt='pen' />
            <span>Pen</span>
          </button> */}
          <span className='text-[#484848] flex items-center w-[1px] h-[34px]'>|</span>
          <button onClick={onConfrom} className='px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={28} height={28} src={'/images/admin/confirm.svg'} alt='confirm' />
            <span>Confirm</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CropImage
