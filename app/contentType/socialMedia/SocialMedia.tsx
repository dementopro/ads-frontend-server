import {
  BiAward,
  BiCalendar,
  BiCheck,
  BiChevronDown,
  BiChevronUp,
  BiCopy,
  BiDownload,
  BiEdit,
  BiHeart,
  BiImage,
  BiInfoCircle,
  BiRecycle,
  BiRefresh,
  BiRepeat,
  BiSave,
  BiStar,
  BiText,
  BiTrash,
} from 'react-icons/bi';
import { Chip, Tooltip } from '@nextui-org/react';
import { DatePicker, Input, Spin, message } from 'antd';
import { FC, Fragment, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useDisclosure } from '@nextui-org/react';
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
import { DETAIL_LIMIT } from '@/data/constant';
import { Menu, Transition } from '@headlessui/react';

import LaunchAdModal from "./LaunchAdModal";
import MediaStepper from './MediaStepper';
import Select from '@/components/common/Select';
import { tabsList } from '@/app/planning/AdditionalDetails/SocialMediaDetails';

interface SocialMediaProps {
  type: number;
}

const SocialMedia: FC<SocialMediaProps> = ({ type }) => {
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    company,
    emailInstruction,
    setEmailInstruction,
    socialMedia,
    setSocialMedia,
  } = useSeoAnalyzerContext();
  const [optionEdits, setOptionEdits] = useState<EmailOption[]>([]);
  const [activeMedia, setActiveMedia] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ratio, setRatio] = useState<string>('Square');
  const [isBasicOpen, setIsBasicOpen] = useState<boolean>(false);
  const [isDetailedOpen, setIsDetailedOpen] = useState<boolean>(false);
  const [isTextOpen, setIsTextOpen] = useState<boolean>(false);
  const [isImageOpen, setIsImageOpen] = useState<boolean>(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const { isOpen: isLaunchAdModalOpen, onOpen: onLaunchAdModalOpen, onOpenChange: onLaunchAdModalOpenChange } = useDisclosure();
  const [schedules, setSchedules] = useState<any>([]);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (emailInstruction && emailInstruction.email_options) {
      setOptionEdits([...emailInstruction.email_options]);
    }
  }, [emailInstruction]);

  const handleOnLaunchAd = async () => {
    onLaunchAdModalOpen();
    // try {
    //   const pinterestAnalytics = await axios.post(`/api/planning/${tabsList[type].title.toLowerCase().replaceAll(" ", "")}/launchAd`, {
    //     accessToken: (session as any)[tabsList[type].provider].accessToken,
    //     refreshToken: (session as any)[tabsList[type].provider].refreshToken
    //   });

    //   messageApi.success('Launch Ad success');
    // } catch (error) {
    //   messageApi.error('Something went wrong');
    // }
  };

  if (socialMedia.length === 0) return <></>;

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
          <h3>{tabsList[type].title} Optimizations</h3>
        </div>
        <button className="flex items-center gap-2 px-4 bg-none text-primary-purple">
          <BiRefresh className="w-5 h-5 text-primary-purple" />
          Refresh
        </button>
      </div>
      <div className="bg-[#23252b] w-full !p-0 rounded-lg">
        <div className="bg-[#1E1F24] text-[#848484] w-full flex gap-10 items-center">
          <div className="px-10 py-3">
            <div className="flex items-center gap-2 font-normal text-left">
              <BiCheck className="w-6 h-6" />
              <p className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
                Your recent posts
              </p>
            </div>
          </div>
          <MediaStepper
            value={activeMedia}
            options={socialMedia.map((val, i) => ({
              name: `Media ${i + 1}`,
              value: i,
            }))}
            onChange={(option) => {
              setActiveMedia(option.value);
            }}
          />
        </div>

        <div className="w-full px-10 py-6">
          <div className="flex items-center gap-2 p-2 mt-2 rounded-lg bg-background-300">
            <BiInfoCircle className="w-4 h-4" />
            <p className="text-[15px]">
              Media {activeMedia + 1} - Choose and edit optimized media content
              to publish to {tabsList[type].title}
            </p>
          </div>
          <div className="w-full py-4">
            <div className="p-0 border rounded-lg bg-background-100 border-background-300">
              <div
                className="flex items-center justify-between w-full gap-4 px-8 py-4 cursor-pointer"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/seo/optimization.svg"
                    alt={'Optimization'}
                    width={24}
                    height={24}
                  />
                  <h3>Trending Topics</h3>
                  <Chip className="text-white rounded-md bg-background-300">
                    Optimization Option 1
                  </Chip>
                </div>
                <BiChevronDown className="w-5 h-5" />
              </div>
              <div className="w-full px-8 py-4" hidden={!isOpen}>
                <Menu as="div" className="relative inline-block text-left">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="flex items-center gap-2 not-italic font-semibold leading-5 text-center text-white rounded-lg">
                          <Image
                            src="/images/socialMedia/portrait.svg"
                            width={20}
                            height={20}
                            alt="Portrait"
                          />
                          {ratio}
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
                                    active && 'bg-background-300'
                                  } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                                  onClick={() => {
                                    setRatio('Square');
                                  }}
                                >
                                  Square
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active && 'bg-background-300'
                                  } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                                  onClick={() => {
                                    setRatio('Landscape');
                                  }}
                                >
                                  Landscape
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active && 'bg-background-300'
                                  } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                                  onClick={() => {
                                    setRatio('Portrait');
                                  }}
                                >
                                  Portrait
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
                <div className="flex flex-wrap gap-8 mt-6">
                  <div className="w-[336px]">
                    <div className="bg-[#27282F] w-full rounded-lg overflow-hidden">
                      <Image
                        src={socialMedia[activeMedia]?.img_url}
                        width={261}
                        height={261}
                        alt={socialMedia[activeMedia]?.img_url}
                        className="w-full h-[261px] object-center object-cover"
                      />

                      <div className="p-5 text-primary-gray">
                        {socialMedia[activeMedia]?.content.caption}
                        {socialMedia[activeMedia]?.content.keywords?.map(
                          (keyword: any) => ' #' + keyword
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row-reverse w-full gap-4 mt-4">
                      <BiCopy className="w-5 h-5" />
                      <BiDownload className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex-1 p-0 flex-wrap">
                    <div className="border rounded-lg border-background-300">
                      <div
                        className="flex items-center px-8 py-4 cursor-pointer"
                        onClick={() => {
                          setIsBasicOpen((prev) => !prev);
                        }}
                      >
                        <BiStar className="w-5 h-5" />
                        <span className="flex-1 px-2">
                          Based on your profile
                        </span>
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                      <div
                        className="px-8 py-4 border-t border-t-background-300"
                        hidden={!isBasicOpen}
                      >
                        <h3 className="font-medium text-white text-normal">
                          Social Media Objectives:
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          {company.business_objectives.map((val, i) => (
                            <Chip
                              key={i}
                              className="rounded-lg bg-background-300 text-primary-gray"
                            >
                              {val}
                            </Chip>
                          ))}
                        </div>

                        <h3 className="mt-4 font-medium text-white text-normal">
                          Target Audience
                        </h3>
                        <div className="w-full">{company.target_audice}</div>

                        <h3 className="mt-6 font-medium text-white text-normal">
                          Trending Keywords
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                          {socialMedia[activeMedia]?.content.keywords?.map(
                            (val: any, idx: number) => (
                              <Chip
                                key={idx}
                                className="rounded-lg bg-background-300 text-primary-gray"
                              >
                                {val}
                              </Chip>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border rounded-lg border-background-300">
                      <div
                        className="flex items-center px-8 py-4 cursor-pointer"
                        onClick={() => {
                          setIsDetailedOpen((prev) => !prev);
                        }}
                      >
                        <BiAward className="w-5 h-5" />
                        <span className="flex-1 px-2">
                          Detailed recommendation
                        </span>
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                      <div
                        className="w-full px-8 py-4 border-t border-t-background-300"
                        hidden={!isDetailedOpen}
                      >
                        <div className="flex">
                          <div
                            className="flex-1"
                            style={{ overflowWrap: 'anywhere' }}
                          >
                            <h6 className="text-white text-normal">Image</h6>
                            <p className="mt-2 text-primary-gray">
                              {socialMedia[activeMedia]?.content.image}
                            </p>
                          </div>
                          <BiCopy className="w-5 h-5" />
                        </div>

                        <div className="flex mt-4">
                          <div
                            className="flex-1"
                            style={{ overflowWrap: 'anywhere' }}
                          >
                            <h6 className="text-white text-normal">
                              Potential Outcome
                            </h6>
                            <p className="mt-2 text-primary-gray">
                              {
                                socialMedia[activeMedia]?.content['potential_outcome'] || socialMedia[activeMedia]?.content['potential outcome']
                              }
                            </p>
                          </div>
                          <BiCopy className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border rounded-lg border-background-300">
                      <div
                        className="flex items-center px-8 py-4 cursor-pointer"
                        onClick={() => {
                          setIsTextOpen((prev) => !prev);
                        }}
                      >
                        <BiAward className="w-5 h-5" />
                        <span className="flex-1 px-2">Text</span>
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                      <div
                        className="w-full px-8 py-4 border-t border-t-background-300"
                        hidden={!isTextOpen}
                      >
                        <div className="flex items-center justify-between">
                          <h6 className="text-white text-normal">Caption</h6>
                          <BiCopy className="w-5 h-5" />
                        </div>
                        <div className="bg-[#212228] border border-background-300 rounded-lg text-primary-gray px-6 py-4 mt-4">
                          {socialMedia[activeMedia]?.content.caption}
                        </div>

                        {/* <div className="mt-4">
                          <h6 className="text-white text-normal">
                            Generate texts with AI
                          </h6>
                          <p className="mt-2 text-primary-gray">
                            Let our AI write conversion focused text for your
                            images.
                          </p>
                        </div>

                        <button className="px-3 py-1 mt-4 text-white rounded-lg bg-primary-purple">
                          Regenerate Text
                        </button> */}
                      </div>
                    </div>

                    <div className="mt-4 border rounded-lg border-background-300">
                      <div
                        className="flex items-center px-8 py-4 cursor-pointer"
                        onClick={() => {
                          setIsImageOpen((prev) => !prev);
                        }}
                      >
                        <BiImage className="w-5 h-5" />
                        <span className="flex-1 px-2">Image</span>
                        <BiChevronDown className="w-5 h-5" />
                      </div>
                      <div
                        className="w-full px-8 py-4 border-t border-t-background-300"
                        hidden={!isImageOpen}
                      >
                        <div className="flex items-center justify-between">
                          <h6 className="text-white text-normal">
                            Attached images
                          </h6>
                          <BiCopy className="w-5 h-5" />
                        </div>
                        <Image
                          src={socialMedia[activeMedia]?.img_url}
                          width={261}
                          height={261}
                          alt={socialMedia[activeMedia]?.img_url}
                          className="rounded-lg mt-4 w-[192px] h-[160px] object-center object-cover"
                        />

                        {/* <div className="mt-4">
                          <h6 className="text-white text-normal">
                            Product Image
                          </h6>
                          <p className="mt-2 text-primary-gray">
                            Let our AI create optimized images for your content
                            type.
                          </p>
                        </div>

                        <button className="px-3 py-1 mt-4 text-white rounded-lg bg-primary-purple">
                          Regenerate Image
                        </button> */}
                      </div>
                    </div>

                    <div className="mt-4 border rounded-lg border-background-300">
                      <div
                        className="flex items-center px-8 py-4 cursor-pointer"
                        onClick={() => {
                          setIsCalendarOpen((prev) => !prev);
                        }}
                      >
                        <BiCalendar className="w-5 h-5" />
                        <span className="flex-1 px-2">Calendar</span>
                        <BiChevronDown className="w-5 h-5" />
                      </div>

                      <div
                        className="w-full px-8 py-4 border-t border-t-background-300"
                        hidden={!isCalendarOpen}
                      >
                        <div className="w-full">
                          <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 lg:col-span-6">
                              <h6 className="text-sm text-white">Date</h6>
                              <DatePicker
                                format="ddd, MMM DD, YYYY"
                                className="w-full mt-2 text-white bg-background-200 border-background-300 h-[40px]"
                              />
                            </div>

                            <div className="relative col-span-12 lg:col-span-6">
                              <h6 className="text-sm text-white">Time</h6>
                              <div className="flex items-center gap-1 mt-2">
                                <Select
                                  className="flex-1"
                                  options={[...new Array(12)].map((_, i) => ({
                                    name: `${i}`,
                                    value: i,
                                  }))}
                                />
                                <p>:</p>
                                <Select
                                  className="flex-1"
                                  options={[...new Array(60)].map((_, i) => ({
                                    name: `${i}`,
                                    value: i,
                                  }))}
                                />
                                <Select
                                  className="flex-1"
                                  options={[
                                    {
                                      name: 'am',
                                      value: 0,
                                    },
                                    {
                                      name: 'pm',
                                      value: 1,
                                    },
                                  ]}
                                />
                              </div>
                            </div>

                            <div className="flex items-center justify-between col-span-12">
                              <div className="flex items-center gap-2">
                                <u>Use optimal times</u>
                                <BiChevronDown className="w-5 h-5" />
                              </div>
                              <BiTrash className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="px-8 py-4 border-t border-t-background-300"
                        hidden={!isCalendarOpen}
                      >
                        <button className="px-3 py-1 text-white underline rounded-lg">
                          + Add more scheduled times
                        </button>
                      </div>
                    </div>

                    <div className="w-full text-right">
                      <button className="px-6 py-2 mt-4 text-white rounded-lg bg-primary-purple" onClick={handleOnLaunchAd}>
                        Launch to {tabsList[type].title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LaunchAdModal isOpen={isLaunchAdModalOpen} onOpenChange={onLaunchAdModalOpenChange} socialMedia={socialMedia[activeMedia]} company={company} />
    </>
  );
};

export default SocialMedia;
