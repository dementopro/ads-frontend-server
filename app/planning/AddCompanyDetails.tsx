import { CompanyForm } from '@/types/planning';
import styles from './planning.module.css';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import Image from 'next/image';

interface AddCompanyDetailsProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddCompanyDetails: FC<AddCompanyDetailsProps> = ({ formik }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            3. Add your target audience*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              maxLength={2000}
              className={`border bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 rounded-lg ${
                formik.errors.targetAudience && formik.touched.targetAudience
                  ? 'border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Ex: Gender, Age, Interests & Hobbies"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('targetAudience')}
            />
          </div>
        </div>
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            4. Add ideal customer profile*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              maxLength={2000}
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
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            5. Add your competitors*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              maxLength={2000}
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

        <div className={`${styles.googleDiv} col-span-12 lg:col-span-6 !mt-0`}>
          <div className="flex flex-col w-[521px] text-[15px] h-[43px] gap-[8px]">
            <p className="w-[521px] text-[15px] h-[18px] text-[color:#B3ACFF]">
              6. Connect your historical data (optional)
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
      </div>
    </>
  );
};

export default AddCompanyDetails;
