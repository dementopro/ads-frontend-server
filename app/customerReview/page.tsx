import React from 'react';
import ReactGATag from '@/components/ReactGATag';
import DefaultLayout from '@/layout/default';
import CustomerReviewIntro from '@/components/customerReview/CustomerReviewIntro';
import CustomerDemographic from '@/components/customerReview/CustomerDempgraphic';
import Reviews from '@/components/customerReview/Reviews';
import Supporters from '@/components/customerReview/Supporters';
import Commitment from '@/components/customerReview/Commitment';
import AboveFooter from '@/components/common/AboveFooter';

export const metadata = {
  title: 'Customer Review - AdsGency AI',
};

const CustomerReviewPage = () => {
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
        <CustomerReviewIntro />
      </div>
      <CustomerDemographic />
      <Reviews />
      <Supporters />
      <Commitment />
      <AboveFooter target='Request Demo' link='/requestDemo' />
    </DefaultLayout>
  );
};

export default CustomerReviewPage;
