'use client'
import React, { useState } from 'react'
import { blogFaq } from '@/data/blogFaq'
import { FiChevronDown } from 'react-icons/fi'

interface ExpandProps {
  question: string;
  answer: string;
}

const Expand: React.FC<ExpandProps> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`w-full flex flex-col h-auto px-[16px] ipad:py-[16px] android:py-[10px] gap-[16px] bg-[#1B1C21] rounded-[25px] items-center transition ease-in-out !duration-500 cursor-pointer focus:outline-none ${expanded ? 'expand-open' : 'expand-closed'}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-row justify-between w-full">
        <div className="w-full text-left font-medium android:text-[14px] ipad:text-[18px]">
          {question}
        </div>
        <div className="text-right">
          <FiChevronDown
            className={`cursor-pointer inline-block android:w-[16px] ipad:w-[18px] h-auto rotate-${expanded ? '180' : '0'
          } transition ease-in-out !duration-500`}
          />
        </div>
      </div>
        <div className={`w-full ${expanded ? 'block' : 'hidden'} text-left font-regular android:text-[14px] ipad:text-[16px] transition ease-in-out !duration-500`}>
          {answer}
        </div>
    </div>
  );
};

const BlogFaq = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[40px] ipadmini:my-[50px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="w-full text-left text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans">
        FAQ&apos;s?
      </div>
      <div className="inline-flex w-full android:justify-center ipad:justify-center">
        <div className="w-full group inline-flex flex-col gap-[16px]">
          {blogFaq.map((faq, index) => (
            <Expand key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFaq;
