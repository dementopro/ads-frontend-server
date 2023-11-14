import React, { FC } from 'react';
import styles from './planning.module.css';
import { Input } from 'antd';
import { useFormik } from 'formik';
import { CompanyForm } from '@/types/planning';

interface AddCompanyProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddCompany: FC<AddCompanyProps> = ({ formik }) => {
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
            className="text-primary-gray mb-2 text-base"
            htmlFor="CompanyName"
          >
            *Company Name
          </label>
          <input
            placeholder="Enter your Company Name"
            id="CompanyName"
            className={`${styles['input']} ${
              formik.errors.companyName && formik.touched.companyName
                ? '!border-rose-600'
                : 'border-none'
            }`}
            {...formik.getFieldProps('CompanyName')}
          />
        </div>
        <div
          className={`w-[411px] flex flex-col ${
            false ? 'h-[128px]' : 'h-[94px]'
          }`}
        >
          <label
            className="text-primary-gray mb-2 text-base"
            htmlFor="websiteURL"
          >
            *Website URL
          </label>
          <input
            placeholder="Enter Website URL"
            id="websiteURL"
            className={`${styles['input']} ${
              formik.errors.websiteURL && formik.touched.websiteURL
                ? '!border-rose-600'
                : 'border-none'
            }`}
            {...formik.getFieldProps('websiteURL')}
          />
        </div>
      </div>
      <div
        className={`w-[887px] ${
          true ? `max-h-[241px]` : `max-h-[141px]`
        } flex flex-col`}
      >
        <label
          htmlFor="description"
          className="w-[521px] h-[18px] text-[15px] text-base not-italic font-medium leading-[normal] text-[color:var(--primary-300,#ABABAB)]"
        >
          *Company Description
        </label>
        <textarea
          className={`${styles.description} ${
            formik.errors.description && formik.touched.description
              ? '!border-rose-600'
              : 'border-none'
          } `}
          placeholder="Enter your company description"
          style={{
            minHeight: '138px',
            maxHeight: '138px',
            overflowY: 'auto',
            scrollbarColor: 'inherit',
          }}
          {...formik.getFieldProps('description')}
        />
      </div>
    </div>
    // </div>
  );
};

export default AddCompany;
