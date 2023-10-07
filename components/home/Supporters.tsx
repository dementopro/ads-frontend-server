'use client'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Supporters = () => {
  return (
    <div className='w-full my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center gap-[32px] inline-flex">
        <div className="text-white ipad:text-[20px] desktop:text-[24px] font-bold font-poppins leading-normal">
          Check out our Supporters
        </div>
        <Slider arrows={false} variableWidth autoplay={true} pauseOnHover={false} autoplaySpeed={0} speed={8000} cssEase='linear' centerMode swipeToSlide={false}>
          <Link href="https://aws.amazon.com/startups/accelerators">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/aws.svg" />
          </Link>
          <Link href="https://www.futurepedia.io/tool/adsgency-ai">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/futurepedia.svg" />
          </Link>
          <Link href="https://startup.google.com/">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/google.svg" />
          </Link>
          <Link href="https://www.nvidia.com/en-us/startups/">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/nvidia.svg" />
          </Link>
          <Link href="https://www.producthunt.com/products/adsgency-ai-beta">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/product-hunt.svg" />
          </Link>
          <Link href="https://www.joinsuperhuman.ai/p/metas-new-ai-model-brings-sketches-life">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/superhuman.svg" />
          </Link>
          <Link href="https://www.theinformation.com/articles/inside-apples-decision-to-blow-up-the-digital-ads-business">
            <img className="h-[60px] w-auto px-[50px] object-cover rounded" src="images/home/pr-logos/information.svg" />
          </Link>
        </Slider>
      </div>
    </div>
  )
}

export default Supporters
