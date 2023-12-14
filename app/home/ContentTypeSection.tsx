import React, { FC, useEffect, useState } from 'react';
import { CompanyDetailForm } from '@/types/planning';
import styles from '@/app/planning/planning.module.css';

interface ContentTypeSectionProps {
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
  index: number;
}
const ContentTypeSection: FC<ContentTypeSectionProps> = ({
  setFormData,
  formData,
  index,
}) => {
  
  const setContentType = (type: number) => {
    let temp = { ...formData };
    temp['content_type'] = type == 1 ? 'Social Media' : type == 2 ? 'Email Marketing' : "SEO";
    setFormData(temp);
  };

  const contents = [
    {
      key: 0,
      content: 'SEO'
    },
    {
      key: 1,
      content: 'Social Media'
    },
    {
      key: 2,
      content: 'Email Marketing'
    }
  ];

  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Choose your content type
      </div>
      <div className="flex flex-wrap gap-[16px]">
        {contents.map((item, index) => (
          <button
            key={index}
            className={`flex justify-center items-center gap-[10px] px-[16px] py-[8px] rounded-[8px] ${formData.content_type == item.content
              ? 'border-1 border-white text-white font-medium'
              : 'border-1 border-[#35363A] text-[#ABABAB] bg-[#35363A] font-regular'
              }`}
            onClick={() => {
              setContentType(item.key);
            }}
          >
            {item.content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ContentTypeSection;
