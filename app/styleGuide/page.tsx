import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import StyleGuideIntro from '@/components/styleGuide/StyleGuideIntro';
import StyleGuide from '@/components/styleGuide/StyleGuide';
import AboveFooter from '@/components/common/AboveFooter';

export const metadata = {
  title: 'Style Guide - AdsGency AI',
};

const StyleGuidePage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/styleGuide',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <StyleGuideIntro />
      </div>
      <StyleGuide />
      <AboveFooter />
    </DefaultLayout>
  );
};

export default StyleGuidePage;
