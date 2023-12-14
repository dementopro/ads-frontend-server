import { Input } from 'antd';
import React, { useEffect } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';

const OnPage = () => {
  const { onpage } = useSeoAnalyzerContext();
  const router = useRouter();

  return (
    <div className={`${styles.subDiv} overflow-x-auto`}>
      {onpage.map((issue, i) => (
        <div className={`${styles.recDiv}`} key={`onpage_issue_${i}`}>
          <div className='flex flex-col gap-[14px] items-start justify-start'>
            <div className='flex flex-row gap-[10px] text-white text-[15px]'>
              <div> ⭐ </div>
              <div> Recommendations </div>
            </div>
            <div className='text-wihte text-[15px]'>
              SEO Technical Optimizations
            </div>
            <div className='text-[#ABABAB] text-[14px]'>
              We found the following from your URL {issue.url}
            </div>
            {issue.warnings.map((val, i) => (
              <div key={i} className="text-[14px] text-[#ABABAB] whitespace-pre-wrap" style={{ wordWrap: "break-word", overflowWrap: "anywhere" }}>
                - {val}
              </div>
            ))}
          </div>
          <button
            className={`${styles.mainButton} w-full bg-[#844FFF]`}
            onClick={() => {
              router.push(`/contentType/seo?type=0&url=${issue.url}`);
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default OnPage;
