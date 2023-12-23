'use client'
import React from 'react'
import Link from 'next/link';
import { supportersLogos } from '@/data/supportersLogos';
import Marquee from "react-fast-marquee";


const Supporters = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[32px] items-center justify-center'>
        <div className="w-fit text-center text-[24px] font-regular font-poppins bg-clip-text text-transparent" style={{ backgroundImage: "radial-gradient(70.71% 70.71% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.50) 84.77%)" }}>
          <p className='text-transparent'>
            Checkout our Supporters
          </p>
        </div>
        <Marquee pauseOnHover={true} speed={10} direction="right" autoFill={true}>
          {supportersLogos.map((logo, index) => (
            <Link key={index} target="_blank" href={logo.link}>
              <img className="android:h-[50px] ipad:h-[60px] w-auto android:px-[40px] ipad:px-[50px] object-cover rounded" src={`images/home/pr-logos/${logo.image}`} />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Supporters
