// import CardItems from '@/app/home/CardItems'
// import CommunityFrom from '@/app/home/CommunityFrom'
// import RecentProjects from '@/app/home/RecentProjects'
// import ReactGATag from '@/components/ReactGATag'
// import AdminLayout from '@/layout/admin'
// import React from 'react'

// export const metadata = {
//   title: 'User Home - AdsGency AI',
// }

// const HomePage = () => {
//   return (
//     <AdminLayout>
//       <ReactGATag
//         fieldObject={{
//           hitType: "pageview",
//           page: "/home",
//           title: metadata.title
//         }}
//       />
//       <section className='flex flex-col justify-center'>
//         <h1 className='mb-6 text-2xl font-medium text-white'>
//           What advertising tasks do you have today?
//         </h1>
//         <CardItems />
//         {/* <RecentProjects /> */}
//         <CommunityFrom />
//       </section>
//     </AdminLayout>
//   )
// }

// export default HomePage
'use client';

import {
  CompanyForm,
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';
import { FormikHelpers, useFormik } from 'formik';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import React, { useEffect, useState } from 'react';
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
  const [_messageApi, contextHolder] = message.useMessage();
  const [isGenerating, setIsGenerating] = useState(false);
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
    assets: []
  });
  const { isOpen: isBugReportModalOpen, onOpen: onOpenBugReportModal, onOpenChange: onOpenBugReportModalChange, onClose: onCloseBugReportModal } = useDisclosure();

  const formik = useFormik<CompanyForm>({
    initialValues: {
      companyName: '',
      websiteURL: '',
      description: '',
      sellingDescription: '',
      idealCustomerProfile: '',
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
        email: company.email,
        idealCustomerProfile: company.customer_profile,
        marketing_template: company.marketing_template,
        schedule: company.schedule,
        sellingDescription: company.product_description,
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
  ) {}

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

      <Spin
        spinning={isGenerating}
        wrapperClassName="w-[80%] m-auto max-w-[1500px] text-[15px]"
      >
        <section className="flex flex-col justify-center">
          <div className="flex gap-x-[8px] mb-6">
            <p className="w-[24px] h-[24px] text-black text-2xl not-italic font-medium leading-[normal]">
              ✨
            </p>
            <h1 className="text-2xl w-full h-[29px] font-medium text-white">
              Get&nbsp;Started
            </h1>
          </div>
          <HorizontalStepper
            activeButtonIndex={0}
            setActiveButtonIndex={() => {}}
            formik={formik}
            formData={formData}
          />
        </section>
        <div className="flex flex-col text-[15px]">
          <AddCompany formik={formik} />
          <ContentTypeSection setFormData={setFormData} formData={formData} />
          <AddInfoButton
            formik={formik}
            formData={formData}
          />
        </div>
        <div className="flex float-right mt-[32px] gap-[10px]">
          <p className="text-white text-[15px] text-[color:var(--primary-300,#ABABAB)]">
            Find a bug or encountering an error? Submit an issue report with
            us&nbsp;
            <button className="text-[#ABABAB] text-sm not-italic font-semibold leading-[normal] underline" onClick={() => {
              onOpenBugReportModal();
            }}>
              here
            </button>
            <BugReportModal isOpen={isBugReportModalOpen} onOpenChange={onOpenBugReportModalChange} onClose={onCloseBugReportModal} />
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

export default HomePage;
