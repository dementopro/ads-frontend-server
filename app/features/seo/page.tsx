import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import SeoFeatureIntro from '@/components/features/seo/SeoFeatureIntro';
import SeoEfforts from '@/components/features/seo/SeoEfforts';
import SeoFeatures from '@/components/features/seo/SeoFeatures';

export const metadata = {
  title: 'SEO Feature - AdsGency AI',
};

const SeoFeaturePage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/seo',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <SeoFeatureIntro />
      </div>
      <SeoFeatures />
      <SeoEfforts />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  );
};

export default SeoFeaturePage;
