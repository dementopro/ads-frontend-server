'use client';
import React, { useEffect, useRef, useState } from 'react';
import { pricingFaq } from '@/data/pricing/pricingFaq';
import { comparison } from '@/data/pricing/comparison';
import { FiCheck, FiChevronDown, FiX } from 'react-icons/fi';

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
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[60px] bg-black">
      <div className='w-full flex flex-row items-center text-center bg-[#1B1C21] text-[20px] font-poppins font-medium border-1 border-[#27282F] gap-[24px] px-[60px] py-[12px] rounded-t-[8px]'>
        <div className='w-3/6'></div>
        <div className='w-1/6'> Premium </div>
        <div className='w-1/6'> Business </div>
        <div className='w-1/6'> StartUp </div>
      </div>
      <div className='w-full flex flex-col'>
        {comparison.map((item, index) =>
          <div key={index}>
            <button
              onClick={() => toggleExpansion(index)}
              className='w-full flex flex-row px-[60px] py-[12px] text-[12px] font-poppins bg-[#27282F] items-center'
            >
              <div className='w-full text-white text-left'> {item.title} </div>
              <div className='w-full text-[#ABABAB] flex justify-end'> <FiChevronDown className={`w-[16px] h-[16px] rotate-${expandedPlans[index] ? '180' : '0'}`} /> </div>
            </button>
            {expandedPlans[index] && (
              <div className='w-full flex flex-col gap-[16px] bg-[#1B1C21] px-[60px] py-[12px]'>
                {item.list.map((list, i) =>
                  <div key={i} className='w-full flex flex-row gap-[24px] items-center justify-start'>
                    <div className='w-3/6 font-open-sans text-[18px] text-white font-regular'>
                      {list.title}
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      {list.premium ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' /> }
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      {list.business ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' /> }
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      {list.startup ? <FiCheck className='text-primary-purple w-[16px] h-[16px]' /> : <FiX className='text-[#34A853] w-[16px] h-[16px]' /> }
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comparison;
