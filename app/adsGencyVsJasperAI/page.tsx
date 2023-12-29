import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import Verdict from '@/components/adsGencyVsJasper/Verdict';
import Comparison from '@/components/adsGencyVsJasper/Comparison';
import AdsGencyVsJasperIntro from '@/components/adsGencyVsJasper/AdsGencyVsJasperIntro';
import AdsGencyVsJasperIntroImage from '@/components/adsGencyVsJasper/AdsGencyVsChatJasperIntroImage';

export const metadata = {
  title: 'AdsGency AI vs ChatGPT - AdsGency AI',
};

const AdsGencyVsJasperPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/adsGencyVsJasperAI',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <AdsGencyVsJasperIntro />
      </div>
      <AdsGencyVsJasperIntroImage />
      <Comparison />
      <Verdict />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  );
};

export default AdsGencyVsJasperPage;
