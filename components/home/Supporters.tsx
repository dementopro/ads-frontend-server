'use client'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Supporters = () => {
  return (
    <div className='w-full py-[100px] bg-black'>
      <div className="w-full flex-col justify-center items-center gap-[60px] inline-flex">
        <div className="text-white text-2xl font-bold font-poppins leading-normal">
          Check out our Supporters
        </div>
        <Slider arrows={false} variableWidth autoplay={true} pauseOnHover={false} autoplaySpeed={0} speed={5000} cssEase='linear' centerMode swipeToSlide={false}>
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/aws.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/futurepedia.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/google.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/nvidia.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/product-hunt.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/superhuman.svg" />
          <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/information.svg" />
        </Slider>
      </div>
    </div>
  )
}

export default Supporters
