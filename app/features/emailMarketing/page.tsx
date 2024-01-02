import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import EmailMarketingFeatureIntro from '@/components/features/emailMarketing/EmailMarketingFeatureIntro';
import EmailMarketingFeatures from '@/components/features/emailMarketing/EmailMarketingFeatures';
import EmailMarketingEfforts from '@/components/features/emailMarketing/EmailMarketingEfforts';

export const metadata = {
  title: 'Email Marketing Feature - AdsGency AI',
};

const EmailMarketingFeaturePage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/emailMarketing',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] w-full relative z-10 bg-hero-gradient bg-cover">
        <EmailMarketingFeatureIntro />
      </div>
      <EmailMarketingFeatures />
      <EmailMarketingEfforts />
      <AboveFooter target='Sign Up' link='/register' icon={false} image='request-demo' />
    </DefaultLayout>
  );
};

export default EmailMarketingFeaturePage;
