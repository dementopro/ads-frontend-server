import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import React from 'react'
import NewsList from '@/components/newsPress/NewsList'
import BlogFaq from '@/components/blog/BlogFaq'
import AboveFooter from '@/components/common/AboveFooter'
import NewsLanding from '@/components/newsPress/NewsLanding'

export const metadata = {
  title: 'Blog - AdsGency AI',
};

const NewsPressPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/newsPress',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <NewsLanding />
      </div>
      <NewsList />
      <AboveFooter target='Request Demo' link='/requestDemo' icon={true} image='request-demo' />
    </DefaultLayout>
  );
};

export default NewsPressPage