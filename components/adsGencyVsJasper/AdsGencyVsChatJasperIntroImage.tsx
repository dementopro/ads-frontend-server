'use client'
import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';

const AdsGencyVsChatGPTIntroImage = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:my-[48px] z-20">
      <div style={{
        background:
          'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 50%, rgba(50, 46, 84, 0.00) 100%)',
      }}>
        <Image
          width={1000}
          height={670}
          className='w-[640px] h-auto mx-auto'
          src='/images/vsjasper/intro.svg'
          alt='intro'
        />
      </div>
    </div>
  );
};

export default AdsGencyVsChatGPTIntroImage;
