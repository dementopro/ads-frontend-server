'use client'
import Breadcrumb from '@/components/Breadcrumb'
import { SUCCESS_CODE } from '@/data/constant'
import { message } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const ContentHeader = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const router = useRouter()

  async function onLogout() {
    // 清除本地cookie
    try {
      const res = await fetch(`/api/auth/logout`)
      if (res.ok) {
        const data = await res.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Logout success')
          setTimeout(() => {
            router.push('/login')
          }, 1000)
        } else {
          messageApi.error('Logout failed')
        }
      } else {
        messageApi.error('Logout failed')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      {contextHolder}
      <div className='flex justify-between items-center px-8 h-[64px] bg-[#1B1C21] border-b border-b-[#3A3A3A]'>
        <div className='w-[260px]'>
          <Link href={'/home'}>
            <Image src={'/images/sidebar/logo.svg'} width={132} height={28} alt='logo' />
          </Link>
        </div>
        <div className='flex justify-between items-center flex-1'>
          <Breadcrumb />
          <button onClick={onLogout} className='cursor-pointer'>
            <Image src={'/images/admin/avatar.svg'} width={32} height={32} alt='user avatar' />
          </button>
        </div>
      </div>
    </>
  )
}

export default ContentHeader
