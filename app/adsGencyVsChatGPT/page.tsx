import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import AdsGencyVsChatGPTIntro from '@/components/adsGencyVsChatGPT/AdsGencyVsChatGPTIntro';
import Verdict from '@/components/adsGencyVsChatGPT/Verdict';
import AdsGencyVsChatGPTIntroImage from '@/components/adsGencyVsChatGPT/AdsGencyVsChatGPTIntroImage';
import Comparison from '@/components/adsGencyVsChatGPT/Comparison';

export const metadata = {
  title: 'AdsGency AI vs ChatGPT - AdsGency AI',
};

const AdsGencyVsChatGPTPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/adsGencyVsChatGPT',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <AdsGencyVsChatGPTIntro />
      </div>
      <AdsGencyVsChatGPTIntroImage />
      <Comparison />
      <Verdict />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  );
};

export default AdsGencyVsChatGPTPage;
