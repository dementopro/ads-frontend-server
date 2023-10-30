'use client';
import React from 'react';
import { contactUsFaq } from '@/data/contactUsFaq';

const ContactUsFaq = () => {
  return (
    <div className="android:w-full desktop:w-[1240px] desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="w-full text-left text-[#EF5DA8] android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans">
        FAQs
      </div>
      <div className="inline-flex android:flex-col ipadmini:flex-row w-full android:gap-[16px] ipad:gap-[32px] justify-center items-center">
        {contactUsFaq.map((faq, index) => (
          <div
            key={index}
            className="inline-flex flex-col text-left w-full py-[26px] px-[16px] android:h-[150px] ipadmini:h-[250px] desktop:h-[220px] gap-[8px] android:border-2 ipadmini:border-3 ipad:border-4 border-[#9D93FF] border-opacity-60 rounded-[25px]"
          >
            <div className="font-open-sans font-semibold android:text-[16px] ipad:text-[20px]">
              {faq.question}
            </div>
            <div className="font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUsFaq;
