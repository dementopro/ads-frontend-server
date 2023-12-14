import React, { useEffect } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';

const GmailRecommendation = () => {
  const { emailInstruction } = useSeoAnalyzerContext();
  const router = useRouter();

  return (
    <div className={`${styles.subDiv} overflow-x-auto`}>
      <div className={`${styles.recDiv}`}>
        <div className='flex flex-col gap-[14px] items-start justify-start'>
          <div className='flex flex-row gap-[10px] text-white text-[15px]'>
            <div> ⭐ </div>
            <div> Recommendations </div>
          </div>
          <div className='flex flex-row gap-[14px] items-center'>
            <div className='w-5/6 flex flex-col gap-[5px]'>
              <div className='text-wihte text-[15px]'>
                {emailInstruction.email_template_type}
              </div>
              <div className='text-[#ABABAB] text-[14px]'>
                {`Based on the email marketing templates input, we've identified your input as ${emailInstruction.email_template_type.toLowerCase()}. Based on your target audience and business objectives we recommend the following:`}
              </div>

              {emailInstruction.email_options.map((option, i) => (
                <div key={i} className="text-[14px] text-[#ABABAB] whitespace-pre-wrap" style={{ wordWrap: "break-word", overflowWrap: "anywhere" }}>
                  - {`${option.option_name} email option ${i + 1}: ${option.characteristic}`}
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className={`${styles.mainButton} bg-[#844FFF]`}
          onClick={() => {
            router.push(`/contentType/emailMarketing?type=0`);
          }}>
          View
        </button>
      </div>
    </div>
  );
};

export default GmailRecommendation;
