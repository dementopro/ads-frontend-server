'use client'
import React, { use } from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';
import { IUseCase } from '@/types/useCase';

type Props = {
  useCase: IUseCase
}

const UseCaseIntro = ({ useCase }: Props) => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full relative android:mx-[32px] ipad:mx-auto android:my-[32px] ipad:pt-[0px] ipad:my-[48px] z-20">
      <div className='flex android:flex-col ipadmini:flex-row gap-[60px] items-center justify-center'>     
        <div className='relative android:w-full ipad:mx-auto android:mx-0 flex flex-col gap-[32px] justify-start items-start z-20'>
          <div className="w-full text-white font-poppins font-semibold text-left android:text-[34px] ipad:text-[43px] android:leading-[34px] ipad:leading-[43px] ipad:tracking-[-3px]">
            {useCase.intro.whiteHead} <br /> <span className="bg-brand-color text-transparent bg-clip-text">{useCase.intro.colorHead}</span>
          </div>
          <div className="w-full text-[#D0CDD6] font-open-sans font-regular text-left android:text-[14px] ipad:text-[16px] andrpoid:leading-[26px] ipad:leading-[29px]">
            {useCase.intro.paragraph}
          </div>
          <PrimaryButton icon={true}
            target="_self"
            href={`${useCase.intro.buttonLink}`}
            text={`${useCase.intro.buttonText}`}
          />
        </div>
        <div className='w-[300px] shrink-0'>
          <Image
            width={300}
            height={280}
            className='w-full h-auto'
            title='seo-feature-intro'
            src={`${useCase.intro.image}`}
            alt={`${useCase.name}`}
          />
        </div>
      </div>
    </div>
  );
};

export default UseCaseIntro;
