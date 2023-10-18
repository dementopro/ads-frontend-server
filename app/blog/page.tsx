import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import React from 'react';
import styles from './blog.module.css';
import BlogList from '@/app/blog/BlogList';
import { Blogs } from '@/data/blogs';
import Faq from '@/app/blog/Faq';
import Header from '@/components/home/Header';
import AboveFooter from '@/components/home/AboveFooter';

export const metadata = {
  title: 'Blog - AdsGency AI',
};

const BlogPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/blog',
          title: metadata.title,
        }}
      />
      <div className="relative flex flex-col w-full h-auto">
        <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[0px] ipad:pt-[82px] w-full relative bg-hero-pattern bg-cover">
          <Header />
          <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto relative android:mx-[32px] android:mt-[32px] ipad:mx-[0px] ipad:mt-[60px] android:pb-[32px] ipad:pb-[60px] gap-[0px] border-b-1 border-[#A09BAE]">
            <div className="font-open-sans font-regular text-left android:text-[18px] ipad:text-[20px]">
              Blog
            </div>
            <div className="inline-flex android:items-start ipadmini:items-end android:flex-col ipadmini:flex-row android:gap-[2px] ipadmini:gap-[10px]">
              <div className="text-white font-poppins font-bold text-left android:text-[32px] ipad:text-[43px]">
                Stay in the Loop with
              </div>
              <img
                className="cursor-pointer android:w-[200px] ipadmini:w-[250px] h-auto"
                title="Home"
                src={'/logo.svg'}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <BlogList />
        <Faq />
        <AboveFooter />
      </div>
    </DefaultLayout>
  );
};

export default BlogPage;
