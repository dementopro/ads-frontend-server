import React, { useRef } from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import AboveFooter from '@/components/common/AboveFooter';
import JoinOurTeam from './JoinOurTeam';
import OurCoreValues from './OurCoreValues';
import OurMission from './OurMission';
import OpenPositions from './OpenPositions';

export const metadata = {
  title: 'Careers - AdsGency AI',
};

const CareerContainer = () => {
  // Create a ref for the OpenPositions component
  const openPositionsRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the OpenPositions component
  const scrollToOpenPositions = () => {
    if (openPositionsRef.current) {
      openPositionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/careers',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <JoinOurTeam scrollToOpenPositions={scrollToOpenPositions} />
      </div>
      <OurCoreValues />
      <OurMission />
      <div ref={openPositionsRef}></div>
      <OpenPositions />
      <AboveFooter />
    </DefaultLayout>
  );
};

export default CareerContainer