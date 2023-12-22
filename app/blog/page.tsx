import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import BlogList from '@/components/blog/BlogList'
import BlogFaq from '@/components/blog/BlogFaq'
import AboveFooter from '@/components/common/AboveFooter'
import BlogLanding from '@/components/blog/BlogLanding'

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
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <BlogLanding />
      </div>
      <BlogList />
      <BlogFaq />
      <AboveFooter />
    </DefaultLayout>
  );
};

export default BlogPage
