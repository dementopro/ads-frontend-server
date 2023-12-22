import React, { FC, useEffect, useState } from 'react';
import { CompanyDetailForm } from '@/types/planning';
import styles from '@/app/planning/planning.module.css';

interface ContentTypeSectionProps {
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
}
const ContentTypeSection: FC<ContentTypeSectionProps> = ({
  setFormData,
  formData,
}) => {
  const setContentType = (type: number) => {
    let temp = { ...formData };
    temp['content_type'] = (() => {
      switch (type) {
        case 0:
          return 'SEO';
        case 1:
          return 'Social Media';
        case 2:
          return 'Email Marketing';
        case 3:
          return 'Infographics';
        default:
          return '';
      }
    })();
    setFormData(temp);
  };

  return (
    <div className={`${styles.mainDiv} mt-[32px]`}>
      <p className="w-full text-white h-[18px] mb-[24px] not-italic font-medium leading-[normal]">
        2.&nbsp;Choose your content type
      </p>
      <div className="flex items-start gap-[32px] self-stretch h-[40px]">
        <button
          className={`flex justify-center items-center text-[15px] w-[63px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === "seo"
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(0);
          }}
        >
          <span className="w-[31px] h-[24px] text-[#ABABAB] text-[15px]">
            SEO
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[123px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === "social media"
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(1);
          }}
        >
          <span className="w-[92px] h-[24px] text-[#ABABAB] text-[15px]">
            Social&nbsp;Media
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[148px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === "email marketing"
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(2);
          }}
        >
          <span className="w-[120px] h-[24px] text-[#ABABAB] text-[15px]">
            Email&nbsp;Marketing
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[148px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === "infographics"
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(3);
          }}
        >
          <span className="w-[120px] h-[24px] text-[#ABABAB] text-[15px]">
            Infographics
          </span>
        </button>
      </div>
    </div>
  );
};

export default ContentTypeSection;
