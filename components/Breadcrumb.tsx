'use client'
import { breadCrumbMap } from '@/data/constant'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import chevronRight from '@iconify/icons-mdi/chevron-right'
import Link from 'next/link'

const Breadcrumb = () => {

  const pathname = usePathname()
  return (
    <div className='flex items-center text-primary-gray gap-6'>
      <Link href={'/home'} className='text-white hover:opacity-80'>
        Home
      </Link>
      {
        breadCrumbMap[pathname]?.map((item) => (
          <div key={item} className='flex items-center gap-6'>
            <Icon icon={chevronRight} />
            <span>{item}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Breadcrumb
