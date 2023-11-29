import React, { FC } from 'react';
import styles from '@/app/planning/planning.module.css';
import { Input } from 'antd';
import { useFormik } from 'formik';
import { CompanyForm } from '@/types/planning';
import { DETAIL_LIMIT } from '@/data/constant';

interface AddCompanyProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddCompany: FC<AddCompanyProps> = ({ formik }) => {
  return (
    <>
      <div className={`${styles.div} w-full `}>
        <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal] mb-6">
          1.&nbsp;Add information about your company
        </p>
        <div className="w-full flex flex-row gap-x-[65px]">
          <div
            className={`w-[50%] flex flex-col h-[128px]`}
          >
            <label
              className="mb-2 text-base text-primary-gray"
              htmlFor="companyName"
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
              {...formik.getFieldProps('companyName')}
            />
            {formik.errors.companyName && formik.touched.companyName && (
              <label className="mt-2 text-xs text-rose-600">
                {formik.errors.companyName}
              </label>
            )}
          </div>
          <div
            className={`w-[50%] flex flex-col ${
              false ? 'h-[128px]' : 'h-[94px]'
            }`}
          >
            <label
              className="mb-2 text-base text-primary-gray"
              htmlFor="websiteURL"
            >
              *Website URL
            </label>
            <input
              maxLength={50}
              placeholder="Enter Website URL"
              id="websiteURL"
              className={`${styles['input']} ${
                formik.errors.websiteURL && formik.touched.websiteURL
                  ? '!border-rose-600'
                  : 'border-none'
              }`}
              {...formik.getFieldProps('websiteURL')}
            />
            {formik.errors.websiteURL && formik.touched.websiteURL && (
              <label className="mt-2 text-xs text-rose-600">
                {formik.errors.websiteURL}
              </label>
            )}
          </div>
        </div>
        <div
          className={` ${
            true ? `max-h-[241px]` : `max-h-[141px]`
          } flex flex-col w-full`}
        >
          <label
            htmlFor="description"
            className="h-[18px] text-[15px] text-base not-italic font-medium leading-[normal] text-[color:var(--primary-300,#ABABAB)]"
          >
            *Company Description
          </label>
          <textarea
            className={`${styles.description} ${
              formik.errors.description && formik.touched.description
                ? '!border-rose-600'
                : 'border-none'
            } `}
            maxLength={DETAIL_LIMIT}
            placeholder="Enter your company description"
            style={{
              minHeight: '138px',
              maxHeight: '138px',
              overflowY: 'auto',
              scrollbarColor: 'inherit',
            }}
            {...formik.getFieldProps('description')}
          />
          {formik.errors.description && formik.touched.description && (
            <label className="mt-2 text-xs text-rose-600">
              {formik.errors.description}
            </label>
          )}
        </div>
      </div>
    </>

  );
};

export default AddCompany;
