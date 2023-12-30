import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  BiChevronDown,
  BiChevronUp,
  BiRecycle,
  BiRefresh,
  BiRepeat,
} from 'react-icons/bi';
import { Chip } from '@nextui-org/react';
import { Input, Spin, message } from 'antd';
import ReactMarkdownPreview from '@uiw/react-markdown-preview';

import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { useTutorialsContext } from '@/context/tutorials';
import { TopToRightBezierCurveLineArrow, BottomToRightBezierCurveLineArrow } from '@/components/tutorial/Arrows';
import axios from '@/lib/axios';
import styles from '@/./app/planning/planning.module.css';

const OnPage = ({ page }: { page: SeoAnalysis | null }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { company } = useSeoAnalyzerContext();
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const [loadings, setLoadings] = useState<Array<boolean>>([]);
  const [answers, setAnswers] = useState<Array<string>>([]);
  const { isInTutorialMode, tutorialCampaign, currentGuideMode } = useTutorialsContext();
  const router = useRouter();

  useEffect(() => {
    if (page) {
      setLoadings([...new Array(page.warnings.length)].map((_) => true));
      setAnswers([...new Array(page.warnings.length)].map((_) => ''));
    }
  }, [page])

  return (
    <>
      {contextHolder}
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/images/seo/optimization.svg"
            alt={'Optimization'}
            width={24}
            height={24}
          />
          <h3>Technical Optimizations</h3>
          <BiChevronDown />
        </div>
        <button className="flex items-center gap-2 px-4 bg-none text-primary-purple" onClick={() => {
          setLoadings([...new Array(page?.warnings.length || 0)].map((_) => true));
          setAnswers([...new Array(page?.warnings.length || 0)].map((_) => ''));
          messageApi.success('Refreshed');
        }}>
          <BiRefresh className="w-5 h-5 text-primary-purple" />
          Refresh
        </button>
      </div>
      <div className={`bg-[#23252b] w-full !p-0 ${isInTutorialMode && tutorialCampaign === 'SEO' && currentGuideMode.mode === 'DETAIL' ? 'overflow-visible' : 'overflow-hidden'} rounded-lg grid grid-cols-12 gap-x-2`}>
        <div className="bg-[#1E1F24] text-[#848484] w-full col-span-12 grid grid-cols-12">
          <div className="col-span-8 py-3 pl-10">
            <div className="flex items-center gap-2 font-normal text-left">
              Recommendations
              <BiChevronDown />
            </div>
          </div>
          <div className="col-span-2 py-3 relative">
            <div className="flex items-center gap-2 font-normal text-left">
              Status
              <BiChevronDown />
            </div>

            {
                isInTutorialMode && tutorialCampaign === 'SEO' && currentGuideMode.mode === 'DETAIL' && (
                  <div className="absolute left-0 bottom-full translate-x-[-80px] translate-y-[10px] flex flex-col-reverse tutorial-element">
                    <BottomToRightBezierCurveLineArrow />
                    <div className={'!w-[400px] bg-primary-purple rounded-xl text-white p-3 text-md'}>
                      Once you’ve opened the instructions/solution you’ll see the status of the recommendation change to ‘completed’
                    </div>
                  </div>
                )
              }
          </div>
          <div className="col-span-2"></div>
        </div>

        {
          page && page.warnings.map((warning, i) => (
            <div key={i} className="hover:bg-[#444549] hover:border-b-primary-purple hover:border-b-2 col-span-12 grid grid-cols-12 gap-2 m-0">
              <div className="col-span-8 py-4 pl-10" style={{ overflowWrap: "anywhere" }}>
                { warning }
              </div>
              <div className="col-span-2 py-4">
                <Chip
                  color={ loadings[i] == true ? "warning" : "success" }
                  variant="light"
                  className="rounded-md bg-[#1E1F24]"
                >
                  { loadings[i] == true ? "Pending Preview" : "Completed" }
                </Chip>
              </div>
              <div className="col-span-2 py-4 pr-10 text-right">
                <button
                  className="px-4 bg-none text-primary-purple"
                  onClick={() => {
                    if (loadings[i] == true && selectedRow != i) {
                      axios.post('/fapi/get_seo_instruction_api', {
                        company_name: company.name,
                        company_description: company.description,
                        target_audience: company.target_audice,
                        customer_profile: company.customer_profile,
                        competitor: company.competitors,
                        business_objectives: company.business_objectives.join(','),
                        main_category: "",
                        sub_category: "",
                        warning: warning
                      }).then((res) => {
                        if (res.data.status == true) {
                          setLoadings((prev) => {
                            let temp = [...prev];
                            temp[i] = false;
                            return temp;
                          });
                          setAnswers((prev) => {
                            let temp = [...prev];
                            temp[i] = res.data.onfix.replace('\n', '<br/>');
                            return temp;
                          })
                        } else {
                          console.warn(res.data);
                          messageApi.error('Something went wrong')
                        }
                      }).catch((err) => {
                        messageApi.error('Something went wrong')
                        console.warn(err);
                      })
                    }
                    setSelectedRow(selectedRow == i ? -1 : i);
                  }}
                >
                  <div className="flex items-center gap-2">
                    {selectedRow == i ? 'Close' : 'View'}
                    {selectedRow == i ? (
                      <BiChevronUp className="w-5 h-5 text-primary-purple" />
                    ) : (
                      <BiChevronDown className="w-5 h-5 text-primary-purple" />
                    )}
                  </div>
                </button>
              </div>
              <div
                className={`${
                  selectedRow == i ? '' : 'hidden'
                } border-b-white/50 border-b-1 col-span-12`}
              >
                {
                  loadings[i] == true
                  ? <div className='w-full py-3 text-center'>
                    <Spin />
                    </div>
                  : <div className="px-10 py-5 border-t-1 border-t-white/20">
                    <div className='flex items-center justify-between'>
                      <p className='font-normal text-white/60'>
                        Based on your URL { page.url }, remove meta keywords tag from HTML
                      </p>
                      <button className="inline-flex px-6 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple relative" onClick={() => {
                        const data = new Blob([answers[i]], { type: 'text/plain' });
                        const url = window.URL.createObjectURL(data);
                        const tempLink = document.createElement('a');
                        tempLink.href = url;
                        tempLink.setAttribute('download', 'file.txt');
                        tempLink.click();
                      }}>
                        <span className="w-[77px] h-[20px] text-[13.5px]">Download</span>

                        {
                          isInTutorialMode && tutorialCampaign === 'SEO' && currentGuideMode.mode === 'DETAIL' && i === 0 && (
                            <div className="absolute right-0 top-full translate-x-[-20px] translate-y-[10px] flex justify-end tutorial-element">
                              <TopToRightBezierCurveLineArrow />
                              <div className="absolute right-0 top-full translate-y-[10px]">
                                <div className={'!w-[310px] bg-primary-purple rounded-xl text-white p-5 text-md'}>
                                  Click ‘Download’ to download the code & instructions. Implement independently as needed!
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </button>
                    </div>
                    <div className='relative w-full mt-5'>
                      <ReactMarkdownPreview source={answers[i]} className='relative p-4 overflow-auto rounded-lg' style={{ overflowWrap: "anywhere" }} />
                    </div>
                  </div>
                }
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default OnPage;
