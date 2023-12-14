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
import Image from 'next/image';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import OffPage from '@/app/contentType/seo/OffPage';
import OnPage from '@/app/contentType/seo/OnPage';
import ReactGATag from '@/components/ReactGATag';
import axios from '@/lib/axios';
import styles from '@/./app/planning/planning.module.css';

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

type TabButtonProps = {
  children: React.ReactNode
  isActivated?: boolean
  onClick?: () => void
}

const Button = ({ children, isActivated, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 h-12 flex items-center justify-center gap-2 text-normal rounded-t-lg hover:bg-[#35363A] border-b-2 ${isActivated ? 'text-white border-primary-purple bg-[#35363A]' : 'border-[#989899] text-primary-gray'}`}>
      {children}
    </button>
  )
}

const PlanningPage = () => {
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
  const [activeSeoType, setActiveSeoType] = useState<number>(0);
  const [url, setUrl] = useState<string>('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPrompt(e.target.value);
  }

  useEffect(() => {
    if (searchParams) {
      setActiveSeoType(parseInt(searchParams.get('type') || '0'));
      setUrl(searchParams.get('url') || '');
    }
  }, [searchParams])

  const page = useMemo<SeoAnalysis | null>(() => {
    if (activeSeoType == 0) {
      const value = onpage.find((val) => val.url == url);
      if (value) return value;
    } else {
      const value = offpage.find((val) => val.url == url);
      if (value) return value;
    }
    return null;
  }, [activeSeoType, url, onpage, offpage])

  return (
    <AdminLayout>
      {contextHolder}
      <ReactGATag
        fieldObject={{
          hitType: 'pageview',
          page: '/seo',
          title: 'SEO - AdsGency AI',
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
              <div> 🎯 </div>
              <div> SEO </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start gap-[20px] self-stretch border-b-1 border-[#27282F]">
            <Button
              isActivated={activeSeoType == 0}
              onClick={() => {
                router.push('/planning?step=2&type=0')
                setActiveSeoType(0)
              }}
            >
              <Image
                src='/images/seo/on-page.svg'
                alt={'SEO (on-page)'}
                width={24}
                height={24}
              />
              SEO (on-page)
            </Button>
            <Button
              isActivated={activeSeoType == 1}
              onClick={() => {
                router.push('/planning?step=2&type=1')
                setActiveSeoType(1)
              }}
            >
              <Image
                src='/images/seo/off-page.svg'
                alt={'SEO (off-page)'}
                width={24}
                height={24}
              />
              SEO (off-page)
            </Button>
          </div>
          <div className={`${styles.subDiv}`}>
            {activeSeoType == 0 ? <OnPage page={page} /> : <OffPage page={page} />}
          </div>
          <div className='flex justify-end'>
            <button
              className={`${styles.subButton} android:w-full desktop:w-[150px] bg-[#844FFF]}`}
              onClick={() => {
                router.push(`/planning?step=2&type=${activeSeoType}`)
              }}
            >
              Back
            </button>
          </div>
        </div>
      </Spin>
    </AdminLayout>
  );
};

export default PlanningPage;
