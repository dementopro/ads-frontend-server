import BlogDetail from '@/components/blog/[blogId]/BlogDetail'
import ReactGATag from '@/components/ReactGATag'
import ToTop from '@/components/common/ToTop'
import { Blogs } from '@/data/blogs'
import DefaultLayout from '@/layout/default'
import React from 'react'
import AboveFooter from '@/components/common/AboveFooter'
import BlogDetailLanding from '@/components/blog/[blogId]/BlogDetailLanding'

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
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <BlogDetailLanding blog={blog} />
      </div>
      <BlogDetail blog={blog} />
      <AboveFooter target='Request Demo' link='/requestDemo' icon={true} />
      <ToTop />
    </DefaultLayout>
  )
}

export default BlogOfIdPage