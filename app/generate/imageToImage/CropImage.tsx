import Image from 'next/image'
import React, { MouseEvent } from 'react'

type Props = {
  image: string,
  setShowCrop: (showCrop: boolean) => void
}

const CropImage = ({ image, setShowCrop }: Props) => {

  function handleClick(e: MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      setShowCrop(false)
    }
  }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 w-100vw h-full bg-black/80 flex items-center justify-center' onClick={handleClick}>
      <div className='flex flex-col items-center justify-center gap-12'>
        <p className='text-2xl font-medium'>
          Click on all areas in the image that you want to keep unchanged.
        </p>
        <div className='rounded-md overflow-hidden'>
          <Image src={image} alt='image' width={510} height={510} />
        </div>
        <div className='h-[66px] flex items-center justify-center bg-[#23252B] rounded-lg text-2xl'>
          <button className='h-full px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={22} height={30} src={'/images/admin/reset.svg'} alt='reset' />
            <span>Reset</span>
          </button>
          <span className='text-[#484848] flex items-center w-[1px] h-[34px]'>|</span>
          <button className='px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={28} height={28} src={'/images/admin/cancel.svg'} alt='cancel' />
            <span>Cancel</span>
          </button>
          <span className='text-[#484848] flex items-center w-[1px] h-[34px]'>|</span>
          <button className='px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={28} height={28} src={'/images/admin/pen.svg'} alt='pen' />
            <span>Pen</span>
          </button>
          <span className='text-[#484848] flex items-center w-[1px] h-[34px]'>|</span>
          <button className='px-4 bg-transparent text-white font-medium hover:opacity-80 flex items-center justify-center gap-4'>
            <Image width={28} height={28} src={'/images/admin/confirm.svg'} alt='confirm' />
            <span>Confirm</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CropImage
