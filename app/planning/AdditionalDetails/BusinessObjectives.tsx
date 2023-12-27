import { FC, Fragment } from 'react';
import { CompanyDetailForm } from '@/types/planning';

import { TopToLeftCurveLineArrow } from '@/components/tutorial/Arrows';
import CloseButton from '@/components/tutorial/CloseButton';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import { useTutorialsContext } from '@/context/tutorials';
import styles from '@/./app/planning/planning.module.css';

interface ContentTypeSectionProps {
  title: string;
  options: string[];
  formData: CompanyDetailForm;
  setFormData: (formData: CompanyDetailForm) => void;
}

const BusinessObjectives: FC<ContentTypeSectionProps> = ({
  title,
  options,
  setFormData,
  formData,
}) => {
  const { isInTutorialMode, tutorialCampaign, currentGuideMode, setIsInTutorialMode } = useTutorialsContext();

  return (
    <div id="business-objectives-section" className={`${styles.mainDiv} gap-[24px] mt-[16px] relative`}>
      <p className="w-[521px] text-[15px] h-[18px] text-[color:#B3ACFF]">
        { title }
      </p>
      <div className={`gap-[16px] flex flex-col items-start self-stretch`}>
        <div className="flex gap-x-[16px] gap-y-[16px] flex-wrap">
          {
            options.map((val, i) => (
              <button
                key={i}
                className={`px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB] whitespace-nowrap ${
                  formData.business_objectives.includes(val)
                    ? 'outline-1 outline outline-[#ABABAB] text-white font-medium'
                    : 'bg-[#35363A] text-[#ABABAB]'
                }`}
                onClick={() => {
                  if (formData.business_objectives.includes(val)) {
                    setFormData({
                      ...formData,
                      business_objectives: formData.business_objectives.filter((item) => item != val)
                    })
                  } else {
                    setFormData({
                      ...formData,
                      business_objectives: [
                        ...formData.business_objectives,
                        val
                      ]
                    })
                  }
                }}
              >
                { val }
              </button>
            ))
          }
        </div>
      </div>

      {
        isInTutorialMode && tutorialCampaign === 'SEO' && currentGuideMode.mode === 'OBJECTIVES' && (
          <Fragment>
            <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-70px] tutorial-element">
              <CloseButton />
            </div>
            <div className="absolute left-[200px] bottom-full flex items-center tutorial-element">
              <TopToLeftCurveLineArrow width={100} height={84} />
              <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-5 mb-20`}>
                Choose which business objectives you want your recommendations to focus on  & watch as our AI creates optimizations to achieve your goals
              </div>
            </div>
            <div className="absolute left-[100px] top-full translate-y-[30px] tutorial-element">
              <NavigationButtons onNext={() => setIsInTutorialMode(false)} />
            </div>
          </Fragment>
        )
      }

      {
        isInTutorialMode && tutorialCampaign === 'EMAIL' && currentGuideMode.mode === 'OBJECTIVES' && (
          <Fragment>
            <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-70px] tutorial-element">
              <CloseButton />
            </div>
            <div className="absolute left-[200px] bottom-full flex items-center tutorial-element">
              <TopToLeftCurveLineArrow width={100} height={84} />
              <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-5 mb-20`}>
                Choose which business objectives you want your recommendations to focus on  & watch as our AI creates optimizations to achieve your goals
              </div>
            </div>
            <div className="absolute left-[100px] top-full translate-y-[30px] tutorial-element">
              <NavigationButtons onNext={() => setIsInTutorialMode(false)} />
            </div>
          </Fragment>
        )
      }

      {
        isInTutorialMode && tutorialCampaign === 'SOCIAL' && currentGuideMode.mode === 'OBJECTIVES' && (
          <Fragment>
            <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-70px] tutorial-element">
              <CloseButton />
            </div>
            <div className="absolute left-[200px] bottom-full flex items-center tutorial-element">
              <TopToLeftCurveLineArrow width={100} height={84} />
              <div className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-5 mb-20`}>
                Choose which business objectives you want your recommendations to focus on  & watch as our AI creates optimizations to achieve your goals
              </div>
            </div>
            <div className="absolute left-[100px] top-full translate-y-[30px] tutorial-element">
              <NavigationButtons onNext={() => setIsInTutorialMode(false)} />
            </div>
          </Fragment>
        )
      }
    </div>
  );
};

export default BusinessObjectives;
