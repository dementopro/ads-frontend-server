'use client';

import React, { FC } from 'react';
import { BiFileBlank } from 'react-icons/bi';
import { useFormik } from 'formik';

// import PinterestAnalyticsModal from "@/app/planning/Analytics/PinterestAnalyticsModal";
import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import { useSeoAnalyzerContext } from '@/context/seo';
import { DETAIL_LIMIT } from '@/data/constant';
import styles from '../planning.module.css';

const options = ['Video', 'Audio Only'];

interface VideoDetailsProps {
  formData: CompanyDetailForm;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
  setFormData: (formData: CompanyDetailForm) => void;
}

const VideoDetails: FC<VideoDetailsProps> = ({
  formData,
  formik,
  setFormData,
}) => {
  const { company, setCompany } = useSeoAnalyzerContext();

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            3.&nbsp;Add your target audience*
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
            4.&nbsp;Add ideal customer profile*
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
              placeholder="Ex: Title, income level, pain points, goals & aspirations, buying habits, device usage"
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
            5.&nbsp;Upload media or audio
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <div className="flex flex-wrap items-center gap-6">
              {company.assets &&
                company.assets.map((img, i) => (
                  <span key={i} className="text-sm text-primary-gray">
                    {img.name}
                  </span>
                ))}
            </div>
            <label
              className="flex items-center gap-2 mt-4 cursor-pointer text-primary-purple"
              htmlFor="upload_image"
            >
              <BiFileBlank />
              Upload Asset
              <input
                type="file"
                multiple
                id="upload_image"
                accept="image/*"
                onChange={(e) => {
                  if (
                    e.currentTarget.files &&
                    e.currentTarget.files.length > 0
                  ) {
                    const assets = [
                      ...new Array(e.currentTarget.files.length),
                    ].map((_, i) => e.currentTarget.files?.item(i) as File);
                    setCompany({
                      ...company,
                      name: formik.values.companyName,
                      business_objectives: formData.business_objectives,
                      infographics_styles: formData.infographics_styles,
                      competitors: formik.values.competitors,
                      content_type: formData.content_type,
                      customer_profile: formik.values.idealCustomerProfile,
                      description: formik.values.description,
                      product_description: formik.values.sellingDescription,
                      target_audice: formik.values.targetAudience,
                      website: formik.values.websiteURL,
                      email: formik.values.email,
                      marketing_template: formik.values.marketing_template,
                      schedule: formik.values.schedule,
                      socialMediaType: formik.values.socialMediaType,
                      url: formik.values.url,
                      assets,
                      file_type: formData.file_type,
                    });
                  }
                }}
                hidden
              />
            </label>
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-white not-italic font-medium leading-[normal]">
            6.&nbsp;Choose a file type
          </p>
          <div className={`gap-[16px] flex flex-col items-start self-stretch`}>
            <div className="flex gap-x-[16px] gap-y-[16px] flex-wrap">
              {options.map((val, i) => (
                <button
                  key={i}
                  className={`px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB] whitespace-nowrap ${
                    formData.file_type === val
                      ? 'outline-1 outline outline-[#ABABAB] text-white font-medium'
                      : 'bg-[#35363A] text-[#ABABAB]'
                  }`}
                  onClick={() => {
                    setFormData({
                      ...formData,
                      file_type: val,
                    });
                  }}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoDetails;
