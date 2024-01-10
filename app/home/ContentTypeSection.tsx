import React, { FC, Fragment, useContext, useState } from 'react';

import { TopToLeftCurveLineArrow } from '@/components/tutorial/Arrows';
import CloseButton from '@/components/tutorial/CloseButton';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import { useTutorialsContext } from '@/context/tutorials';
import styles from '@/app/planning/planning.module.css';
import type { CompanyDetailForm } from '@/types/planning';
import { AccountContext } from '@/context/account';
import SubscribePopup from '@/components/subscribePopup/SubscribePopup';
import { useRouter } from 'next/navigation';

interface ContentTypeSectionProps {
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
}
const ContentTypeSection: FC<ContentTypeSectionProps> = ({
  setFormData,
  formData,
}) => {
  const {
    isInTutorialMode,
    tutorialCampaign,
    currentGuideMode,
    setIsInTutorialMode,
  } = useTutorialsContext();
  const { creditInfo } = useContext(AccountContext);
  const [isSubscribePopupOpen, setIsSubscribePopupOpen] =
    useState<boolean>(false);
  const setContentType = (type: number) => {
    let temp = { ...formData };
    temp['content_type'] = (() => {
      switch (type) {
        case 0:
          return 'SEO';
        case 1:
          return 'Social Media';
        case 2:
          return 'Email Marketing';
        case 3:
          return 'Infographics';
        case 4:
          return 'Landing Page';
        case 5:
          return 'Video';
        default:
          return '';
      }
    })();
    setFormData(temp);
  };

  const router = useRouter();

  const toggleSubscribePopup = () => {
    setIsSubscribePopupOpen(!isSubscribePopupOpen);
  };

  return (
    <div id="content-type" className={`${styles.mainDiv} mt-[32px] relative`}>
      <p className="w-full text-white h-[18px] mb-[24px] not-italic font-medium leading-[normal]">
        2.&nbsp;Choose your content type
      </p>
      <div className="flex flex-wrap items-start gap-[32px] self-stretch h-auto">
        <button
          className={`flex justify-center items-center text-[15px] w-[63px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === 'seo'
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(0);
          }}
        >
          <span className="w-[31px] h-[24px] text-[#ABABAB] text-[15px]">
            SEO
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[123px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === 'social media'
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(1);
          }}
        >
          <span className="w-[92px] h-[24px] text-[#ABABAB] text-[15px]">
            Social&nbsp;Media
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[148px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === 'email marketing'
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(2);
          }}
        >
          <span className="w-[120px] h-[24px] text-[#ABABAB] text-[15px]">
            Email&nbsp;Marketing
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[148px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === 'infographics'
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(3);
          }}
        >
          <span className="w-[120px] h-[24px] text-[#ABABAB] text-[15px]">
            Infographics
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[148px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === 'landing page'
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            setContentType(4);
          }}
        >
          <span className="w-[120px] h-[24px] text-[#ABABAB] text-[15px]">
            Landing Page
          </span>
        </button>
        <button
          className={`flex justify-center items-center text-[15px] w-[148px] h-[40px]  px-[16px] py-[8px] rounded-lg border-solid ${
            formData.content_type.toLowerCase() === 'video'
              ? 'border border-[#ABABAB] text-white font-medium'
              : 'bg-[#35363A] text-[#ABABAB]'
          }`}
          onClick={() => {
            if (creditInfo) {
              setContentType(5);
            } else {
              toggleSubscribePopup();
            }
          }}
        >
          <span className="w-[120px] h-[24px] text-[#ABABAB] text-[15px]">
            Video
          </span>
        </button>
      </div>

      {isInTutorialMode &&
        tutorialCampaign === 'HOME' &&
        currentGuideMode.mode === 'CONTENTTYPE' && (
          <Fragment>
            <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-70px]">
              <CloseButton />
            </div>
            <div className="absolute left-[200px] bottom-full flex items-center z-[999]">
              <TopToLeftCurveLineArrow
                width={100}
                height={84}
                className="tutorial-element"
              />
              <div
                className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-5 mb-20`}
              >
                Choose which type of content you want to optimize.
              </div>
              <p className="text-white ml-20 mt-10">
                *Note: you can only select one content type at a time
              </p>
            </div>
            <div className="absolute left-[100px] top-full translate-y-[30px]">
              <NavigationButtons onNext={() => setIsInTutorialMode(false)} />
            </div>
          </Fragment>
        )}
      <SubscribePopup
        isOpen={isSubscribePopupOpen}
        togglePopup={toggleSubscribePopup}
        router={router}
      />
    </div>
  );
};

export default ContentTypeSection;
