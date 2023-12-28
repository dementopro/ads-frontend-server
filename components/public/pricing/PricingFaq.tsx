'use client';
import React from 'react';
import { pricingFaq } from '@/data/pricing/pricingFaq';

const PricingFaq = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="w-full text-left text-[#EF5DA8] text-[42px] font-bold font-open-sans">
        FAQs
      </div>
      <div className="w-full flex flex-wrap gap-[32px] justify-center items-center items-stretch">
        {pricingFaq.map((faq, index) => (
          <div key={index} className='w-[390px] p-[4px] bg-light-purple-gradient rounded-[25px]'>
            <div className="w-full h-full flex flex-col text-left bg-black py-[26px] px-[16px] gap-[8px] rounded-[21px]">
              <div className="font-open-sans font-semibold text-[20px]">
                {faq.question}
              </div>
              <div className="font-open-sans text-[#D0CDD6] font-regular text-[16px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingFaq;
