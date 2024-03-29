'use client';

import {
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';
import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { Spin, message } from 'antd';
import { useRouter, useSearchParams } from 'next/navigation';
import { AccountContext } from '@/context/account';
import AdminLayout from '@/layout/admin';
import Button from '@/app/planning/TabButton';
import SocialMedia from './SocialMedia';
import Image from 'next/image';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import ReactGATag from '@/components/ReactGATag';
import axios from '@/lib/axios';
import styles from '@/./app/planning/planning.module.css';
import { tabsList } from '@/app/planning/AdditionalDetails/SocialMediaDetails';

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { onpage, offpage } = useSeoAnalyzerContext();
  const [messageApi, contextHolder] = message.useMessage();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<IPlan | null>(null);
  const [planList, setPlanList] = useState<IPlanningObj[] | null>(null);
  const [planId, setPlanId] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotEnoughCredits, setShowNotEnoughCredits] = useState(false);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [url, setUrl] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value);
  }

  useEffect(() => {
    if (searchParams) {
      setActiveTab(parseInt(searchParams.get('type') || '0'));
      setUrl(searchParams.get('url') || '');
    }
  }, [searchParams])

  const page = useMemo<SeoAnalysis | null>(() => {
    if (activeTab == 0) {
      const value = onpage.find((val) => val.url == url);
      if (value) return value;
    } else {
      const value = offpage.find((val) => val.url == url);
      if (value) return value;
    }
    return null;
  }, [activeTab, url, onpage, offpage])

  return (
    <AdminLayout>
      {contextHolder}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/emailMarketing',
          title: 'Email Marketing - AdsGency AI',
        }}
      />
      <NotEnoughtCredits
        show={showNotEnoughCredits}
        setShow={() => setShowNotEnoughCredits(false)}
      />

      <Spin spinning={isGenerating} wrapperClassName="w-[80%] m-auto max-w-[1500px] text-[15px]">
        <>
          <h2 className="text-3xl">👥&nbsp;Social Media</h2>
          <div className='flex items-center mt-4'>
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
          <div className={`${styles.onPageDiv}`}>
            <SocialMedia type={activeTab} />
          </div>
          <div className='w-full mt-6'>
            <div className="flex justify-end items-center gap-10 self-stretch mt-[32px]">
              <button
                className="flex w-[124.5px] h-11 justify-center items-center gap-4 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
                onClick={() => {
                  router.push(`/planning?step=2&type=${activeTab}`)
                }}
              >
                Back
              </button>
            </div>
          </div>
        </>
      </Spin>
    </AdminLayout>
  );
};

export default Page;
