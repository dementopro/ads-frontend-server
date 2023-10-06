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
    <div className='w-full my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center gap-[60px] inline-flex">
        <div className="text-white text-2xl font-bold font-poppins leading-normal">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Enabling our Customer's Growth
        </div>
        <Slider arrows={false} variableWidth autoplay={true} pauseOnHover={false} autoplaySpeed={0} speed={8000} cssEase='linear' centerMode swipeToSlide={false}>
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/digitz.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/enigma.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/fullstockwoo.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/home-for-good.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/marketkarma.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/media-mint.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/relevant.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/ruul.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/customer-logos/sandhills.svg" />
        </Slider>
      </div>
    </div>
  )
}

export default Growth
