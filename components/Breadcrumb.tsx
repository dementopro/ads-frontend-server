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
        breadCrumbMap[pathname].map((item, index) => (
          <>
            <Icon icon={chevronRight} />
            <span key={`${pathname}-${item}-${index}`}>
              {item}
            </span>
          </>
        ))
      }
    </div>
  )
}

export default Breadcrumb
