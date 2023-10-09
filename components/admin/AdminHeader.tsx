'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';
import bellBadgeOutline from '@iconify/icons-mdi/bell-badge-outline';
import menuIcon from '@iconify/icons-mdi/menu';
import styles from './admin.module.css'
import Button from '@/components/Button'
import DropDown from '@/components/admin/header/DropDown';

const navItems = [
  {
    name: 'Generators',
    href: 'generators'
  },
  {
    name: 'Discover',
    href: 'discover'
  },
  {
    name: 'Education',
    href: 'education'
  },
  {
    name: 'Social Insights',
    href: 'social-insights'
  },
  {
    name: 'Pricing',
    href: 'pricing'
  }
]

const AdminHeader = () => {
  return (
    <header className={`${styles.header} h-[126px] w-full flex items-center pl-[33px] pr-[18px] justify-between`}>
      <div className='flex items-center'>
        <Icon icon={menuIcon} className='cursor-pointer w-[40px] h-[32px] mr-[10px]' />
        {/* TODO: change logo to svg */}
        <Link target="_blank"  href={'/'} className='hidden ipad:flex'>
          <Image src='/logo.png' alt='Logo' width={200} height={46} />
        </Link>
        <nav className='flex items-center gap-[20px] ipad:gap-[38px] ipad:ml-[28px]'>
          {
            navItems.map((item, index) => (
              <Link target="_blank"  href={item.href} key={index} className='text-[#3a3a3a] hover:text-[#D634FF] font-[400] text-base ipad:text-[20px] truncate'>{item.name}</Link>
            ))
          }
        </nav>
      </div>
      <div className='flex items-center gap-2 justify-self-end'>
        <Button btnStyle='h-[40px] w-[180px] ipad:w-[203px] text-base ipad:h-[46px]'>Create new project</Button>
        <Button btnStyle='h-[40px] w-[42px] ipad:w-[50px] ipad:h-[46px]'>
          <Icon icon={bellBadgeOutline} className='text-base ipad:text-[22px]' />
        </Button>
        <DropDown />
      </div>
    </header>
  )
}

export default AdminHeader
