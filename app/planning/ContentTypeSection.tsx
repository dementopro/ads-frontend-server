import React, { FC, useEffect, useState } from 'react';
import styles from './planning.module.css';
import { CompnayDetailForm } from '@/types/planning';

interface ContentTypeSectionProps {
  fromData: CompnayDetailForm;
  setFromData: (fromData: CompnayDetailForm) => void;
}
const ContentTypeSection: FC<ContentTypeSectionProps> = ({
  setFromData,
  fromData,
}) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    let temp = { ...fromData };
    temp['content_type'] = activeButtonIndex != 1 ? 'Seo' : 'Social Media';
    setFromData(temp);
  }, [activeButtonIndex]);

  return (
    <div className={`${styles.mainDiv} mt-[32px]`}>
      <p className="w-[521px] text-[color:var(--primary-300,#FFFFFF)] h-[18px] mb-[24px] not-italic font-medium leading-[normal]">
        2.&nbsp;Choose your content type
      </p>
      <div className="flex items-start gap-[32px] self-stretch h-[40px]">
        <button
          className={`flex justify-center items-center text-[15px] w-[63px] h-[40px] rounded-lg px-[16px] py-[8px] rounded-lg border-solid ${
            activeButtonIndex === 0
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setActiveButtonIndex(0);
          }}
        >
          <span className="w-[31px] h-[24px] text-[#ABABAB] text-[15px]">
            SEO
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[123px] h-[40px] rounded-lg px-[16px] py-[8px] rounded-lg border-solid ${
            activeButtonIndex === 1
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setActiveButtonIndex(1);
          }}
        >
          <span className="w-[92px] h-[24px] text-[#ABABAB] text-[15px]">
            Social&nbsp;Media
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContentTypeSection;
