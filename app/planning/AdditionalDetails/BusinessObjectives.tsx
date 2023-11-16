import React from 'react';
import styles from '@/./app/planning/planning.module.css';
import { Input } from 'antd';

const BusinessObjectives = () => {
  return (
    <div className={`${styles.mainDiv} gap-[24px] mt-[16px]`}>
      <p className="w-[521px] text-[15px] h-[18px] text-[color:#B3ACFF]">
        8.&nbsp;Choose your business objectives
      </p>
      <div className={`gap-[16px] flex flex-col items-start self-stretch`}>
        <div className="flex gap-x-[16px] gap-y-[16px] flex-wrap">
          <button
            className={`inline-flex justify-center items-center gap-4 w-[137px] h-[40px] px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              false
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] w-[105px] h-[24px] justify-center items-center ">
              Organic&nbsp;Traffic
            </label>
          </button>

          <button
            className={`inline-flex justify-center w-[122px] h-[40px] items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              true
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] justify-center items-center ">
              Bounce&nbsp;Rate
            </label>
          </button>

          <button
            className={`inline-flex justify-center w-[137px] h-[40px] items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              true
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="w-[105px] h-[24px] inline-flex text-[15px] justify-center items-center ">
              Brand&nbsp;Visibility
            </label>
          </button>

          <button
            className={`inline-flex justify-center w-[183px] h-[40px]items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              true
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] justify-center items-center ">
              Content&nbsp;Engagement
            </label>
          </button>
          <button
            className={`inline-flex justify-center items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              true
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] justify-center items-center ">
              Expand&nbsp;SEO&nbsp;Footprint
            </label>
          </button>
          <button
            className={`inline-flex justify-center items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              false
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] justify-center items-center ">
              Improve&nbsp;Domain&nbsp;Authority
            </label>
          </button>
          <button
            className={`w-[97px] h-[40px] inline-flex justify-center items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              false
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] justify-center items-center ">
              Rankings
            </label>
          </button>
          <button
            className={`inline-flex justify-center items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]  ${
              true
                ? 'border border-[#ABABAB] text-white font-medium'
                : 'bg-[#35363A] text-[#ABABAB]'
            }`}
          >
            <label className="inline-flex text-[15px] justify-center items-center ">
              Competitive&nbsp;positioning
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessObjectives;
