'use client'
import React, { use } from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/common/PrimaryButton';
import { IUseCase } from '@/types/useCase';

type Props = {
  useCase: IUseCase
}

const Conclusion = ({ useCase }: Props) => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[0px] desktop:my-[60px] bg-black">
      <div className={`w-full p-[2px] rounded-[20px] bg-light-purple-gradient cursor-pointer rounded-[27px]`}>
        <div className="flex flex-col justify-center items-center gap-[32px] android:py-[16px] android:px-[32px] ipad:py-[32px] ipad:px-[64px] bg-black relative rounded-[25px] drop-shadow-[0_16px_80px_rgba(104,89,255,0.20)]">
          <div className="text-white text-center font-poppins font-semibold text-[24px]">
            {useCase.conclusion.whiteHead} <span className="bg-brand-color text-transparent bg-clip-text">{useCase.conclusion.colorHead}</span>
          </div>
          <div className="text-[16px] text-center font-open-sans font-regular text-white justify-center items-center">
            {useCase.conclusion.paragraph}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
