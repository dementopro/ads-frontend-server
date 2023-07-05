'use client'
import Menu from '@/components/admin/sidebar/Menu'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AdminSidebar = () => {

  return (
    <aside className='bg-[#1B1C21] border-r border-r-[#3A3A3A] w-[260px] h-full flex flex-col items-center justify-between pt-4 pb-7'>
      <div className='flex flex-col w-full'>
        <Link href={'/home'}>
          <Image className='mt-2 mb-6 ml-8' src={'/images/sidebar/logo.svg'} width={132} height={28} alt='logo' />
        </Link>
        <Menu />
      </div>
      <div className='flex flex-col items-center justify-center gap-3'>
        <div className='text-xs text-[#F6F6F6]'>Made with 💜 in San Francisco</div>
      </div>
    </aside>
  )
}

export default AdminSidebar
