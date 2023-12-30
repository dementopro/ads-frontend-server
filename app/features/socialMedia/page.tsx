import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import SocialMediaFeatureIntro from '@/components/features/socialMedia/SocialMediaFeatureIntro';
import SocialMediaEfforts from '@/components/features/socialMedia/SocialMediaEfforts';
import SocialMediaFeatures from '@/components/features/socialMedia/SocialMediaFeatures';

export const metadata = {
  title: 'Social Media Feature - AdsGency AI',
};

const SocialMediaFeaturePage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/socialMedia',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <SocialMediaFeatureIntro />
      </div>
      <SocialMediaFeatures />
      <SocialMediaEfforts />
      <AboveFooter target='Sign Up' link='/register' icon={false} />
    </DefaultLayout>
  );
};

export default SocialMediaFeaturePage;
