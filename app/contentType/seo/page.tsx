'use client';
import React, { ChangeEvent, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Spin, message } from 'antd';

import { NOT_ENOUGH_CREDIT, SUCCESS_CODE } from '@/data/constant';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { AccountContext } from '@/context/account';
import { useTutorialsContext } from '@/context/tutorials';
import AdminLayout from '@/layout/admin';
import NotEnoughtCredits from '@/components/NotEnoughtCredits';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import CloseButton from '@/components/tutorial/CloseButton';
import OffPage from '@/app/contentType/seo/OffPage';
import OnPage from '@/app/contentType/seo/OnPage';
import ReactGATag from '@/components/ReactGATag';
import axios from '@/lib/axios';
import styles from '@/./app/planning/planning.module.css';
import type {
  IPlan,
  IPlanningHistory,
  IPlanningObj,
} from '@/types/planning';

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
  const { isInTutorialMode, tutorialCampaign, currentGuideMode, setIsInTutorialMode } = useTutorialsContext();

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

      <Spin spinning={isGenerating} wrapperClassName="w-[80%] m-auto max-w-[1500px] text-[15px]">
        <>
          <div id="seo-recommendation-menu" className="relative">
            <h2 className="text-3xl">🎯&nbsp;SEO</h2>
            <div className='flex items-center mt-4'>
              <Button
                isActivated={activeSeoType == 0}
                onClick={() => {
                  router.push('/planning?step=2&type=0')
                  setActiveSeoType(0)
                }}
              >
                <Image src='/images/seo/on-page.svg' alt={'SEO (on-page)'} width={24} height={24} />
                <span className='truncate' title='SEO (on-page)'>SEO (on-page)</span>
              </Button>
              <Button
                isActivated={activeSeoType == 1}
                onClick={() => {
                  router.push('/planning?step=2&type=1')
                  setActiveSeoType(1)
                }}
              >
                <Image src='/images/seo/off-page.svg' alt={'SEO (off-page)'} width={24} height={24} />
                <span className='truncate' title='SEO (off-page)'>SEO (off-page)</span>
              </Button>
            </div>

            {
              isInTutorialMode && tutorialCampaign === 'SEO' && currentGuideMode.mode === 'DETAIL' && (
                <div className="absolute left-0 top-0 translate-x-[-80px] translate-y-[-20px]">
                  <CloseButton />
                </div>
              )
            }
          </div>
          <div id="seo-technical-recommendations-section" className={`${styles.onPageDiv} relative`}>
            { activeSeoType == 0 ? <OnPage page={page} /> : <OffPage page={page} /> }

            {
              isInTutorialMode && tutorialCampaign === 'SEO' && currentGuideMode.mode === 'DETAIL' && (
                <div className="absolute left-0 top-full w-full translate-x-[100px] translate-y-[50px] flex tutorial-element">
                  <NavigationButtons onBack={() => setIsInTutorialMode(false)} />
                </div>
              )
            }
          </div>
          <div className='w-full mt-6'>
            <div className="flex justify-end items-center gap-10 self-stretch mt-[32px]">
              <button
                className="flex w-[124.5px] h-11 justify-center items-center gap-4 border px-4 py-1.5 rounded-lg border-solid border-[#5F6368]"
                onClick={() => {
                  router.push(`/planning?step=2&type=${activeSeoType}`)
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

export default PlanningPage;
