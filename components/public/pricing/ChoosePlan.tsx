'use client'
import React, { useEffect, useRef, useState } from 'react';
import PrimaryButton from '@/components/common/PrimaryButton'
import { plan } from '@/data/pricing/plan'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'
import { FiCheck } from 'react-icons/fi'
import { IoMdInformationCircleOutline } from "react-icons/io";

const ChoosePlan = () => {
  const [expandedPlans, setExpandedPlans] = useState(Array(plan.length).fill(false));

  const toggleExpansion = (index: number) => {
    setExpandedPlans((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };
  return (
    <div className="desktop:w-[1240px] ipad:w-full m-auto h-full android:my-[32px] ipad:my-[48px] android:px-[32px] ipad:px-[0px] justify-center items-center flex flex-col gap-[32px]">
      <div className="android:px-[14px] ipad:px-[18px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
        Choose a Plan
      </div>
      <div className='w-full flex android:flex-wrap gap-[32px] items-start justify-center'>
        {plan.map((plan, index) => (
          <div key={index} className={`w-[390px] py-[1px] rounded-[19px] bg-light-purple-gradient cursor-pointer`}>
            <div className={`w-full flex flex-col gap-[16px] py-[16px] px-[20px] items-start justify-center bg-black drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)] rounded-[18px]`}>
              <div className='flex flex-col gap-[5px]'>
                <div className='text-white text-[42px] font-bold font-poppins'>
                  {plan.plan}
                </div>
                <div className='text-[#FAFAFB] text-[12px] font-regular font-open-sans'>
                  {plan.text}
                </div>
              </div>
              <div className='flex flex-row justify-start items-end gap-[5px] text-white font-open-sans font-medium'>
                <div className='flex flex-row gap-[2px] justify-start items-start'>
                  <div className='text-[15px]'> $ </div>
                  <div className='text-[28px] leading-[29px]'> {plan.price} </div>
                </div>
                <div className='text-[15px]'> per month </div>
              </div>
              <div className='text-[#D0CDD6] text-[12px] font-regular font-open-sans'>
                {plan.priceText}
              </div>
              <div className='w-full'>
                <PrimaryButton target="_self" href="/register" text="Subscribe Now" />
              </div>
              <div className='flex flex-col pl-[30px] gap-[16px] justify-start items-start'>
                <div className='text-[14.5px] font-medium font-poppins'> Plan Includes: </div>
                {plan.list.slice(0, 5).map((item, index) => (
                  <div key={index} className='flex flex-row gap-[15px] text-[12px] font-poppins text-regular justify-start items-center'>
                    <FiCheck className='text-primary-purple w-[16px] h-[16px]' />
                    <div className='text-white'> {item} </div>
                  </div>
                ))}
              </div>
              <div className={`flex flex-col pl-[30px] gap-[16px] justify-start items-start ${!expandedPlans[index] ? 'h-[0px] opacity-0' : 'h-[90px] opacity-100'} transition-height-opacity !duration-500 ease-in-out`}>
                {plan.list.slice(5).map((item, index) => (
                  <div key={index} className='flex flex-row gap-[15px] text-[12px] font-poppins text-regular justify-start items-center'>
                    <FiCheck className='text-primary-purple w-[16px] h-[16px]' />
                    <div className='text-white'> {item} </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => toggleExpansion(index)}
                className='flex flex-row gap-[10px] text-[13px] font-open-sans font-regular text-white items-center transition !duration-500 ease-in-out'
              >
                {expandedPlans[index] ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
                <div className='transition !duration-500 ease-in-out'> See {expandedPlans[index] ? 'Less' : 'More'} Details </div>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full text-[12px] font-opan-sans font-regular text-[#E0E0E0] flex flex-row gap-[10px] items-center justify-end'>
        <span>For Billings and invoice-related questions contact <a href="mailto:contactus@adsgency.ai" className='font-medium'>contactus@adsgency.ai</a></span>
        <IoMdInformationCircleOutline />
      </div>
    </div>
  );
};

export default ChoosePlan;
