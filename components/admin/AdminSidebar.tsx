'use client'
import Menu from '@/components/admin/sidebar/Menu'
import { useRouter } from 'next/navigation'
import React from 'react'

const AdminSidebar = () => {

  const router = useRouter()

  function toPricing() {
    router.push('/pricing')
  }

  return (
    <aside className='max-lg:hidden bg-[#1B1C21] border-r border-r-[#3A3A3A] w-[260px] h-full flex flex-col items-center justify-between pt-4 pb-7'>
      <div className='flex flex-col w-full'>
        <Menu />
      </div>
      <div className='flex flex-col items-center justify-center gap-6'>
        <button onClick={toPricing} className='cursor-pointer hover:border-primary-purple hover:text-primary-purple hover:opacity-80 text-primary-gray w-full border-2 border-dashed border-primary-gray flex items-center justify-center rounded-lg py-[6px]'>Pricing</button>
        <div className='text-xs text-[#F6F6F6]'>Made with 💜 in San Francisco</div>
      </div>
    </aside>
  )
}

export default AdminSidebar
