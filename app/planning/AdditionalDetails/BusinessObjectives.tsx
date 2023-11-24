import { FC, useEffect, useState } from 'react';

import { CompanyDetailForm } from '@/types/planning';
import { Input } from 'antd';
import styles from '@/./app/planning/planning.module.css';

interface ContentTypeSectionProps {
  title: string;
  options: string[];
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
}

const BusinessObjectives: FC<ContentTypeSectionProps> = ({
  title,
  options,
  setFormData,
  formData,
}) => {
  return (
    <div className={`${styles.mainDiv} gap-[24px] mt-[16px]`}>
      <p className="w-[521px] text-[15px] h-[18px] text-[color:#B3ACFF]">
        { title }
      </p>
      <div className={`gap-[16px] flex flex-col items-start self-stretch`}>
        <div className="flex gap-x-[16px] gap-y-[16px] flex-wrap">
          {
            options.map((val, i) => (
              <button
                key={i}
                className={`px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB] whitespace-nowrap ${
                  formData.business_objectives.includes(val)
                    ? 'outline-1 outline outline-[#ABABAB] text-white font-medium'
                    : 'bg-[#35363A] text-[#ABABAB]'
                }`}
                onClick={() => {
                  if (formData.business_objectives.includes(val)) {
                    setFormData({
                      ...formData,
                      business_objectives: formData.business_objectives.filter((item) => item != val)
                    })
                  } else {
                    setFormData({
                      ...formData,
                      business_objectives: [
                        ...formData.business_objectives,
                        val
                      ]
                    })
                  }
                }}
              >
                { val }
              </button>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default BusinessObjectives;
