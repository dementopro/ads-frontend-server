import React from 'react';
import styles from './planning.module.css';
import { Input } from 'antd';

const AddCompany = () => {
  return (
    <div className={`${styles.div} `}>
      <p className="w-[521px] text-[15px] text-[color:var(--primary-300,#FFFFFF)] not-italic font-medium leading-[normal]">
        1.&nbsp;Add information about your company
      </p>
      <div className="w-[887] flex flex-row gap-x-[65px]">
        <div
          className={`w-[411px] flex flex-col ${
            true ? 'h-[128px]' : 'h-[94px]'
          }`}
        >
          <label
            className="h-[18px] text-[15px] text-[color:var(--primary-300,#ABABAB)]"
            htmlFor="name"
          >
            *Company Name
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            id="name"
            className={`${styles['input']} ${
              true
                ? `border border-solid border-[#BD081B]`
                : `border border-solid border-[#3A3A3A]`
            }`}
          />
          {true ? (
            <label
              className="text-[15px] h-[18px]  mt-[16px] mb-[16px] text-[color:var(--error-300,#BD081B)]"
              htmlFor="name"
            >
              Field Required
            </label>
          ) : null}
        </div>
        <div
          className={`w-[411px] flex flex-col ${
            false ? 'h-[128px]' : 'h-[94px]'
          }`}
        >
          <label
            className="text-[15px] h-[18px] text-[color:var(--primary-300,#ABABAB)]"
            htmlFor="website"
          >
            *Website URL
          </label>
          <input
            type="text"
            placeholder="Enter website URL"
            id="website"
            className={`${styles['input']} ${
              false
                ? `border border-solid border-[#BD081B]`
                : `border border-solid border-[#3A3A3A]`
            }`}
          />
          {false ? (
            <label
              className="text-[15px] h-[18px] mt-[16px] mb-[16px] text-[color:var(--error-300,#BD081B)]"
              htmlFor="name"
            >
              Field Required
            </label>
          ) : null}
        </div>
      </div>
      <div
        className={`w-[887px] ${
          true ? `max-h-[241px]` : `max-h-[141px]`
        } flex flex-col`}
      >
        <label
          htmlFor="input1"
          className="w-[521px] h-[18px] text-[15px] text-base not-italic font-medium leading-[normal] text-[color:var(--primary-300,#ABABAB)]"
        >
          *Company Description
        </label>
        <Input.TextArea
          className={`${styles.description} ${
            true
              ? `border border-solid placeholder-shown:border-[#BD081B]`
              : `border border-solid border-[#3A3A3A] placeholder-shown:border-[#1B1C21]`
          } `} // Apply your custom class here
          placeholder="Enter your company description"
          style={{
            minHeight: '138px',
            maxHeight: '138px', // Ensure max-height is the same as height
            overflowY: 'auto', // Add vertical scroll when content exceeds the height
            scrollbarColor: 'inherit',
          }}
        />
        {true ? (
          <label
            className="text-[15px] h-[18px] mt-[16px] mb-[16px] text-[color:var(--error-300,#BD081B)]"
            htmlFor="name"
          >
            Field Required
          </label>
        ) : null}
      </div>
    </div>
    // </div>
  );
};

export default AddCompany;
