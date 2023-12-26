import React, { FC, Fragment } from 'react';
import { useFormik } from 'formik';

import styles from '@/app/planning/planning.module.css';
import { CompanyForm } from '@/types/planning';
import { DETAIL_LIMIT } from '@/data/constant';
import { useTutorialsContext } from '@/context/tutorials';
import NavigationButtons from '@/components/tutorial/NavigationButtons';

interface AddCompanyProps {
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

const AddCompany: FC<AddCompanyProps> = ({ formik }) => {
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } = useTutorialsContext();

  return (
    <>
      <div id='company-information' className={`${styles.div} w-full relative`}>
        <p className=" text-[15px] text-white not-italic font-medium leading-[normal] mb-6">
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
          <label
            className={`text-xs text-right mt-2 ${
              formik.errors.description && formik.touched.description
                ? 'text-rose-600'
                : 'text-primary-gray'
            }`}
          >
            {formik.values.description.length} / {DETAIL_LIMIT}
          </label>
        </div>

        {
            isInTutorialMode && tutorialCampaign === 'HOME' && currentGuideMode.mode === 'GENERAL' && (
              <Fragment>
                {/* <div className="absolute w-full h-full left-0 top-0 z-[999]"></div> */}
                <div className="absolute w-full top-full translate-y-[50px] flex justify-center tutorial-element">
                  <NavigationButtons />
                </div>
              </Fragment>
            )
        }
      </div>
    </>

  );
};

export default AddCompany;
