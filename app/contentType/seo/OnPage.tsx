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

const OnPage = ({ page }: { page: SeoAnalysis | null }) => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { company } = useSeoAnalyzerContext();
  const [selectedRow, setSelectedRow] = useState<number>(-1);
  const [loadings, setLoadings] = useState<Array<boolean>>([]);
  const [answers, setAnswers] = useState<Array<string>>([]);

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
          setLoadings([...new Array(page?.warnings.length || 0)].map((_) => true));
          setAnswers([...new Array(page?.warnings.length || 0)].map((_) => ''));
          messageApi.success('Refreshed');
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
            <div key={i} className="hover:bg-[#444549] hover:border-b-primary-purple hover:border-b-2 col-span-12 grid grid-cols-12 gap-2 m-0">
              <div className="android:col-span-11 desktop:col-span-8 android:px-[16px] android:py-[16px] desktop:py-4 desktop:pl-10" style={{ overflowWrap: "anywhere" }}>
                { warning }
              </div>
              <div className="android:col-span-11 desktop:col-span-2 android:px-[16px] android:py-[8px] desktop:px-0 desktop:py-4">
                <Chip
                  color={ loadings[i] == true ? "warning" : "success" }
                  variant="light"
                  className="rounded-md bg-[#1E1F24]"
                >
                  { loadings[i] == true ? "Pending Preview" : "Completed" }
                </Chip>
              </div>
              <div className="android:col-span-1 desktop:col-span-2 desktop:py-4 desktop:pr-10 text-right">
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
                    <p className='android:hidden desktop:inline'> {selectedRow == i ? 'Close' : 'View'} </p>
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
