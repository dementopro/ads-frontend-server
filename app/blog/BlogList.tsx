'use client';
import { IBlog } from '@/types/blog';
import React from 'react';
import { Blogs } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import SecondaryButton from '@/components/SecondaryButton';

type BlogCardProps = {
  blog: IBlog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <>
      <div
        className={`w-full flex android:flex-col ipad:flex-row justify-start items-center ${blog.layout === 'row'
            ? 'ipadmini:flex-row android:gap-[16px] ipad:gap-[32px]'
            : 'ipadmini:flex-col gap-[16px]'
          }`}
      >
        <div
          className={`android:h-[200px] w-full ${blog.layout === 'row' ? 'ipad:h-[350px]' : 'ipad:h-[200px]'
            }`}
        >
          <img
            src={blog.coverImage}
            alt="Blog Image"
            className="w-full h-full object-cover rounded-[25px]"
          />
        </div>
        <div
          className={`inline-flex android:w-full ipadmini:w-full ${blog.layout === 'row' ? '' : 'ipad:w-1/2'
            } flex-col justify-start items-start android:gap-[8px] ipad:gap-[16px]`}
        >
          <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
            {blog.type}
          </div>
          <div
            className={`${blog.layout === 'row'
                ? 'android:text-[28px] ipad:text-[34px] leading-[40px]'
                : 'android:text-[18px] ipad:text-[20px] leading-[24px]'
              } font-semibold font-poppins`}
          >
            {blog.layout === 'row' ? blog.title : blog.miniTitle}
          </div>
          {blog.layout === 'row' && (
            <div className="android:text-[14px] ipad:text-[16px] font-normal font-open-sans leading-[19px] line-clamp-2">
              {blog.introductionText}
            </div>
          )}
          {blog.layout === 'col' && (
            <div className="android:text-[14px] ipad:text-[16px] text-[#D0D0D0] font-normal font-open-sans leading-[19px]">
              {blog.publishDate}
            </div>
          )}
          <SecondaryButton path="/blog/" id={blog.id} text="View" />
        </div>
      </div>
    </>
  );
};

const BlogList = () => {
  const rowLayoutBlogs = Blogs.filter((blog) => blog.layout === 'row');
  const colLayoutBlogs = Blogs.filter((blog) => blog.layout === 'col');
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[16px] ipad:my-[32px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="w-full text-[#D0D0D0] font-open-sans font-regular text-left android:text-[18px] ipad:text-[20px]">
        Featured
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-[32px] inline-flex">
        {rowLayoutBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>

      <div className="w-full flex android:flex-col ipadmini:flex-row justify-center items-center gap-[32px] inline-flex">
        {colLayoutBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
    </div>
  );
};
export default BlogList;
