import BlogDetail from '@/app/blog/[blogId]/BlogDetail'
import ReactGATag from '@/components/ReactGATag'
import ToTop from '@/components/ToTop'
import { Blogs } from '@/data/blogs'
import DefaultLayout from '@/layout/default'
import React from 'react'

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
      <section className={`w-full min-h-[calc(100vh-64px)] bg-[#1B1C21] flex flex-col items-center pb-8`}>
        <BlogDetail blog={blog} />
      </section>
      <ToTop />
    </DefaultLayout>
  )
}

export default BlogOfIdPage
