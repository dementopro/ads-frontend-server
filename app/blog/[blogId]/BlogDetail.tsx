'use client'
import { IBlog } from '@/types/blog'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6"

type Props = {
  blog: IBlog
}

const BlogDetail = ({ blog }: Props) => {
  return (
    <>
      <div className="ipad:w-[900px] flex flex-col gap-[16px] justify-center items-center relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[60px]">
        {blog.content.map((section, index) => (
          <div key={index} className="w-full flex flex-col justify-center items-center android:py-[38px] ipad:py-[42px] android:gap-[20px] ipad:gap-[26px]">
            {section.title &&
              <div className="w-full text-white font-poppins font-medium text-center android:text-[30px] ipad:text-[34px]">
                {section.title}
              </div>
            }
            <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px] android:border-l-5 ipad:border-l-8 border-violet-500 border-opacity-60 pl-[18px]">
              {section.para.map((line, index) => {
                switch (true) {
                  case line.startsWith('bn:'):
                    return (
                      <p key={index} className="font-bold android:mt-[15px] ipad:mt-[20px]">
                        {line.substring(3)}
                      </p>
                    );
                  
                  case line.startsWith('b:'):
                    return (
                      <p key={index} className="font-bold">
                        {line.substring(2)}
                      </p>
                    );
                  
                  case line.startsWith('n:'):
                    return (
                      <p key={index} className="android:mt-[15px] ipad:mt-[20px]">
                        {line.substring(2)}
                      </p>
                    );
                    
                  case line.startsWith('img:'):
                    return (
                      <img key={index} src={line.substring(4)} className="w-full android:mt-[15px] ipad:mt-[20px] android:h-[180px] ipadmini:h-[380px] desktop:h-[260px] object-cover android:rounded-[8px] ipad:rounded-[12px]" />
                    );

                  default:
                    return (
                      <p key={index}>
                        {line}
                      </p>
                    );
                }
              })}
            </div>
          </div>
        ))}
        <div className="w-full flex items-center">
          <div className="w-full flex justify-start items-center gap-[15px]">
            <img src={blog.authorImage} className='rounded-full android:w-[60px] ipad:w-[80px] android:h-[60px] ipad:h-[80px] object-cover ' />
            <div className="flex flex-col text-white font-open-sans font-regular">
              <div className="android:text-[18px] ipad:text-[20px]"> {blog.publisher} </div>
              <div className="android:text-[12px] ipad:text-[14px]"> 2 min read - {blog.publishDate} </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-[8px]">
              <Link target="_blank" href="https://twitter.com/AdsGency_AI" className="android:h-30px ipad:h-35px w-auto"> <FaXTwitter /> </Link>
              <Link target="_blank" href="https://www.linkedin.com/company/adsgency-ai/" className="android:h-30px ipad:h-35px w-auto"> <FaLinkedin /> </Link>
              <Link target="_blank" href="https://www.instagram.com/adsgency_ai/" className="android:h-30px ipad:h-35px w-auto"> <FaInstagram /> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetail