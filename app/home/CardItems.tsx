import Image from 'next/image'
import React from 'react'

type Props = {
  text: string
  icon: string
}

const Card = ({ text, icon }: Props) => {
  return (
    <div className='flex items-center justify-center gap-4 border hover:border-[#7D55FA] bg-[#35363A] hover:bg-[#383454] border-[#525252] w-[260px] h-[80px] rounded-lg text-white text-base cursor-pointer font-medium'>
      <Image src={icon} width={32} height={32} className='overflow-hidden' alt='icon' />
      {text}
    </div>
  )
}

const cards = [
  {
    text: 'Strategy Planning',
    icon: '/images/admin/home/icon1.png'
  },
  {
    text: 'Content Creation',
    icon: '/images/admin/home/icon2.png'
  },
  {
    text: 'Social Analytics',
    icon: '/images/admin/home/icon3.png'
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
          <Card text={card.text} icon={card.icon} key={index} />
        ))
      }
    </div>
  )
}

export default CardItems
