import BlogDetail from '@/app/blog/[blogId]/BlogDetail'
import ReactGATag from '@/components/ReactGATag'
import ToTop from '@/components/ToTop'
import { Blogs } from '@/data/blogs'
import DefaultLayout from '@/layout/default'
import React from 'react'
import Header from '@/components/home/Header'
import AboveFooter from '@/components/home/AboveFooter'
import { FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const metadata = {
  title: 'Blog - AdsGency AI',
}

async function getBlogById(id: string) {
  return Blogs.find((blog) => blog.id === id)!
}

const BlogOfIdPage = async ({ params }: { params: { blogId: string } }) => {

  const blog = await getBlogById(params.blogId)
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: "pageview",
          page: `/blog/${params.blogId}`,
          title: `${blog.title} - AdsGency AI`,
        }}
      />
      <div className="relative flex flex-col w-full h-auto">
        <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[0px] ipad:pt-[82px] w-full relative bg-hero-pattern bg-cover">
          <Header />

          <div className="ipad:w-[900px] flex flex-col gap-[32px] justify-center items-center relative android:mx-[32px] ipad:mx-auto mt-[32px]">
            <Link
              href={`/blog`}
              className="w-full flex flex-row gap-[8px] mt-[32px] text-white hover:text-violet-500 items-center android:text-[12px] ipad:text-[16px] relative text-left transition ease-in-out !duration-500">
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
            <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px] android:border-l-5 ipad:border-l-8 border-violet-500 border-opacity-60 pl-[18px]">
              {blog.introductionText}
            </div>
          </div>
        </div>
        <BlogDetail blog={blog} />
        <AboveFooter />
        <div className="ipad:w-full desktop:w-[1240px] flex flex-col gap-[32px] justify-center items-center relative android:mx-[32px] ipad:mx-auto mt-[32px]">

        </div>
      </div>
      <ToTop />
    </DefaultLayout>
  )
}

export default BlogOfIdPage
