import { FC } from 'react';
import { CompanyDetailForm } from '@/types/planning';
import { Input } from 'antd';
import styles from '@/./app/planning/planning.module.css';

interface ContentTypeSectionProps {
  index: number;
  objectives: string[];
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
}

const BusinessObjectives: FC<ContentTypeSectionProps> = ({
  index,
  objectives,
  setFormData,
  formData,
}) => {
  return (
    <div className={`${styles.subDiv}`}>
      <div className={`${styles.divHead}`}>
        {index}. Choose your business objectives
      </div>
      <div className={`gap-[16px] flex flex-col items-start self-stretch`}>
        <div className="flex flex-wrap gap-[16px]">
          {objectives.map((objective, index) => (
            <button
              key={index}
              className={`flex justify-center items-center gap-[10px] px-[16px] py-[8px] rounded-[8px] border-1 ${formData.business_objectives.includes(objective)
                  ? 'border-white text-white font-medium'
                  : 'border-[#35363A] text-[#ABABAB] bg-[#35363A] font-regular'
                }`}
              onClick={() => {
                if (formData.business_objectives.includes(objective)) {
                  setFormData({
                    ...formData,
                    business_objectives: formData.business_objectives.filter((item) => item != objective)
                  })
                } else {
                  setFormData({
                    ...formData,
                    business_objectives: [
                      ...formData.business_objectives,
                      objective
                    ]
                  })
                }
              }}
            >
              {objective}
            </button>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default BusinessObjectives;
