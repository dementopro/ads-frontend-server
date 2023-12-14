import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import Image from 'next/image';

const HistoricalData = () => {
  return (
    <div className={`${styles.googleDiv}`}>
      <div className="flex flex-col w-[521px] text-[15px] h-[43px] gap-[8px]">
        <p className="w-[521px] text-[15px] h-[18px] text-[color:#B3ACFF]">
          6.&nbsp;Connect your historical data (optional)
        </p>
        <p className="w-[521px] text-[15px] h-[17px] text-[color:var(--primary-300,#ABABAB)]">
          Select for 1 click authentication
        </p>
      </div>
      <div className="flex flex-row gap-[24px]">
        <button className="inline-flex justify-center items-center gap-2 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]">
          <Image
            width={18}
            height={18}
            src={'/images/admin/plan/google-analytics-svgrepo-com.svg'}
            alt="#"
          />
          <label className="inline-flex text-[15px] min-h-[20px] min-w-[112px] justify-center items-center ">
            Google Analytics
          </label>
        </button>
        <button className="w-[122px] h-[44px] inline-flex justify-center items-center gap-2 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]">
          <Image
            width={18}
            height={18}
            src={'/images/admin/plan/Vector.svg'}
            alt="#"
          />
          <label className="inline-flex text-[15px] min-h-[20px] min-w-[64px] justify-center items-center ">
            Semrush
          </label>
        </button>
      </div>
    </div>
  );
};

export default HistoricalData;
