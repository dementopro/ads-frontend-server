import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import InfographicsFeatureIntro from '@/components/features/infographics/InfographicsFeatureIntro';
import InfographicsFeatures from '@/components/features/infographics/InfographicsFeatures';
import InfographicsEfforts from '@/components/features/infographics/InfographicsEfforts';

export const metadata = {
  title: 'Email Marketing Feature - AdsGency AI',
};

const InfographicsFeaturePage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/infographics',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <InfographicsFeatureIntro />
      </div>
      <InfographicsFeatures />
      <InfographicsEfforts />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  );
};

export default InfographicsFeaturePage;
