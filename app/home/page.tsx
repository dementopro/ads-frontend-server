'use client';

import {
  CompanyForm,
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';
import { FormikHelpers, useFormik } from 'formik';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Spin, message } from 'antd';
import AddCompany from './AddCompany';
import AddInfoButton from './AddInfoButton';
import AdminLayout from '@/layout/admin';
import { CompanyDetailForm } from '@/types/planning';
import { CompanyValidate } from '@/lib/validate';
import ContentTypeSection from './ContentTypeSection';
import HorizontalStepper from '@/app/planning/HorizontalStepper';
import Image from 'next/image';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import ReactGATag from '@/components/ReactGATag';
import axios from '@/lib/axios';
import { useSearchParams } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';
import BugReportModal from '@/components/contactUs/BugReportModal';
import { useDisclosure } from '@nextui-org/react';

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
      return [];
    }
  } catch (err) {
    console.log('error: ', err);
    return [];
  }
}

const HomePage = () => {
  const { company } = useSeoAnalyzerContext();
  const [messageApi, contextHolder] = message.useMessage();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<IPlan | null>(null);
  const [planList, setPlanList] = useState<IPlanningObj[] | null>(null);
  const [planId, setPlanId] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotEnoughCredits, setShowNotEnoughCredits] = useState(false);
  const [formData, setFormData] = useState<CompanyDetailForm>({
    name: '',
    website: '',
    description: '',
    product_description: '',
    target_audice: '',
    content_type: 'SEO',
    customer_profile: '',
    competitors: '',
    business_objectives: [],
    email: '',
    url: '',
    marketing_template: '',
    schedule: {},
    assets: [],
  });
  const { isOpen: isBugReportModalOpen, onOpen: onOpenBugReportModal, onOpenChange: onOpenBugReportModalChange, onClose: onCloseBugReportModal } = useDisclosure();

  const formik = useFormik<CompanyForm>({
    initialValues: {
      companyName: '',
      websiteURL: '',
      description: '',
      idealCustomerProfile: '',
      sellingDescription: '',
      targetAudience: '',
      competitors: '',
      email: '',
      url: '',
      marketing_template: '',
      schedule: {},
    },
    onSubmit,
    validate: CompanyValidate,
  });

  useEffect(() => {
    if (company) {
      formik.setValues({
        companyName: company.name,
        competitors: company.competitors,
        description: company.description,
        sellingDescription: company.product_description,
        email: company.email,
        idealCustomerProfile: company.customer_profile,
        marketing_template: company.marketing_template,
        schedule: company.schedule,
        targetAudience: company.target_audice,
        websiteURL: company.website,
        url: company.url
      })
      setFormData({
        ...company
      });
    }
  }, [company])

  async function onSubmit(
    values: CompanyForm,
    actions: FormikHelpers<CompanyForm>
  ) { }

  return (
    <AdminLayout>
      {contextHolder}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/home',
          title: 'Get Started - AdsGency AI',
        }}
      />
      <NotEnoughtCredits
        show={showNotEnoughCredits}
        setShow={() => setShowNotEnoughCredits(false)}
      />

      <Spin spinning={isGenerating} wrapperClassName="relative">
        <div className="w-full flex flex-col gap-[24px]">
          <div className="flex flex-col justify-center">
            <div className="flex gap-[8px] justify-start text-[24px] font-medium text-white">
              <div> ✨ </div>
              <div> Get Started </div>
            </div>
          </div>
          <HorizontalStepper
            activeButtonIndex={0}
            setActiveButtonIndex={() => { }}
            formik={formik}
            formData={formData}
          />

          <div className="flex flex-col gap-[14px]">
            <AddCompany formik={formik} index={1} />
            <ContentTypeSection setFormData={setFormData} formData={formData} index={2} />
          </div>
          <AddInfoButton
            formik={formik}
            formData={formData}
          />
        </div>
        <div className="flex justify-end items-center mt-[10px] gap-[5px] text-[14px] text-[#ABABAB] font-normal">
          <div className='text-right'>
            Find a bug or encountering an error? Submit an issue report with us &nbsp;
            <button className="font-medium underline"
              onClick={() => {
                onOpenBugReportModal();
              }}>
              here
            </button>
            <BugReportModal isOpen={isBugReportModalOpen} onOpenChange={onOpenBugReportModalChange} onClose={onCloseBugReportModal} />
          </div>
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

export default HomePage;
