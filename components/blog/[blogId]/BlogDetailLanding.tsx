import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { IBlog } from '@/types/blog'

type Props = {
  blog: IBlog
}

const BlogDetailLanding = ({ blog }: Props) => {
  return (
    <div className="ipad:w-[900px] flex flex-col gap-[32px] justify-center items-center relative android:mx-[32px] ipad:mx-auto mt-[32px]">
      <Link
        href={`/blog`}
        className="w-full flex flex-row gap-[8px] mt-[32px] text-white hover:text-[#9D93FF] items-center android:text-[12px] ipad:text-[16px] relative text-left transition ease-in-out !duration-500">
        <FiArrowLeft
          className="cursor-pointer inline-block android:w-[12px] ipad:w-[16px] h-auto"
        />
        <span> Back </span>
      </Link>
      <div className="w-full text-white font-poppins font-bold text-center android:text-[30px] ipad:text-[34px]">
        {blog.title}
      </div>
      <div className="w-full android:h-[180px] ipadmini:h-[380px] desktop:h-[260px]">
        <img src={blog.coverImage} className="w-full h-full object-cover android:rounded-[8px] ipad:rounded-[12px]" />
      </div>
      <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px] android:border-l-5 ipad:border-l-8 border-[#9D93FF] border-opacity-60 pl-[18px]">
        {blog.introductionText}
      </div>
    </div>
  )
}

export default BlogDetailLanding