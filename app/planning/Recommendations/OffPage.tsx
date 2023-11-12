import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';

const OffPage = () => {
  return (
    <div className={`${styles.mainDiv} gap-y-[24px]`}>
      <div className="flex flex-row gap-x-[8px]">
        <p className="w-[16px] h-[16px]">⭐</p>
        <p className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
          Recommendations - Off page Optimizations
        </p>
      </div>
      <div className="flex flex-col gap-y-[24px]">
        <div className="flex flex-col gap-y-[16px]">
          <p className="text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
            Low off page impact
          </p>
          <p className="text-[15px] h-[17px] text-[color:var(--primary-300,#ABABAB)]">
            Low impact of search engine ranking that fall outside of your
            website
          </p>
        </div>
        <div className="flex items-center gap-8 self-stretch">
          <div className="flex flex-col w-[695px] h-[51px] justify-center items-start gap-4 flex-[1_0_0]">
            <p className="self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
              Solution
            </p>
            <p className="text-[15px] h-[17px] text-[color:var(--primary-300,#ABABAB)]">
              Off page tasks have been identified to help improve search engine
              ranking
            </p>
          </div>
          <div
            className={`flex h-11 w-[109px] justify-center items-center gap-2 py-[6px] px-[16px] rounded-lg bg-[#844FFF]`}
          >
            <button className="inline-flex w-[109px] h-[20px] text-white text-center not-italic font-semibold leading-5">
              <span className="w-[77px] h-[20px] text-[13.5px]">Implement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffPage;
