'use client'
import React from 'react'
import { growthLogos } from '@/data/growthLogos';
import Marquee from "react-fast-marquee";


const Growth = () => {
  return (
    <div className='w-full android:my-[32px] ipad:my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center android:gap-[30px] ipadmini:gap-[40px] ipad:gap-[50px] desktop:gap-[60px] inline-flex">
        <div className="w-fit text-center android:text-[20px] ipadmini:text-[20px] ipad:text-[20px] desktop:text-[24px] font-normal font-poppins leading-normal bg-clip-text text-transparent" style={{ backgroundImage: "radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)" }}>
          <p className='text-transparent'>
            Trusted by Global Businesses
          </p>
        </div>
        <Marquee pauseOnHover={true} speed={10} autoFill={true} className="my-[50px]">
          {growthLogos.map((logo, index) => (
            <img key={index} className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src={`images/home/customer-logos/${logo.image}`} />
          ))}
        </Marquee>
        {/* <div className='grid grid-cols-12 max-w-[1240px]'>
          {growthLogos.map((logo, index) => (
            <div key={index} className='relative flex items-center justify-center p-8 border ipad:col-span-3 android:col-span-6 border-white/20'>
              <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src={`images/home/customer-logos/${logo.image}`} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Growth
