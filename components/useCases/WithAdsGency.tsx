'use client'
import React, { use } from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';
import { IUseCase } from '@/types/useCase';

type Props = {
  useCase: IUseCase
}

const WithAdsGency = ({ useCase }: Props) => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className='w-full flex flex-col gap-[32px] items-center justify-center'>
        <div className="relative text-white font-poppins font-semibold android:text-center desktop:text-left android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
          With AdsGency
          <Image
            className='absolute w-[50px] h-auto right-[-52px] top-[-20px]'
            width={30}
            height={30}
            src='/images/ethics/star-decor.svg'
            alt='decor'
          />
        </div>
        <div className="flex android:flex-col ipadmini:flex-row flex-wrap gap-[32px] items-center justify-center items-stretch">
          {useCase.withAdsGency.map((item, index) =>
            <div key={index} className='android:w-full ipadmini:w-[400px] desktop:w-[380px] py-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer'>
              <div className='w-full h-full flex flex-col gap-[32px] py-[48px] px-[24px] items-center justify-center bg-black drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)] rounded-[18px]'>
                <div className="font-open-sans text-center font-semibold android:text-[24px] ipad:text-[32px]">
                  {item}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WithAdsGency;
