// Import necessary modules and components.
import { IBlog } from '@/types/blog';
import React from 'react';
import { Blogs } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

// Define props for the BlogCard component.
type BlogCardProps = {
  blog: IBlog;
};

// Define the BlogCard component.
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <>
      {/* Blog card container */}
      <div
        className='flex flex-col shadow-lg border-2 border-black hover:border-primary-purple rounded-md overflow-hidden transition-all group relative select-none'
        style={{
          background: 'linear-gradient(180deg, #1B1C21 0%, #251F32 100%)'
        }}
      >
        {/* Link to the blog detail page */}
        <Link href={`/blog/${blog.id}`} className='w-full h-48 bg-gray-300 relative overflow-hidden'>
          {/* Blog cover image */}
          <Image src={blog.coverImage} alt={blog.title} layout='fill' className='object-cover hover:scale-125 transition-all duration-600 cursor-pointer' />
        </Link>
        <div className='flex flex-col gap-3 p-4'        >
          {/* Link to the blog detail page */}
          <Link href={`/blog/${blog.id}`} className='cursor-pointer text-lg font-bold line-clamp-2 hover:text-primary-purple' title={blog.title}>
            {/* Blog title */}
            {blog.title}
          </Link>
          {/* Blog content (excluding images) */}
          <p className='text-xs text-primary-gray line-clamp-2'>
            {blog.content.filter(p => !p.startsWith('img:'))}
          </p>
          {/* Blog metadata */}
          <div className='text-sm text-white flex justify-between items-center group-hover:opacity-0 transition-all font-mono'>
            {/* Publish date */}
            <div className='flex items-center gap-1 text-white'>
              <Icon icon='mdi:calendar' className='text-primary-gray text-xl' />
              <span>{blog.publishDate}</span>
            </div>
            {/* Publisher */}
            <div className='flex items-center gap-1 text-white'>
              <Icon icon='mdi:account-circle' className='text-primary-gray text-xl' />
              <span>{blog.publisher}</span>
            </div>
          </div>
          {/* Read more link */}
          <Link href={`/blog/${blog.id}`} className='mx-auto text-center cursor-pointer text-base underline underline-offset-8 transition-all duration-300 delay-600 hover:underline-offset-2 line-clamp-2 text-primary-purple hidden group-hover:flex absolute bottom-4 right-4' title={blog.title}>
            Read More...
          </Link>
        </div>
      </div>
    </>
  );
};

// Define the BlogList component.
const BlogList = () => {
  // Sort blogs by ID in descending order.
  const blogs = Blogs.sort((a, b) => +b.id - +a.id);

  return (
    <>
      {/* Grid layout for blog cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-[1200px] px-8 gap-4'>
        {/* Render each blog card */}
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>
      {/* Pagination information */}
      <p className='mt-16 text-xs text-primary-gray/50 text-center'>1 / 1</p>
    </>
  );
};

export default BlogList;