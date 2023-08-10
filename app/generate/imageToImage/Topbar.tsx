import { GeneImageContext } from '@/context/generate'
import Image from 'next/image'
import React, { useContext } from 'react'



const Topbar = () => {
  const {
    modeType,
    updateModeType,
  } = useContext(GeneImageContext)

  return (
    <div className='flex flex-wrap gap-2 justify-between items-center mb-4'>
      <div className='flex items-center gap-4'>
        <div className='text-xl'>Image to Image</div>
      </div>
      <div className='flex items-center justify-between border border-[#35363A] bg-[#1B1C21] p-[6px] rounded-lg'>
        <button onClick={() => updateModeType('portrait')} className={`py-1 px-4 flex items-center justify-between border gap-2 rounded-lg transition-all ${modeType === 'portrait' ? 'bg-[#35363A] border-primary-purple' : 'border-transparent'}`}>
          <Image src={modeType === 'portrait' ? '/images/admin/img2img/portrait-active.svg' : '/images/admin/img2img/portrait.svg'} alt='portrait' width={28} height={28} />
          <span>Portrait</span>
        </button>
        <button onClick={() => updateModeType('product')} className={`py-1 px-4 flex items-center justify-between border gap-2 rounded-lg transition-all ${modeType === 'product' ? 'bg-[#35363A] border-primary-purple' : 'border-transparent'}`}>
          <Image src={modeType === 'product' ? '/images/admin/img2img/product-active.svg' : '/images/admin/img2img/product.svg'} alt='product' width={28} height={28} />
          <span>Product</span>
        </button>
      </div>
    </div>
  )
}

export default Topbar
