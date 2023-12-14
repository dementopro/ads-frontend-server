import React, { useEffect } from 'react';

import { Input } from 'antd';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';

const OffPage = () => {
  const { offpage } = useSeoAnalyzerContext();
  const router = useRouter();

  return (
    <div className={`${styles.subDiv} overflow-x-auto`}>
      {offpage.map((issue, i) => (
        <div className={`${styles.recDiv}`} key={`onpage_issue_${i}`}>
          <div className='flex flex-col gap-[14px] items-start justify-start'>
            <div className='flex flex-row gap-[10px] text-white text-[15px]'>
              <div> ⭐ </div>
              <div> Recommendations </div>
            </div>
            <div className='flex flex-row gap-[14px] items-center'>
              <div className='w-5/6 flex flex-col gap-[5px]'>
                <div className='text-wihte text-[15px]'>
                  {issue.url}
                </div>
                <div className='text-[#ABABAB] text-[14px]'>
                  {`We found the following to increase your URL ${issue.url}'s authority.`}
                </div>
                {issue.warnings.map((val, i) => (
                  <div key={i} className="text-[14px] text-[#ABABAB] whitespace-pre-wrap" style={{ wordWrap: "break-word", overflowWrap: "anywhere" }}>
                    - {val}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <button
            className={`${styles.mainButton} w-full bg-[#844FFF]`}
            onClick={() => {
              router.push(`/contentType/seo?type=1&url=${issue.url}`);
            }}
          >
            View
          </button>
        </div>
      ))}
    </div >
  );
};

export default OffPage;
