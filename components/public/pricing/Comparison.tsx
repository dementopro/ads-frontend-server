'use client';
import React, { useEffect, useRef, useState } from 'react';
import { comparison } from '@/data/Pricing/comparison';
import { FiCheck, FiChevronDown, FiX } from 'react-icons/fi';
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi';

const Comparison = () => {
  const [expandedPlans, setExpandedPlans] = useState(Array(comparison.length).fill(false));

  const toggleExpansion = (index: number) => {
    setExpandedPlans((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-row items-center text-center bg-[#1B1C21] text-[20px] font-poppins font-medium border-1 border-[#27282F] gap-[24px] px-[60px] py-[12px] rounded-t-[8px]'>
        <div className='w-3/6'></div>
        <div className='w-1/6'> Premium </div>
        <div className='w-1/6'> Business </div>
        <div className='w-1/6'> StartUp </div>
      </div>
      <div className='w-full flex flex-col'>
        {comparison.map((item, index) =>
          <div key={index} className='bg-[#1B1C21]'>
            <div className='w-full flex flex-row px-[60px] py-[12px] text-[12px] font-poppins bg-[#6A58C0] items-center'>
              {item.title}
            </div>
            <div className='w-full flex flex-col gap-[16px] bg-[#1B1C21] px-[60px] py-[12px]'>
              {item.list.slice(0, 5).map((list, i) =>
                <div key={i} className='w-full flex flex-row gap-[24px] items-center justify-start'>
                  <div className='w-3/6 font-open-sans text-[18px] text-white font-regular'>
                    {list.title}
                  </div>
                  <div className='w-1/6 flex justify-center'>
                    {list.premium ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' />}
                  </div>
                  <div className='w-1/6 flex justify-center'>
                    {list.business ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' />}
                  </div>
                  <div className='w-1/6 flex justify-center'>
                    {list.startup ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' />}
                  </div>
                </div>
              )}
            </div>
            {item.list.length > 5 && (
              <div className={`w-full flex flex-col gap-[16px] bg-[#1B1C21] px-[60px] ${!expandedPlans[index] ? 'py-[0px] opacity-0' : 'py-[12px] opacity-100'} ${expandedPlans[index] && item.title == 'Core Functionality' ? 'h-[266px]' : 'h-[0px]'} ${expandedPlans[index] && item.title == 'Advanced Integrations' ? 'h-[51px]' : 'h-[0px]'} transition-height-opacity !duration-500 ease-in-out`}>
                {item.list.slice(5).map((list, i) =>
                  <div key={i} className='w-full flex flex-row gap-[24px] items-center justify-start'>
                    <div className='w-3/6 font-open-sans text-[18px] text-white font-regular'>
                      {list.title}
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      {list.premium ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' />}
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      {list.business ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' />}
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      {list.startup ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' />}
                    </div>
                  </div>
                )}
              </div>
            )}
            {item.list.length > 5 && (
              <button
                onClick={() => toggleExpansion(index)}
                className='w-full flex flex-row gap-[10px] text-[13px] px-[12px] py-[6px] bg-black font-open-sans font-regular text-white items-center transition !duration-500 ease-in-out'
              >
                {expandedPlans[index] ? <HiOutlineMinusCircle /> : <HiOutlinePlusCircle />}
                <div className='transition !duration-500 ease-in-out'> See {expandedPlans[index] ? 'Less' : 'More'} Details </div>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comparison;
