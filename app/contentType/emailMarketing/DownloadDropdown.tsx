import { useSeoAnalyzerContext } from '@/context/seo';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import { FC, Fragment, useEffect, useRef, useState } from 'react';
import { BiEdit, BiChevronDown, BiDownload, BiChevronUp } from 'react-icons/bi';

interface DownloadDropdownProps {
  selects: number[];
}

const DownloadDropdown: FC<DownloadDropdownProps> = ({ selects }) => {
  const { company, emailInstruction } = useSeoAnalyzerContext();

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="flex items-center px-6 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple">
              Download
              {!open ? (
                <BiChevronDown
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              ) : (
                <BiChevronUp
                  className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-[9999] right-0 w-56 mt-2 origin-top-right bg-background-100 text-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && 'bg-violet-500'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                      onClick={() => {
                        let data: string = company.marketing_template as string;
                        data += '<br>';
                        selects.map((idx, i) => {
                          const option = emailInstruction.email_options[idx];
                          data += `${option.option_name} email - Option ${
                            i + 1
                          }`;
                          data += '<br>';
                          data += `**Subject Line**: ${option.template_subject_line}<br>**Email Body**:<br/>${option.email_template}`;
                        });
                        const downloadData = new Blob([data], {
                          type: 'text/plain',
                        });
                        const url = window.URL.createObjectURL(downloadData);
                        const tempLink = document.createElement('a');
                        tempLink.href = url;
                        tempLink.setAttribute('download', 'file.md');
                        tempLink.click();
                      }}
                    >
                      Download Selected
                      <BiDownload className="w-5 h-5 mr-2" aria-hidden="true" />
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && 'bg-violet-500'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                      onClick={() => {
                        let data: string = company.marketing_template as string;
                        data += '<br>';
                        emailInstruction.email_options.map((option, i) => {
                          data += `${option.option_name} email - Option ${
                            i + 1
                          }`;
                          data += '<br>';
                          data += `**Subject Line**: ${option.template_subject_line}<br>**Email Body**:<br/>${option.email_template}`;
                        });
                        const downloadData = new Blob([data], {
                          type: 'text/plain',
                        });
                        const url = window.URL.createObjectURL(downloadData);
                        const tempLink = document.createElement('a');
                        tempLink.href = url;
                        tempLink.setAttribute('download', 'file.md');
                        tempLink.click();
                      }}
                    >
                      Download All
                      <BiDownload className="w-5 h-5 mr-2" aria-hidden="true" />
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active && 'bg-violet-500'
                      } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                      onClick={() => {}}
                    >
                      Launch to Gmail
                      <Image
                        src="/images/planning/gmail.svg"
                        alt={'Optimization'}
                        className="mr-2"
                        width={20}
                        height={20}
                      />
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default DownloadDropdown;
