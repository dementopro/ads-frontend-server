import {
  BiChevronDown,
  BiChevronUp,
  BiInfoCircle,
  BiRecycle,
  BiRefresh,
  BiRepeat,
} from 'react-icons/bi';
import { Checkbox, Chip, Tooltip } from '@nextui-org/react';
import { Input, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { SeoAnalysis, useSeoAnalyzerContext } from '@/context/seo';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownPreview from '@uiw/react-markdown-preview';
import axios from 'axios';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';

const GmailMarketing = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { company, emailInstruction } = useSeoAnalyzerContext();

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
          <h3>Email Marketing Optimizations</h3>
        </div>
        <button className="flex items-center gap-2 px-4 bg-none text-primary-purple">
          <BiRefresh className="w-5 h-5 text-primary-purple" />
          Refresh
        </button>
      </div>
      <div className="bg-[#23252b] w-full !p-0 overflow-hidden rounded-lg">
        <div className="bg-[#1E1F24] text-[#848484] w-full">
          <div className="col-span-8 px-10 py-3">
            <div className="flex items-center gap-2 font-normal text-left">
              Recommendations
            </div>
          </div>
        </div>

        <div className="w-full px-10 py-6">
          <div className="w-full m-0 font-medium text-sm py-3 border-b-1 border-b-[#848484]">
            <h6 className="text-white">
              {emailInstruction.email_template_type}
            </h6>
            <p className="mt-2 text-primary-gray">
              Based on your email templates input
            </p>
          </div>
          <div className="w-full py-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-normal text-white">
                {`You uploaded this ${emailInstruction.email_template_type.toLowerCase()} marketing template:`}
              </p>
              <button
                className="px-6 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple"
                onClick={() => {
                  let data: string = company.marketing_template as string;
                  data += '<br>';
                  emailInstruction.email_options.forEach((option, i) => {
                    data += `${option.option_name} email - Option ${i + 1}`;
                    data += '<br>';
                    data += `**Subject Line**: ${option.template_subject_line}<br>**Email Body**:<br/>${option.email_template}`;
                  })
                  const downloadData = new Blob([data], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(downloadData);
                  const tempLink = document.createElement('a');
                  tempLink.href = url;
                  tempLink.setAttribute('download', 'file.md');
                  tempLink.click();
                }}
              >
                <span className="w-[77px] h-[20px] text-[13.5px]">
                  Download
                </span>
              </button>
            </div>
          </div>
          <div className="w-full">
            <ReactMarkdownPreview
              source={company.marketing_template}
              className="relative p-4 overflow-auto rounded-lg"
              style={{ overflowWrap: 'anywhere' }}
            />
          </div>
          {emailInstruction.email_options.map((option, i) => (
            <div key={`option_${i}`} className="mt-5">
              <div className="flex items-center gap-4">
                <Checkbox color='success'>
                  <p className='text-white'>{`${option.option_name} email - Option ${i + 1}`}</p>
                </Checkbox>
                <Tooltip
                  className='p-3 bg-background-100'
                  content={
                    <ul className='ml-6 list-disc'>
                      {option.summary.split('.').map((tip, index) => (
                        tip.trim() != '' &&
                        <li key={index} className="text-white text-[15px] whitespace-break-spaces break-words"
                        style={{ overflowWrap: 'anywhere' }}>
                          { tip.trim() }
                        </li>
                      ))}
                    </ul>
                  }
                >
                  <div className='relative'>
                    <BiInfoCircle className="w-5 h-5" />
                  </div>
                </Tooltip>
              </div>
              <div className="w-full mt-5">
                <ReactMarkdownPreview
                  source={`**Subject Line**: ${option.template_subject_line}<br>**Email Body**:<br/>${option.email_template}`}
                  className="relative p-4 overflow-auto leading-loose rounded-lg"
                  style={{ overflowWrap: 'anywhere' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GmailMarketing;
