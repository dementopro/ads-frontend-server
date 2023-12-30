'use client';
import { Avatar } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BiSolidStar, BiStar } from 'react-icons/bi';
import { customerReviews } from '@/data/customerReviews';

interface IReviewsProps { }

const Reviews: React.FunctionComponent<IReviewsProps> = (props) => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[32px] items-center justify-center'>
        <div className="w-full text-center text-white android:text-[34px] desktop:text-[43px] font-semibold font-poppins">
          What people say about Us
        </div>

        <div className="flex android:flex-col ipadmini:flex-row flex-wrap gap-[32px] items-center justify-center items-stretch">
          {customerReviews.slice(0, 4).map((item, index) =>
            <div key={index} className='w-[550px] relative p-[12px] bg-glass-border-gradient rounded-[30px]'>
              <div className='w-full h-full relative flex flex-col gap-[16px] px-[60px] py-[32px] bg-glass-bg-gradient rounded-[18px] justify-center items-center'>
                <div className='w-full flex flex-col gap-[12px] items-start'>
                  <Image
                    width={32}
                    height={32}
                    className='w-[32px] h-auto'
                    src='images/customer-review/quote.svg'
                    alt='quote'
                  />
                  <div className='text-[16px] text-white text-center font-regular font-medium italic'>
                    {item.testimonial}
                  </div>
                </div>
                <div className='w-full flex flex-col gap-[16px] items-center justify-center'>
                  <div className='p-[2px] rounded-full bg-light-purple-gradient'>
                    <Image
                      width={50}
                      height={50}
                      className='w-[50px] h-[50px] object-cover'
                      src={`images/home/testimonial/${item.image}.svg`}
                      alt='quote'
                    />
                  </div>
                  <div className='flex flex-col gap-[2px] items-center'>
                    <div className='text-white font-poppins font-medium text-[16px] uppercase tracking-5'>
                      {item.name}
                    </div>
                    <div className='text-[#A09BAE] font-open-sans font-regular text-[14px]'>
                      {item.designation}
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center w-full gap-[5px]">
                    <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
                    <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
                    <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
                    <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
                    <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
