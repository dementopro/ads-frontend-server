import {
  BiChevronDown,
  BiChevronUp,
  BiRecycle,
  BiRefresh,
  BiRepeat,
} from 'react-icons/bi';
import { Input, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import { Chip } from '@nextui-org/react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownPreview from '@uiw/react-markdown-preview';
import axios from 'axios';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';

const OffPage = ({ page }: { page: SeoAnalysis | null }) => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { company } = useSeoAnalyzerContext();
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const [loadings, setLoadings] = useState<Array<boolean>>([]);
  const [answers, setAnswers] = useState<Array<any>>([]);

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
          <h3>{ page?.url }</h3>
        </div>
        <button className="android:hidden desktop:flex items-center gap-2 px-4 bg-none text-primary-purple" onClick={() => {
          setAnswers([...new Array(page?.warnings.length || 0)].map((_) => ''));
        }}>
          <BiRefresh className="w-5 h-5 text-primary-purple" />
          Refresh
        </button>
      </div>
      <div className="w-full flex flex-col bg-[#23252b] w-full !p-0 overflow-hidden rounded-lg">
        <div className="w-full android:hidden desktop:flex bg-[#1E1F24] text-[#848484]">
            <div className="w-2/4 py-3 pl-10">
              <div className="flex items-center gap-2 font-normal text-left">
                Recommendations
                <BiChevronDown />
              </div>
            </div>
            <div className="w-1/4 py-3">
              <div className="flex items-center gap-2 font-normal text-left">
                Status
                <BiChevronDown />
              </div>
            </div>
        </div>
          {
            page && page.warnings.map((warning, i) => (
              <>
                <div className="flex hover:bg-[#444549] justify-start items-center hover:border-b-primary-purple hover:border-b-2">
                  <div className='flex android:flex-col desktop:flex-row w-3/4'>
                    <div className="android:w-full desktop:w-2/3 android:pt-4 android:pb-0 desktop:pt-4 desktop:pb-4 pl-10" style={{ overflowWrap: "anywhere" }}>
                      { warning }
                    </div>
                    <div className="android:w-full desktop:w-1/3 py-4 android:pl-10 desktop:pl-0">
                      <Chip
                        color={ loadings[i] == true ? "warning" : "success" }
                        variant="light"
                        className="rounded-md bg-[#1E1F24]"
                      >
                        { loadings[i] == true ? "Pending Preview" : "Completed" }
                      </Chip>
                    </div>
                  </div>
                  <div className="flex justify-end w-1/4 py-4 pr-10 text-right">
                    <button
                      className="px-4 bg-none text-primary-purple"
                      onClick={() => {
                        if (loadings[i] == true && selectedRow != i) {
                          axios.post('/fapi/get_seo_instruction_api', Object.assign({
                            company_name: company.name,
                            company_description: company.description,
                            target_audience: company.target_audice,
                            customer_profile: company.customer_profile,
                            competitor: company.competitors,
                            business_objectives: company.business_objectives.join(','),
                            main_category: page.url,
                            sub_category: warning,
                            warning: ""
                          }, )).then((res) => {
                            if (res.data.status == true) {
                              setLoadings((prev) => {
                                let temp = [...prev];
                                temp[i] = false;
                                return temp;
                              });
                              setAnswers((prev) => {
                                let temp = [...prev];
                                const rawFix = res.data.offfix.replaceAll('\n', '<br/>');
                                try {
                                  const offfix = JSON.parse(rawFix);
                                  temp[i] = offfix;
                                } catch (e) {
                                  temp[i] = rawFix;
                                } finally {
                                  return temp;
                                }
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
                        <div className='android:hidden desktop:block'> {selectedRow == i ? 'Close' : 'View'} </div>
                        {selectedRow == i ? (
                          <BiChevronUp className="w-5 h-5 text-primary-purple" />
                        ) : (
                          <BiChevronDown className="w-5 h-5 text-primary-purple" />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    selectedRow == i ? '' : 'hidden'
                  } border-b-white/50 border-b-1 w-full`}
                >
                  <div className="px-10">
                    {
                      loadings[i] == true
                      ? <div className='w-full py-3 text-center'>
                        <Spin />
                        </div>
                      : <div className="py-5 border-t-1 border-t-white/20">
                        <div className='flex android:flex-col desktop:flex-row gap-2 items-center justify-between'>
                          <p className='font-normal text-white/60'>
                            Based on your URL { page.url }, remove meta keywords tag from HTML
                          </p>
                          <button className="android:w-full desktop:w-auto desktop:inline-flex px-6 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple" onClick={() => {
                            const data = new Blob([answers[i]], { type: 'text/plain' });
                            const url = window.URL.createObjectURL(data);
                            const tempLink = document.createElement('a');
                            tempLink.href = url;
                            tempLink.setAttribute('download', 'file.txt');
                            tempLink.click();
                          }}>
                            <span className="w-[77px] h-[20px] text-[13.5px]">Download</span>
                          </button>
                        </div>
                        <div className='relative w-full mt-5'>
                          {
                            typeof answers[i] == 'object' ? Object.keys(answers[i]).map((key) => answers[i][key]).map((sol, index) => (
                              <div key={`step_${index}`} className='mt-4'>
                                <div>
                                  { sol.step_name }
                                </div>
                                <div className='mt-2'>
                                  <ReactMarkdownPreview source={sol.detail} className='relative p-4 overflow-auto rounded-lg' style={{ overflowWrap: "anywhere" }} />
                                </div>
                              </div>
                            )) : <ReactMarkdownPreview source={answers[i]} className='relative p-4 overflow-auto rounded-lg' style={{ overflowWrap: "anywhere" }} />
                          }
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </>
            ))
          }
      </div>
    </>
  );
};

export default OffPage;
