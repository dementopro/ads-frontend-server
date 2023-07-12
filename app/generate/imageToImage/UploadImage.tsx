'use client'
import CropImage from '@/app/generate/imageToImage/CropImage'
import ProcessStep from '@/app/generate/imageToImage/ProcessStep'
import Image from 'next/image'
import React, { ChangeEvent, DragEvent, useState } from 'react'

const UploadImage = () => {

  const [originalImage, setOriginalImage] = useState<File | null>(null)
  const [croppedImage, setCroppedImage] = useState<File | null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [rightImage, setRightImage] = useState<string | null>(null)
  const [step, setStep] = useState(0)
  const [isCrop, setIsCrop] = useState(false)
  const [showCrop, setShowCrop] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file?.type === 'image/gif') {
        alert('Gif format is not supported')
        return
      }
      // Size not more than 10MB
      if (file?.size > 10 * 1024 * 1024) {
        alert('Size not more than 10MB')
        return
      }
      setOriginalImage(file)
      setCroppedImage(file)
      const imageUrl = URL.createObjectURL(file)
      const rightImageUrl = URL.createObjectURL(file)
      setImage(imageUrl)
      setRightImage(rightImageUrl)
      setStep(1)
    }
  }

  function handleDrag(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  return (
    <>
      <div className='flex flex-wrap gap-12'>
        <div className='flex flex-1 flex-col items-center gap-4 max-w-[400px] min-w-[400px]'>
          <div
            onDrag={handleDrag}
            className={`rounded-lg bg-[#1B1C21] border-[1.5px] border-dashed w-full h-[400px] flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer 
            ${!!image ? 'border-transparent' : 'border-primary-purple'}`}
          >
            {
              image
                ?
                <Image alt='uploaded image' width={400} height={400} src={image} className='h-[400px] object-cover' />
                :
                <>
                  <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-white/10 z-1 hidden group-hover:flex' />
                  <div className='flex flex-col items-center justify-center'>
                    <Image alt='upload' width={44} height={44} src={'/images/admin/upload-image.svg'} />
                    <div className='text-primary-purple mt-1'>
                      Click to upload
                    </div>
                    <p className='text-primary-gray text-center font-medium w-[296px] mt-2'>
                      Or drag and drop image files directly into this area
                    </p>
                    <p className='text-[#878A92] text-center text-xs w-[302px] mt-9'>
                      Size not more than 10MB, aspect ratio less than 2, format does not support gif format
                    </p>
                  </div>
                </>
            }
            <input type='file' accept='image/*' className='absolute top-0 left-0 right-0 bottom-0 w-full h-full z-2 opacity-0 cursor-pointer' onChange={handleChange} />
          </div>
          <div className='text-primary-gray'>Original image</div>
        </div>
        <div className='flex flex-1 flex-col items-center gap-4 max-w-[400px] min-w-[400px]'>
          <div
            onClick={() => {
              if (step === 0) {
                return
              }
              setStep(2)
              setIsCrop(true)
              setShowCrop(true)
            }}
            className='rounded-lg bg-[#1B1C21] w-full h-[400px] overflow-hidden relative group'>
            {
              rightImage &&
              <>
                <Image alt='image' width={400} height={400} src={rightImage} className='h-[400px] object-cover' />
                <div className={`cursor-pointer w-full h-full absolute right-0 top-0 left-0 bottom-0  group-hover:flex flex-col items-center justify-center bg-black/60 border-2  border-primary-purple rounded-lg ${!isCrop ? 'flex' : 'hidden'}`}>
                  <Image alt='upload' width={44} height={44} src={'/images/admin/image-ai.svg'} />
                  <div className='text-primary-purple mt-1'>
                    Choose inpainting areas
                  </div>
                  <p className='text-primary-gray text-center font-medium w-[296px] mt-2'>
                    Please click to select the areas you wish to keep unchanged.
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
      </div>
      <ProcessStep step={step} />
      {
        rightImage && showCrop &&
        <CropImage setShowCrop={setShowCrop} image={rightImage} />
      }
    </>
  )
}

export default UploadImage
