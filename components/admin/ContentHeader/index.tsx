import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




const ContentHeader = () => {
  return (
    <div className='flex justify-between items-center px-8 h-[64px] bg-[#1B1C21] border-b border-b-[#3A3A3A]'>
      <div className='w-[260px]'>
        <Link href={'/home'}>
          <Image className='ml-8' src={'/images/sidebar/logo.svg'} width={132} height={28} alt='logo' />
        </Link>
      </div>
      <div className='flex justify-between items-center flex-1'>
        <div className='text-primary-gray text-base'>Home</div>
        <div className='cursor-pointer'>
          <Image src={'/images/admin/avatar.svg'} width={32} height={32} alt='user avatar' />
        </div>
      </div>
    </div>
  )
}

export default ContentHeader
