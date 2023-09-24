// Import necessary modules and components.
import BlogDetail from '@/app/blog/[blogId]/BlogDetail';
import ReactGATag from '@/components/ReactGATag';
import ToTop from '@/components/ToTop';
import { Blogs } from '@/data/blogs';
import DefaultLayout from '@/layout/default';
import React from 'react';

// Define metadata for the page.
export const metadata = {
  title: 'Blog - AdsGency AI',
};

// Function to fetch a blog post by its ID.
async function getBlogById(id: string) {
  return Blogs.find((blog) => blog.id === id)!;
}

// Define the BlogOfIdPage component.
const BlogOfIdPage = async ({ params }: { params: { blogId: string } }) => {
  // Fetch the blog post based on the provided blogId parameter.
  const blog = await getBlogById(params.blogId);

  return (
    <DefaultLayout>
      {/* Add Google Analytics tracking for the page. */}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: `/blog/${params.blogId}`,
          title: `${blog.title} - AdsGency AI`,
        }}
      />
      <section className={`w-full min-h-[calc(100vh-64px)] bg-[#1B1C21] flex flex-col items-center pb-8`}>
        {/* Render the BlogDetail component with the fetched blog data. */}
        <BlogDetail blog={blog} />
      </section>
      {/* Render the "ToTop" component. */}
      <ToTop />
    </DefaultLayout>
  );
};

export default BlogOfIdPage;
