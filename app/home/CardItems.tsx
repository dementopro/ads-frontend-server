import Image from 'next/image'
import React from 'react'

type Props = {
  text: string
  icon: string
}

const Card = ({ text, icon }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-5 border shadow border-[#D9D9D9] border-2px w-[222px] h-[154px] rounded-lg text-[#3A3A3A] text-[18px] cursor-pointer font-medium'>
      <Image src={icon} width={46} height={40} className='overflow-hidden' alt='icon' />
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
    <div className='flex items-center justify-center gap-10'>
      {
        cards.map((card, index) => (
          <Card text={card.text} icon={card.icon} key={index} />
        ))
      }
    </div>
  )
}

export default CardItems
