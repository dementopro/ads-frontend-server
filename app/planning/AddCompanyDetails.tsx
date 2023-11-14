import { CompanyForm } from '@/types/planning';
import styles from './planning.module.css';
import { useFormik } from 'formik';
import React, { FC } from 'react';

interface AddCompanyDetailsProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}
const AddCompanyDetails: FC<AddCompanyDetailsProps> = ({ formik }) => {
  return (
    <>
      <div className={`${styles.div} `}>
        <p className="w-[521px] text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
          2.&nbsp;What are you selling?
        </p>
        <div
          className={`w-[887px] ${
            true ? `max-h-[241px]` : `max-h-[141px]`
          } flex flex-col`}
        >
          <textarea
            className={`${styles.description} ${
              formik.errors.sellingDescription &&
              formik.touched.sellingDescription
                ? '!border-rose-600'
                : 'border-none'
            } `}
            placeholder="Enter your company selling description"
            style={{
              minHeight: '138px',
              maxHeight: '138px',
              overflowY: 'auto',
              scrollbarColor: 'inherit',
            }}
            {...formik.getFieldProps('sellingDescription')}
          />
        </div>
      </div>
      <div className="flex w-[932px] justify-between">
        <div className={`${styles.div} w-[48%]`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            3.&nbsp;Add your target audience
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`border bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 rounded-lg ${
                formik.errors.targetAudience && formik.touched.targetAudience
                  ? 'border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Target audience"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('targetAudience')}
            />
          </div>
        </div>
        <div className={`${styles.div} w-[48%]`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            4.&nbsp;Add ideal customer profile
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                formik.errors.idealCustomerProfile &&
                formik.touched.idealCustomerProfile
                  ? '!border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Ex: industry, geography, pain points"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('idealCustomerProfile')}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCompanyDetails;
