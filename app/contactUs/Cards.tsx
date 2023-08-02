'use client'
import { Icon } from '@iconify/react'


type CardProps = {
  title: string
  description: string
  icon: React.ReactNode
}

const Card = ({ title, description, icon }: CardProps) => {

  return (
    <div className="flex flex-col items-center justify-center w-[268px] h-[233px] bg-[#27282F] rounded-lg border border-primary-purple text-white">
      {icon}
      <h1 className="text-[18px] font-bold mt-5">{title}</h1>
      <p className="text-center text-xs">{description}</p>
      <a
        href="mailto:contactus@adsgency.ai"
        className='mt-6 w-[120px] justify-center h-[40px] flex items-center cursor-pointer hover:opacity-80 bg-primary-purple rounded-lg text-base truncate'>
        Contact
      </a>
    </div>
  )
}

const Cards = () => {
  return (
    <>
      <div className='mt-4 sm:mt-[60px] flex max-sm:flex-col justify-center items-center gap-x-[100px] gap-y-6'>
        <Card
          title="Talk to our sales team"
          description="Book a meeting with our sales"
          icon={<Icon icon="mdi:deal-outline" width={48} height={48} />}
        />
        <Card
          title="Help & Support"
          description="Book a meeting with us"
          icon={<Icon icon="mdi:human-greeting" width={48} height={48} />}
        />
      </div>
    </>
  )
}

export default Cards
