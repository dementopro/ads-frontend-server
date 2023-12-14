import React, { FC } from 'react';
import styles from '@/app/planning/planning.module.css';
import { Input } from 'antd';
import { useFormik } from 'formik';
import { CompanyForm } from '@/types/planning';
import { DETAIL_LIMIT } from '@/data/constant';

interface AddCompanyProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  index: number;
}

const AddCompany: FC<AddCompanyProps> = ({ formik, index }) => {
  return (
    <>
      <div className={`${styles.subDiv}`}>
        <div className={`${styles.divHead}`}>
          {index}. Add information about your company
        </div>
        <div className='w-full flex android:flex-col desktop:flex-row gap-[14px]'>
          <div className='w-full flex flex-col gap-[5px] items-start'>
            <label className={`${styles.subHead}`}
              htmlFor='companyName'>
              Company Name<span className='text-rose-600'>*</span>
            </label>
            <Input
              type="text"
              placeholder={`Enter company name`}
              id="companyName"
              className={`${styles['input']} ${formik.errors.companyName && formik.touched.companyName
                ? 'border-rose-600'
                : 'border-[#3A3A3A]'
                }`}
              {...formik.getFieldProps('companyName')}
            />
            {formik.errors.companyName && formik.touched.companyName && (
              <label className="w-full text-[12px] text-rose-600">
                {formik.errors.companyName}
              </label>
            )}
          </div>
          <div className='w-full flex flex-col gap-[5px] items-start'>
            <label className={`${styles.subHead}`}
              htmlFor='websiteURL'>
              Website URL<span className='text-rose-600'>*</span>
            </label>
            <Input
              maxLength={50}
              type="text"
              placeholder={`Enter website URL`}
              id="websiteURL"
              className={`${styles['input']} ${formik.errors.websiteURL && formik.touched.websiteURL
                ? 'border-rose-600'
                : 'border-[#3A3A3A]'
                }`}
              {...formik.getFieldProps('websiteURL')}
            />
            {formik.errors.websiteURL && formik.touched.websiteURL && (
              <label className="w-full text-[12px] text-rose-600">
                {formik.errors.websiteURL}
              </label>
            )}
          </div>
        </div>
        <div className='w-full flex flex-col gap-[5px] items-start'>
          <label className={`${styles.subHead}`}
            htmlFor='description'>
            Company Description<span className='text-rose-600'>*</span>
          </label>
          <Input.TextArea
            maxLength={DETAIL_LIMIT}
            placeholder={`Enter your company description`}
            id="name"
            className={`${styles['textarea']} ${formik.errors.description && formik.touched.description
              ? 'border-rose-600'
              : 'border-[#3A3A3A]'
              }`}
            {...formik.getFieldProps('description')}
          />
          {formik.errors.description && formik.touched.description && (
            <label className="w-full text-[12px] text-rose-600">
              {formik.errors.description}
            </label>
          )}
        </div>
      </div>
    </>
  );
};

export default AddCompany;
