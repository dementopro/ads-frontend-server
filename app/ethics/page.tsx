import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import EthicsIntro from '@/components/ethics/EthicsIntro';
import OurPrinciple from '@/components/ethics/OurPrinciple';
import Ethics from '@/components/ethics/Ethics';
import EthicalConcern from '@/components/ethics/EthicalConcern';
import AboveFooter from '@/components/common/AboveFooter';

export const metadata = {
  title: 'Ethics - AdsGency AI',
};

const EthicsPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/customerReview',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <EthicsIntro />
      </div>
      <OurPrinciple />
      <Ethics />
      <EthicalConcern />
      <AboveFooter target='Request Demo' link='/requestDemo' />
    </DefaultLayout>
  );
};

export default EthicsPage;
