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
    <div className='w-full android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] desktop:my-[60px] bg-black'>
      <div className="w-full flex-col justify-center items-center gap-[32px] inline-flex">
        <div className="text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[20px] desktop:text-[24px] font-bold font-Poppins leading-normal">
          Check out our Supporters
        </div>
        <Slider arrows={false} variableWidth autoplay={true} pauseOnHover={true} autoplaySpeed={0} speed={8000} cssEase='linear' centerMode swipeToSlide={false}>
          <Link target="_blank"  href="https://aws.amazon.com/startups/accelerators">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/aws.svg" />
          </Link>
          <Link target="_blank"  href="https://www.futurepedia.io/tool/adsgency-ai">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/futurepedia.svg" />
          </Link>
          <Link target="_blank"  href="https://startup.google.com/">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/google.svg" />
          </Link>
          <Link target="_blank"  href="https://www.nvidia.com/en-us/startups/">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/nvidia.svg" />
          </Link>
          <Link target="_blank"  href="https://www.producthunt.com/products/adsgency-ai-beta">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/product-hunt.svg" />
          </Link>
          <Link target="_blank"  href="https://www.joinsuperhuman.ai/p/metas-new-ai-model-brings-sketches-life">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/superhuman.svg" />
          </Link>
          <Link target="_blank"  href="https://www.theinformation.com/articles/inside-apples-decision-to-blow-up-the-digital-ads-business">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/information.svg" />
          </Link>
          <Link target="_blank"  href="https://www.techstars.com/newsroom/meet-the-24-companies-joining-techstars-seattle-class-of-2023">
            <img className="android:h-[30px] ipadmini:h-[40px] ipad:h-[50px] desktop:h-[60px] w-auto android:px-[20px] ipadmini:px-[30px] ipad:px-[40px] desktop:px-[50px] object-cover rounded" src="images/home/pr-logos/techstars.svg" />
          </Link>
        </Slider>
      </div>
    </div>
  )
}

export default Supporters
