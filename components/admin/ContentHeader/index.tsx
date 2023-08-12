'use client'
import Breadcrumb from '@/components/Breadcrumb'
import DropDown from '@/components/admin/header/DropDown'
import { AccountContext } from '@/context/account'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'


const ContentHeader = () => {

  const { isLogin } = useContext(AccountContext)

  return (
    <>
      <div className='flex justify-between items-center px-8 h-[64px] bg-[#1B1C21] border-b border-b-[#3A3A3A]'>
        <div className='w-[260px]'>
          <Link href={'/home'}>
            <Image src={'/images/sidebar/logo.svg'} width={132} height={28} alt='logo' />
          </Link>
        </div>
        <div className='flex justify-between items-center flex-1'>
          <Breadcrumb />
          {isLogin && <DropDown />}
        </div>
      </div>
    </>
  )
}

export default ContentHeader
