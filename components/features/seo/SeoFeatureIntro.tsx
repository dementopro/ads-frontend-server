'use client'
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';
import SecondaryButton from '../../common/SecondaryButton';

const SeoFeatureIntro = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:pt-[0px] ipad:my-[48px] z-20">
      <Image
        width={100}
        height={100}
        className='android:hidden ipad:block absolute right-0 top-[200px] rotate-[180deg] h-auto z-10'
        title='Home'
        src={'/images/bg-elements/headline-circles.svg'} alt='logo'
      />
      <div className='flex android:flex-col ipadmini:flex-row gap-[60px] items-center justify-center'>
        <div className='w-[300px] shrink-0'>
          <Image
            width={300}
            height={280}
            className='w-full h-auto'
            title='seo-feature-intro'
            src={'/images/features/seo/seo-intro.svg'} alt='logo'
          />
        </div>
        <div className='relative android:w-full ipad:mx-auto android:mx-0 flex flex-col gap-[32px] justify-start items-start z-20'>
          <div className="w-full text-white font-poppins font-semibold text-left android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
            Cast a Spell on Search Engines: <br /> <span className="bg-brand-color text-transparent bg-clip-text">SEO Content Magic with AdsGency AI</span>
          </div>
          <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px]">
            AdsGency AI crafts SEO-optimized content that captivates search engines and readers alike, casting a spellbinding aura around your brand.
          </div>
          <div className='flex android:flex-col ipadmini:flex-row android:gap-[16px] ipadmini:gap-[32px]'>
            <SecondaryButton path="/public/pricing" text="Start a Free Trial" icon={false} />
            <PrimaryButton icon={true}
              target="_self"
              href="/register"
              text="Sign Up Today"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoFeatureIntro;
