import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import HelpCenterWelcome from '@/components/helpCenter/HelpCenterWelcome';
import JoinUs from '@/components/helpCenter/JoinUs';
import HelpCenterCards from '@/components/helpCenter/HelpCenterCards';
import HelpCenterIntro from '@/components/helpCenter/HelpCenterIntro';

export const metadata = {
  title: 'Help Center - AdsGency AI',
};

const HelpCenterPage = () => {
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
        <HelpCenterIntro />
      </div>
      <HelpCenterWelcome />
      <HelpCenterCards />
      <JoinUs />
      <AboveFooter target='Sign Up' link='/register' icon={false} image='request-demo' />
    </DefaultLayout>
  );
};

export default HelpCenterPage;
