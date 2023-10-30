import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import Header from '@/components/home/Header';
import AboveFooter from '@/components/home/AboveFooter';
import JoinOurTeam from '../JoinOurTeam';
import OurCoreValues from '../OurCoreValues';
import OurMission from '../OurMission';
import OpenPositions from '../OpenPositions';

export const metadata = {
  title: 'Careers - AdsGency AI',
};

const CareerContainer = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/careers',
          title: metadata.title,
        }}
      />
      <div className="relative flex flex-col w-full h-auto">
        <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[0px] ipad:pt-[82px] w-full relative bg-hero-pattern bg-cover">
          <Header />
          <JoinOurTeam />
        </div>
        <OurCoreValues />
        <OurMission />
        <OpenPositions />
        <AboveFooter />
      </div>
    </DefaultLayout>
  );
};

export default CareerContainer;
