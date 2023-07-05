import Image from 'next/image'
import React from 'react'




const ContentHeader = () => {
  return (
    <div className='fixed right-0 left-0 lg:left-[260px] top-0 flex justify-between items-center px-8 h-[64px] bg-inherit z-[9999]'>
      <div className='text-primary-gray text-base'>Home</div>
      <div className='cursor-pointer'>
        <Image src={'/images/admin/avatar.svg'} width={32} height={32} alt='user avatar' />
      </div>
    </div>
  )
}

export default ContentHeader
