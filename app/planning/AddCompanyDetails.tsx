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
      
      {/* <div className="flex w-full justify-between"> */}
        <div className={`${styles.div} w-full`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            4.&nbsp;Add your target audience
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
        <div className={`${styles.div} w-full`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            5.&nbsp;Add ideal customer profile
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
        <div className={`${styles.div} w-full`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            6.&nbsp;Add your competitors
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                formik.errors.competitors &&
                formik.touched.competitors
                  ? '!border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Who is currently ranking in your niche?"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('competitors')}
            />
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default AddCompanyDetails;
