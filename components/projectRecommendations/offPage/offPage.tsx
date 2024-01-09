import React, { useEffect } from 'react';

import { Input } from 'antd';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';

interface OffPageProps {
  offpage: any;
}

const OffPage: React.FC<OffPageProps> = ({ offpage }) => {
  const router = useRouter();

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      {offpage.map((issue: any, i: any) => (
        <div
          className={`${styles.mainDiv} gap-y-[24px] w-full`}
          key={`onpage_issue_${i}`}
        >
          <div className="flex flex-row gap-x-[8px]">
            <p className="w-[16px] h-[16px]">⭐</p>
            <p className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
              Recommendations
            </p>
          </div>
          <p className="text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
            {issue.url}
          </p>
          <p className="text-[15px] text-[color:var(--primary-300,#ABABAB)]">
            {`We found the following to increase your URL ${issue.url}'s authority.`}
          </p>
          <div className="block w-full">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex-none block">
                  {issue.warnings.map((val: any, i: any) => (
                    <p
                      key={i}
                      className="text-[15px] text-[color:var(--primary-300,#ABABAB)] whitespace-pre-wrap"
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      - {val}
                    </p>
                  ))}
                </div>
              </div>
              <button
                className="px-5 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple"
                onClick={() => {
                  router.push(`/contentType/seo?type=1&url=${issue.url}`);
                }}
              >
                <span className="text-[13.5px]">View</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffPage;
