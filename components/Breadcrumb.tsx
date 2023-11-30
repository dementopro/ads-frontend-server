'use client'
import { breadCrumbMap } from '@/data/constant'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
import React from 'react'
import chevronRight from '@iconify/icons-mdi/chevron-right'
import Link from 'next/link'

const Breadcrumb = () => {
  // Get the current pathname using the `usePathname` hook from Next.js
  const pathname: string | null = usePathname();

  return (
    <div className='flex items-center text-primary-gray gap-0 android:gap-4 ipadmini:gap-6'>
      {/* Link to the home page */}
      <Link  href={'/home'} className='text-white hover:opacity-80'>
        Home
      </Link>
      {/* Generate breadcrumb items based on the current pathname */}
      {
        breadCrumbMap[pathname as string]?.map((item) => (
          <div key={item} className='flex items-center gap-0 android:gap-4 ipadmini:gap-6'>
            {/* Chevron icon */}
            <Icon icon={chevronRight} />
            {/* Breadcrumb item text */}
            <span>{item}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Breadcrumb
