'use client'
import React from 'react'
import { growthLogos } from '@/data/growth-logos';
import Marquee from "react-fast-marquee";


const Growth = () => {
  return (
    <div className='w-full android:my-[32px] ipad:my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center android:gap-[30px] ipadmini:gap-[40px] ipad:gap-[50px] desktop:gap-[60px] inline-flex">
        <div className="w-full text-center text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[20px] desktop:text-[24px] font-bold font-poppins leading-normal">
          Enabling our Customer&apos;s Growth
        </div>
        <Marquee pauseOnHover={true} speed={10}>
          {growthLogos.map((logo, index) => (
            <img key={index} className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src={`images/home/customer-logos/${logo.image}`} />
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Growth
