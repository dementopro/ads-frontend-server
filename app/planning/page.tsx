'use client';

import Image from 'next/image';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import ReactGATag from '@/components/ReactGATag';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import AdminLayout from '@/layout/admin';
import {
  CompanyForm,
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';
import { message, Spin } from 'antd';
import React, { ChangeEvent, useEffect, useState, useContext } from 'react';
import axios from '@/lib/axios';
import { AccountContext } from '@/context/account';
import HorizontalStepper from './HorizontalStepper';
import AddCompany from './AddCompany';
import ContentTypeSection from './ContentTypeSection';
import { CompnayDetailForm } from '@/types/planning';
import TargetAudience from './AdditionalDetails/TargetAudience';
import CustomerProfile from './AdditionalDetails/CustomerProfile';
import Competitors from './AdditionalDetails/Competitors';
import AddInfoButton from './AddInfoButton';
import HistoricalData from './AdditionalDetails/HistoricalData';
import BusinessObjectives from './AdditionalDetails/BusinessObjectives';
import SubmitAndBackButton from './AdditionalDetails/SubmitAndBackButton';
import BackButton from './Recommendations/BackButton';
import OnPage from './Recommendations/OnPage';
import styles from './planning.module.css';
import OffPage from './Recommendations/OffPage';
import { FormikHelpers, useFormik } from 'formik';
import { CompanyValidate } from '@/lib/validate';
import AddCompanyDetails from './AddCompanyDetails';

async function getHistory(): Promise<IPlanningObj[]>;
async function getHistory(id: number): Promise<IPlanningObj>;
async function getHistory(id?: number) {
  try {
    const res = await axios({
      url: `/api/planning/history?id=${id}`,
      method: 'GET',
    });
    if (res.status !== 200) {
      throw new Error('Failed to fetch data');
    }
    const data: IPlanningHistory = res.data;
    if (data.status === SUCCESS_CODE) {
      if (id) {
        return data.planning;
      }
      return data.planning_list;
    } else {
      console.log('data', data);
      return [];
    }
  } catch (err) {
    console.log('error: ', err);
    return [];
  }
}

const PlanningPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<IPlan | null>(null);
  const [planList, setPlanList] = useState<IPlanningObj[] | null>(null);
  const [planId, setPlanId] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotEnoughCredits, setShowNotEnoughCredits] = useState(false);
  const [fromData, setFromData] = useState<CompnayDetailForm>({
    name: '',
    website: '',
    description: '',
    product_description: '',
    target_audice: '',
    content_type: '',
    customer_profile: '',
    competitors: '',
    business_objectives: [],
  });

  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);

  const formik = useFormik<CompanyForm>({
    initialValues: {
      companyName: '',
      websiteURL: '',
      description: '',
      sellingDescription: '',
      idealCustomerProfile: '',
      targetAudience: '',
      competitors:''
    },
    onSubmit,
    validate: CompanyValidate,
  });

  async function onSubmit(
    values: CompanyForm,
    actions: FormikHelpers<CompanyForm>
  ) {}

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value);
  }

  return (
    <AdminLayout>
      {contextHolder}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/planning',
          title: 'Planning - AdsGency AI',
        }}
      />
      <NotEnoughtCredits
        show={showNotEnoughCredits}
        setShow={() => setShowNotEnoughCredits(false)}
      />

      <Spin spinning={isGenerating} wrapperClassName="w-[80%] m-auto max-w-[1500px] text-[15px]">
        <section className="flex flex-col justify-center">
          {activeButtonIndex == 0 && (
            <div className="flex gap-x-[8px] mb-6">
              <p className="w-[24px] h-[24px] text-black text-2xl not-italic font-medium leading-[normal]">
                ✨
              </p>
              <h1 className="text-2xl w-full h-[29px] font-medium text-white">
                Get&nbsp;Started
              </h1>
            </div>
          )}
          {activeButtonIndex == 1 && (
            <div className="flex flex-col mb-[16px] gap-[16px] text-2xl font-medium text-white">
              <div className="flex gap-x-[8px]">
                <p className="w-[24px] h-[24px] text-black text-2xl not-italic font-medium leading-[normal]">
                  📋
                </p>
                <h1 className="text-2xl w-full h-[29px] font-medium text-white">
                  Let’s gather some more information
                </h1>
              </div>
              <div className="h-[44px] text-white text-center text-[15px] not-italic font-semibold leading-5 ">
                <button
                  className={`flex justify-center min-w-[169px] h-[44px] text-[15px] items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]
                  `}
                  disabled={true}
                >
                  {fromData?.content_type === 'Social Media' ? (
                    <span className="w-[197px] h-[20px] text-[#ABABAB] text-[15px] not-italic font-medium leading-5">
                      Content&nbsp;Type: {fromData?.content_type}
                    </span>
                  ) : (
                    <span className="w-[137px] h-[20px] text-[#ABABAB] text-[15px] not-italic font-medium leading-5">
                      Content&nbsp;Type: {fromData?.content_type.toUpperCase()}
                    </span>
                  )}
                </button>
              </div>
            </div>
          )}
          {activeButtonIndex == 2 && (
            <div className="flex flex-col mb-[16px] gap-[16px] text-2xl font-medium text-white">
              <div className="flex">
                <p className="w-[24px] h-[24px]">💡</p>
                <h1 className="text-2xl font-medium text-white">
                  Recommendations
                </h1>
              </div>
              <div className="h-[44px] text-white text-center text-[15px] not-italic font-semibold leading-5 ">
                <button
                  className={`flex justify-center min-w-[169px] h-[44px] text-[15px] items-center gap-4 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]
                  `}
                  disabled={true}
                >
                  Content type: {fromData?.content_type.toUpperCase()}
                </button>
              </div>
            </div>
          )}
          <HorizontalStepper
            activeButtonIndex={activeButtonIndex}
            setActiveButtonIndex={setActiveButtonIndex}
          />
        </section>
        {activeButtonIndex == 0 && (
          <div className="flex flex-col text-[15px]">
            <AddCompany formik={formik} />
             {/* <AddCompanyDetails formik={formik} /> */}
            <ContentTypeSection setFromData={setFromData} fromData={fromData} />
            <AddInfoButton setActiveButtonIndex={setActiveButtonIndex} formik={formik}/>
          </div>
        )}
        {activeButtonIndex == 1 && (
          <div className="flex flex-col">
            {/* <TargetAudience />
            <CustomerProfile /> */}
             <AddCompanyDetails formik={formik} />
            {/* <Competitors /> */}
            <HistoricalData />
            <BusinessObjectives />
            <SubmitAndBackButton
              activeButtonIndex={activeButtonIndex}
              setActiveButtonIndex={setActiveButtonIndex}
              formik={formik}
            />
          </div>
        )}
        {activeButtonIndex == 2 && (
          <>
            <div className={`${styles.onPageDiv}`}>
              <button
                className={`flex justify-center items-center gap-4 px-[26px] py-[10px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]
                  `}
                disabled={true}
              >
                Recommendations - {fromData?.content_type.toUpperCase()}
              </button>
              <OnPage />
              <OffPage />
            </div>
            <BackButton
              activeButtonIndex={activeButtonIndex}
              setActiveButtonIndex={setActiveButtonIndex}
            />
          </>
        )}
        <div className="flex float-right mt-[32px] gap-[10px]">
          <p className="text-white text-[15px] text-[color:var(--primary-300,#ABABAB)]">
            Find a bug or encountering an error? Submit an issue report with
            us&nbsp;
            <button className="text-[#ABABAB] text-sm not-italic font-semibold leading-[normal] underline">
              here
            </button>
          </p>
          <Image
            width={28}
            height={28}
            src={'/images/admin/plan/info.svg'}
            alt="#"
          />
        </div>
      </Spin>
    </AdminLayout>
  );
};

export default PlanningPage;
