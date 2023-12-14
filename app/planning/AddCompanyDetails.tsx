"use client";
import React, { FC, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import axios from 'axios';
import { message } from 'antd';
import { useFormik } from 'formik';
import { useDisclosure } from '@nextui-org/react';

import GoogleAnalyticsModal from "@/app/planning/Analytics/GoogleAnalyticsModal";
import { CompanyForm } from '@/types/planning';
import styles from './planning.module.css';
import { DETAIL_LIMIT } from '@/data/constant';
import { popupCenter } from '@/utils/popup';

interface AddCompanyDetailsProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddCompanyDetails: FC<AddCompanyDetailsProps> = ({ formik }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isAnalyticsOAuthDone, setIsAnalyticsOAuthDone] = useState<boolean>(false);
  const [analyticsData, setAnalyticsData] = useState([]);
  const { isOpen: isGoogleAnalyticsModalOpen, onOpen: onOpenGoogleAnalyticsModal, onOpenChange: onOpenGoogleAnalyticsModalChange } = useDisclosure();
  const { data: session, status } = useSession();

  const handleGoogleAnalyticsOAuth = async () => {
    popupCenter("/auth/google", "Google Analytics Sign In", () => {
      setIsAnalyticsOAuthDone(true);
    });
  }

  useEffect(() => {
    (async () => {
      if (status === "authenticated" && formik.values.websiteURL && isAnalyticsOAuthDone) {
        try {
          const analyticsResponse = await axios.post(`/api/planning/analytics?site=${formik.values.websiteURL}`, {
            accessToken: session.accessToken,
            refreshToken: session.refreshToken
          });
          messageApi.success("Fetched analysis data");
          setIsAnalyticsOAuthDone(false);
          setAnalyticsData(analyticsResponse as any);
          onOpenGoogleAnalyticsModal();
        } catch (error) {
          messageApi.error("Something went wrong");
        }
      }
    })();
  }, [session, status, formik, messageApi, onOpenGoogleAnalyticsModal, isAnalyticsOAuthDone]);

  return (
    <>
      {contextHolder}
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            3. Add your target audience*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              maxLength={DETAIL_LIMIT}
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
            <label
              className={`text-xs text-right mt-2 ${
                formik.errors.targetAudience && formik.touched.targetAudience
                  ? 'text-rose-600'
                  : 'text-primary-gray'
              }`}
            >
              {formik.values.targetAudience.length} / {DETAIL_LIMIT}
            </label>
          </div>
        </div>
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            4. Add ideal customer profile*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              maxLength={DETAIL_LIMIT}
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
            <label
              className={`text-xs text-right mt-2 ${
                formik.errors.idealCustomerProfile &&
                formik.touched.idealCustomerProfile
                  ? 'text-rose-600'
                  : 'text-primary-gray'
              }`}
            >
              {formik.values.idealCustomerProfile.length} / {DETAIL_LIMIT}
            </label>
          </div>
        </div>
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            5. Add your competitors*
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              maxLength={DETAIL_LIMIT}
              className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                formik.errors.competitors && formik.touched.competitors
                  ? '!border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Who is currently ranking in your niche?"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('competitors')}
            />
            <label
              className={`text-xs text-right mt-2 ${
                formik.errors.competitors && formik.touched.competitors
                  ? 'text-rose-600'
                  : 'text-primary-gray'
              }`}
            >
              {formik.values.competitors.length} / {DETAIL_LIMIT}
            </label>
          </div>
        </div>

        <div className={`${styles.googleDiv} col-span-12 lg:col-span-6 !mt-0`}>
          <div className="flex flex-col w-[521px] text-[15px] h-[43px] gap-[8px]">
            <p className="w-[521px] text-[15px] h-[18px] text-white">
              6. Connect your historical data (optional)
            </p>
            <p className="w-[521px] text-[15px] h-[17px] text-[color:var(--primary-300,#ABABAB)]">
              Select for 1 click authentication
            </p>
          </div>
          <div className="flex flex-row gap-[24px]">
            <button className="inline-flex justify-center items-center gap-2 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB] cursor-pointer" onClick={handleGoogleAnalyticsOAuth}>
              <Image
                width={18}
                height={18}
                src={'/images/admin/plan/google-analytics-svgrepo-com.svg'}
                alt="#"
              />
              <label className="inline-flex text-[15px] min-h-[20px] min-w-[112px] justify-center items-center cursor-pointer">
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
              <label className="inline-flex text-[15px] min-h-[20px] min-w-[64px] justify-center items-center cursor-pointer">
                Semrush
              </label>
            </button>
          </div>
        </div>
      </div>
      <GoogleAnalyticsModal isOpen={isGoogleAnalyticsModalOpen} onOpenChange={onOpenGoogleAnalyticsModalChange} formik={formik} analyticsData={analyticsData as []} />
    </>
  );
};

export default AddCompanyDetails;
