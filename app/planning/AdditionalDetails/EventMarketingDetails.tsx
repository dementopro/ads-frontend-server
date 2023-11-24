import { CompanyDetailForm, CompanyForm } from '@/types/planning';
import React, { FC } from 'react';

import { Button } from '../page';
import Image from 'next/image';
import styles from '../planning.module.css';
import { useFormik } from 'formik';
import { BiCalendar } from 'react-icons/bi';
import { useDisclosure } from '@nextui-org/react';
import EmailScheduleModal from './EmailScheduleModal';

interface EmailMarketingDetailsProps {
  formData: CompanyDetailForm;
  activeTab: number;
  setActiveTab: (value: number) => void;
  formik: ReturnType<typeof useFormik<CompanyForm>>;
}

export const tabsList = [
  {
    'title': 'Gmail',
    'icon': '/images/planning/gmail.svg'
  },
  {
    'title': 'Outlook',
    'icon': '/images/planning/outlook.svg'
  },
  {
    'title': 'Mailchimp',
    'icon': '/images/planning/mailchimp.svg'
  },
  {
    'title': 'Yahoo',
    'icon': '/images/planning/yahoo.svg'
  },
  {
    'title': 'Proton Mail',
    'icon': '/images/planning/proton.svg'
  }
]

const EmailMarketingDetails: FC<EmailMarketingDetailsProps> = ({ formData, formik, activeTab, setActiveTab }) => {
  const {isOpen, onOpen: onOpenEmailSchedule, onOpenChange} = useDisclosure();
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-8">
        <div className={`col-span-12 !mt-0 flex items-end`}>
          {tabsList.map((tab, i) => (
            <Button
              key={`tab_${i}`}
              isActivated={activeTab == i}
              onClick={() => setActiveTab(i)}
            >
              <Image src={tab.icon} alt={'SEO (off-page)'} width={24} height={24} />
              <span className='truncate' title='SEO (off-page)'>{ tab.title }</span>
            </Button>
          ))}
        </div>
        <div className={`${styles.div} col-span-12 !mt-0`}>
          <div className='grid w-full grid-cols-12'>
            <div className='col-span-12 lg:col-span-6'>
              <h6 className="text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
                3.&nbsp;Connect your { tabsList[activeTab].title } account
              </h6>
              <p className='mt-1 text-sm text-primary-gray'>Select for 1 click authentication</p>
              <button className='flex items-center gap-2 px-4 py-2 mt-6 rounded-lg bg-background-300 hover:brightness-110'>
                <Image src={tabsList[activeTab].icon} alt={tabsList[activeTab].title} width={24} height={24} />
                <p className='text-primary-gray text-[15px]'>
                  { tabsList[activeTab].title }
                </p>
              </button>
            </div>
            <div className='col-span-12 lg:col-span-6'>
              <p className='mt-1 text-sm text-primary-gray'>
                OR Enter your email
              </p>
              <input
                className={`border bg-[#1b1c21] text-white pl-[24px] py-[18px] rounded-lg mt-4 ${
                  formik.errors.email && formik.touched.email
                    ? 'border-rose-600'
                    : 'border-none'
                } w-full `}
                placeholder="Enter email address"
                {...formik.getFieldProps('email')}
              />
            </div>
          </div>
        </div>
        
        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            4.&nbsp;Enter your email marketing templates
          </p>
          <div
            className={` ${
              true ? `max-h-[241px]` : `max-h-[141px]`
            } flex flex-col w-full`}
          >
            <textarea
              className={`bg-[#1b1c21] text-white pl-[24px] pt-[18px] pb-0 border rounded-lg ${
                formik.errors.marketing_template &&
                formik.touched.marketing_template
                  ? '!border-rose-600'
                  : 'border-none'
              } w-full `}
              placeholder="Copy and paste your email marketing templates"
              style={{
                height: '220px',
              }}
              {...formik.getFieldProps('marketing_template')}
            />
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            5.&nbsp;Provide your email scheduling
          </p>
          <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-background-300 hover:brightness-110 text-primary-gray' onClick={() => {
            onOpenEmailSchedule();
          }}>
            <BiCalendar className='w-6 h-6' />
            <p className='text-primary-gray text-[15px]'>Email Schedule</p>
          </button>
          <EmailScheduleModal isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            6.&nbsp;Add your target audience
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
          </div>
        </div>

        <div className={`${styles.div} col-span-12 lg:col-span-6 !mt-0`}>
          <p className=" text-[15px] text-[color:#B3ACFF] not-italic font-medium leading-[normal]">
            7.&nbsp;Add ideal customer profile
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

export default EmailMarketingDetails;
