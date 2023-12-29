'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import producthuntIcon from '@iconify/icons-logos/producthunt';
import brandSuperhuman from '@iconify/icons-tabler/brand-superhuman';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Statistic from 'antd/es/statistic/Statistic';
import PrimaryButton from '@/components/common/PrimaryButton'

interface AboveFooterProps {
  target: string;
  link: string;
  icon: boolean
}

const AboveFooter: React.FC<AboveFooterProps> = ({ target, link, icon }) => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className="android:w-[328px] ipadmini:w-[710px] ipad:w-[862px] desktop:w-[1036px] mx-auto h-[214px] relative bg-[#3A3A3A] bg-opacity-20 rounded-3xl shadow overflow-hidden">
        <img className="android:hidden ipadmini:block w-full h-auto left-0 top-0 absolute object-cover rounded z-neg-1" src="/images/home/above-footer-vector.svg" />
        <img className="android:block ipadmini:hidden hidden w-full h-auto left-0 top-0 absolute object-cover rounded z-neg-1" src="/images/home/above-footer-vector-android.svg" />
        <div className="h-full px-[50px] relative justify-start items-center flex-row flex z-10">
          <div className="justify-start items-start flex-col flex gap-[20px]">
            <PrimaryButton icon={icon} target="_self" href={link} text={target} />
            <div className="text-white android:text-[12px] ipadmini:text-[12px] ipad:text-[16px] desktop:text-[16px] font-medium font-poppins">
              <span>
                AdsGency AI for Enterprise?
              </span>
              <Link target="_blank" href='/contactUs' className="ml-[5px] underline">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
        <img className="android:hidden ipad:block w-[370px] h-auto ipad:right-[50px] desktop:right-[100px] top-[-10px] absolute object-cover rounded z-neg-1" src="/images/home/above-footer-image.svg" />
      </div>
    </div>
  )
}

export default AboveFooter;
