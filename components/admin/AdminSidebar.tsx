'use client'
import Menu from '@/components/admin/sidebar/Menu'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import logoutIcon from '@iconify/icons-mdi/logout'
import { useRouter } from 'next/navigation'

const AdminSidebar = () => {
  const router = useRouter()

  return (
    <aside className='bg-[#282828] w-[260px] h-full flex flex-col justify-between px-4 py-2'>
      <Menu />
      <div className='flex flex-col items-center justify-center gap-3'>
        <Image src={'/images/ad.png'} width={218} height={98} alt='ad' className='object-contain rounded' />
        <button
          onClick={() => router.push('/')}
          className={`flex w-full items-center rounded-lg bg-transparent hover:bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-white py-2 px-4`}
        >
          <Icon icon={logoutIcon} className="mr-2" />
          log out
        </button>
        <div className='text-[12px] text-[#F6F6F6]'>Made with 💜 in San Francisco</div>
      </div>
    </aside>
  )
}

export default AdminSidebar
