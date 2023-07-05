import Image from 'next/image'
import React from 'react'




const ContentHeader = () => {
  return (
    <div className='flex justify-between items-center px-8 h-[64px]'>
      <div className='text-primary-gray text-base'>Home</div>
      <div className='cursor-pointer'>
        <Image src={'/images/admin/avatar.svg'} width={32} height={32} alt='user avatar' />
      </div>
    </div>
  )
}

export default ContentHeader
