import React from 'react'
import { ourSolutions } from '@/data/our-solutions'
import Image from 'next/image'

const OurSolutions = () => {
  return (
    <div className='px-[74px] flex flex-col w-full py-12 overflow-hidden'>
      <h3 className='text-3xl'>Our solutions</h3>
      <div className='w-full mx-auto my-8 flex flex-wrap gap-x-[22px] gap-y-[30px]'>
        {ourSolutions.map((item, index) => (
          <div key={item.title} className='border rounded-xl border-[#35363a] p-6 gap-[14px] flex flex-col w-[304px] h-[222px]'>
            <Image alt={item.title} width={20} height={20} src={`/images/home/solutions/${index + 1}.png`} />
            <div className='text-[#D9D9D9] text-xl font-semibold'>{item.title}</div>
            <p className='text-[#D9D9D9] text-base'>{item.description}</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default OurSolutions