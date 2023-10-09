'use client'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Growth = () => {
  return (
    <div className='w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center android:gap-[30px] ipadmini:gap-[40px] ipad:gap-[50px] desktop:gap-[60px] inline-flex">
        <div className="text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[20px] desktop:text-[24px] font-bold font-Poppins leading-normal">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Enabling our Customer's Growth
        </div>
        <Slider arrows={false} variableWidth autoplay={true} pauseOnHover={true} autoplaySpeed={0} speed={8000} cssEase='linear' centerMode swipeToSlide={false}>
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/digitz.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/enigma.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/fullstockwoo.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/home-for-good.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/marketkarma.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/media-mint.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/relevant.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/ruul.svg" />
          <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/customer-logos/sandhills.svg" />
        </Slider>
      </div>
    </div>
  )
}

export default Growth
