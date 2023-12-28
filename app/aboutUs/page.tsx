import React from 'react'
import ReactGATag from '@/components/ReactGATag'
import DefaultLayout from '@/layout/default'
import AboveFooter from '@/components/common/AboveFooter'
import AboutUs from '@/components/aboutUs/AboutUs';
import OurMisson from '@/components/aboutUs/OurMisson';
import Statistics from '@/components/aboutUs/Statistics';
import OurTeam from '@/components/aboutUs/OurTeam';

export const metadata = {
  title: 'About Us - AdsGency AI',
};

const AboutUsPage = () => {
  return (
    <DefaultLayout>
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/aboutUs',
          title: metadata.title,
        }}
      />
      <div className="ipad:px-[60px] desktop:px-[100px] android:pt-[100px] ipad:pt-[150px] pb-[32px] w-full relative z-10 bg-hero-gradient bg-cover">
        <AboutUs />
      </div>
      <OurMisson />
      <div className="w-full flex justify-center bg-gradient-to-b from-[#3D296D] to-[#000000]">
        <Statistics />
      </div>
      <OurTeam />
      <AboveFooter target='Request Demo' link='/requestDemo' />
    </DefaultLayout>
  );
};

export default AboutUsPage;
