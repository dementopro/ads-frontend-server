'use client'
import { Icon } from '@iconify/react'
import { message } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  text: string
  icon: string
  href?: string
}

const Card = ({ text, icon, href }: Props) => {

  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage()

  function handleClick() {
    if (href) {
      router.push(href)
    } else {
      messageApi.warning('This feature is coming soon.')
    }
  }

  return (
    <button onClick={handleClick} className='flex items-center justify-center gap-4 border hover:border-[#7D55FA] bg-[#35363A] hover:bg-[#383454] border-[#525252] w-[260px] max-sm:w-full h-[80px] rounded-lg text-white text-base cursor-pointer font-medium'>
      <Image src={icon} width={32} height={32} className='overflow-hidden' alt='icon' />
      <span>{text}</span>
      {!href && <Icon icon='mdi:lock' width={20} className='text-[#7D55FA]' />}
      {contextHolder}
    </button>
  )
}

const cards = [
  {
    text: 'Strategy Planning',
    icon: '/images/admin/home/icon1.png',
    href: '/planning'
  },
  {
    text: 'Content Creation',
    icon: '/images/admin/home/icon2.png',
    href: '/generate/textToImage'
  },
  {
    text: 'Social Analytics',
    icon: '/images/admin/home/icon3.png',
    href: '/socialInsights'
  },
  {
    text: 'Ads Managment',
    icon: '/images/admin/home/icon4.png'
  }
]


const CardItems = () => {
  return (
    <div className='flex flex-wrap items-center gap-5'>
      {
        cards.map((card, index) => (
          <Card {...card} key={card.text} />
        ))
      }
    </div>
  )
}

export default CardItems
