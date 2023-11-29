import {
  BiChevronDown,
  BiChevronUp,
  BiEdit,
  BiInfoCircle,
  BiRecycle,
  BiRefresh,
  BiRepeat,
  BiSave,
} from 'react-icons/bi';
import { Tooltip } from '@nextui-org/react';
import { Input, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import {
  EmailInstruction,
  EmailOption,
  SeoAnalysis,
  useSeoAnalyzerContext,
} from '@/context/seo';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import ReactMarkdownPreview from '@uiw/react-markdown-preview';
import axios from 'axios';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import Checkbox from './Checkbox';
import { DETAIL_LIMIT } from '@/data/constant';

const GmailMarketing = () => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { company, emailInstruction, setEmailInstruction } =
    useSeoAnalyzerContext();
  const [selectedTemplates, setSelectedTemplates] = useState<number[]>([]);
  const [edits, setEdits] = useState<number[]>([]);
  const [optionEdits, setOptionEdits] = useState<EmailOption[]>([]);

  useEffect(() => {
    if (emailInstruction && emailInstruction.email_options) {
      setOptionEdits([...emailInstruction.email_options]);
    }
  }, [emailInstruction])

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
                  });
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
                <Checkbox
                  checked={selectedTemplates.includes(i)}
                  onChange={() => {
                    if (selectedTemplates.includes(i)) {
                      setSelectedTemplates((prev) =>
                        prev.filter((val) => val != i)
                      );
                    } else {
                      setSelectedTemplates((prev) => [...prev, i]);
                    }
                  }}
                />
                <p className="text-white">{`${
                  option.option_name
                } email - Option ${i + 1}`}</p>
                <Tooltip
                  className="p-3 bg-background-100"
                  content={
                    <ul className="ml-6 list-disc">
                      {option.summary.split('.').map(
                        (tip, index) =>
                          tip.trim() != '' && (
                            <li
                              key={index}
                              className="text-white text-[15px] whitespace-break-spaces break-words"
                              style={{ overflowWrap: 'anywhere' }}
                            >
                              {tip.trim()}
                            </li>
                          )
                      )}
                    </ul>
                  }
                >
                  <div className="relative">
                    <BiInfoCircle className="w-5 h-5" />
                  </div>
                </Tooltip>
              </div>
              <div className="relative w-full mt-5">
                <div className="w-full p-4 text-white rounded-lg bg-background-50">
                  <div className="flex items-center justify-between">
                    <h6 className="flex items-center gap-2">
                      <b className='whitespace-nowrap'>Subject line:</b>&nbsp;
                      {edits.includes(i) == true ? (
                        <Input
                          maxLength={50}
                          type="text"
                          className={`${styles.description} placeholder-shown:border-[#1B1C21] !mt-0 !p-2 border-white/20`} // Apply your custom class here
                          style={{
                            maxHeight: '138px', // Ensure max-height is the same as height
                            overflowY: 'auto', // Add vertical scroll when content exceeds the height
                            scrollbarColor: 'inherit',
                          }}
                          value={optionEdits[i].template_subject_line}
                          onChange={(e) => {
                            const value = e.currentTarget.value;
                            setOptionEdits((prev) => prev.map((val, index) => {
                              if (index == i) {
                                  return {
                                  ...val,
                                  template_subject_line: value
                                }
                              } else {
                                return val;
                              }
                            }))
                          }}
                        />
                      ) : (
                        <p>{option.template_subject_line}</p>
                      )}
                    </h6>
                  </div>
                  <div className="mt-4">
                    <h6 className="font-bold">Email Body</h6>
                    <div className="mt-2">
                      {edits.includes(i) == true ? (
                        <Input.TextArea
                          maxLength={DETAIL_LIMIT}
                          className={`${styles.description} placeholder-shown:border-[#1B1C21] !mt-0 !p-2 border-white/20`} // Apply your custom class here
                          placeholder="Ex: industry, geography, pain points"
                          style={{
                            minHeight: '138px', // Set the desired fixed height
                            maxHeight: '138px', // Ensure max-height is the same as height
                            overflowY: 'auto', // Add vertical scroll when content exceeds the height
                            scrollbarColor: 'inherit',
                          }}
                          value={optionEdits[i].email_template}
                          onChange={(e) => {
                            const value = e.currentTarget.value;
                            setOptionEdits((prev) => prev.map((val, index) => {
                              if (index == i) {
                                  return {
                                  ...val,
                                  email_template: value
                                }
                              } else {
                                return val;
                              }
                            }))
                          }}
                        />
                      ) : (
                        <pre className='font-poppins whitespace-break-spaces' style={{ overflowWrap: "anywhere" }}>{option.email_template}</pre>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className="absolute flex items-center gap-1 text-primary-purple top-4 right-6"
                  onClick={() => {
                    if (edits.includes(i)) {
                      setEdits((prev) => prev.filter((val) => val != i));
                      let newEmailInstruction: EmailInstruction = {
                        ...emailInstruction,
                        email_options: optionEdits
                      };

                      setEmailInstruction(newEmailInstruction);
                    } else {
                      setEdits((prev) => [...prev, i]);
                    }
                  }}
                  onChange={(value) => {
                    console.log('changed value:', value);
                  }}
                >
                  {edits.includes(i) ? (
                    <BiSave className="w-5 h-5" />
                  ) : (
                    <BiEdit className="w-5 h-5" />
                  )}
                  {edits.includes(i) ? 'Save' : 'Edit'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GmailMarketing;
