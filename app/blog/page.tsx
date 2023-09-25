// Import necessary modules and components.
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import React from 'react';
import styles from './blog.module.css';
import BlogList from '@/app/blog/BlogList';

// Define metadata for the BlogPage.
export const metadata = {
  title: 'Blog - AdsGency AI',
};
// Define the BlogPage component.
const BlogPage = () => {
  return (
    <DefaultLayout>
      {/* Google Analytics tracking */}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/blog',
          title: metadata.title,
        }}
      />
      <section className={`w-full min-h-[calc(100vh-64px)] bg-[#1B1C21] flex flex-col items-center pb-8`}>
        <div className='w-full mx-auto max-w-[1000px] flex flex-col gap-3 items-center my-12 pb-8 border-b border-primary-gray/40'>
          {/* Blog heading */}
          <h3 className="text-base text-white font-mono">
            - THE AdsGency AI BLOG -
          </h3>
          <h1 className={`${styles['landing-txt']}`}>
            AI Content Marketing
          </h1>
          <h4 className='text-xl text-primary-gray'>
            Tips, Resources, and Strategies
          </h4>
        </div>
        {/* Render the list of blogs */}
        <BlogList />
      </section>
    </DefaultLayout>
  );
}

export default BlogPage;
