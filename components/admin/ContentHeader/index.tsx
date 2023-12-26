// Import necessary dependencies and components
'use client'
import Breadcrumb from '@/components/Breadcrumb'
import DropDown from '@/components/admin/header/DropDown'
import { AccountContext } from '@/context/account'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, redirect } from 'next/navigation'
import React, { useContext } from 'react'

// Define the ContentHeader component
const ContentHeader = () => {
  // Access the 'isLogin' variable from the 'AccountContext'
  const { account } = useContext(AccountContext)

  return (
    <>
      <div id='admin-header' className='flex justify-between items-center px-4 android:px-8 h-[64px] bg-[#1B1C21] border-b border-b-[#3A3A3A]'>
        <div className='w-[150px] android:w-[170px] ipadmini:w-[260px]'>
          {/* Create a link to the '/home' route with a logo */}
          <Link target="_blank"  href={'/home'}>
            <Image src={'/images/sidebar/logo.svg'} width={132} height={28} alt='logo' />
          </Link>
        </div>
        <div className='flex justify-between items-center flex-1' >
          {/* Render the Breadcrumb component */}
          <Breadcrumb />
          {/* Render the DropDown component if the user is logged in */}
          {account && <DropDown />}
        </div>
      </div>
    </>
  )
}

// Export the ContentHeader component
export default ContentHeader
