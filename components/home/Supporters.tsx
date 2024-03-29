'use client'
import React from 'react'
import Link from 'next/link';
import { supporters } from '@/data/Home/supporters';
import Marquee from "react-fast-marquee";


const Supporters = () => {
  return (
    <div className='w-full android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center gap-[32px] inline-flex">
        <div className="w-full text-center text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[20px] desktop:text-[24px] font-bold font-poppins leading-normal bg-clip-text text-transparent bg-gradient-radial from-white to-white/50">
          <p className='text-transparent'>
            Trusted by Global Industries
          </p>
        </div>
        <Marquee pauseOnHover={true} speed={10} direction="right" autoFill={true}>
          {supporters.map((logo, index) => (
            <Link key={index} target="_blank"  href={logo.link}>
              <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src={`${logo.image}`} />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Supporters
