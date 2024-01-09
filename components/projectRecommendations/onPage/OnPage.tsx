import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from 'antd';

import {
  TopToRightBezierCurveLineArrow,
  BottomToRightCurveLineArrow,
  LongTopToLeftBezierCurveLineArrow,
} from '@/components/tutorial/Arrows';
import CloseButton from '@/components/tutorial/CloseButton';
import NavigationButtons from '@/components/tutorial/NavigationButtons';
import { useTutorialsContext } from '@/context/tutorials';
import { useSeoAnalyzerContext } from '@/context/seo';
import styles from '@/./app/planning/planning.module.css';

interface OnPageProps {
  onpage: any;
}

const OnPage: React.FC<OnPageProps> = ({ onpage }) => {
  const {
    isInTutorialMode,
    tutorialCampaign,
    currentGuideMode,
    setIsInTutorialMode,
  } = useTutorialsContext();
  const router = useRouter();

  return (
    <div
      className={`${styles.onPageDiv} ${
        isInTutorialMode &&
        tutorialCampaign === 'SEO' &&
        currentGuideMode.mode === 'RECOMMENDATION'
          ? 'overflow-visible'
          : 'overflow-x-auto'
      }`}
    >
      {onpage.map((issue: any, i: any) => (
        <div
          id={i === 0 ? 'first-seo-on-result' : ''}
          className={`${styles.mainDiv} gap-y-[24px] w-full relative`}
          key={`onpage_issue_${i}`}
        >
          <div className="flex flex-row gap-x-[8px]">
            <p className="w-[16px] h-[16px]">⭐</p>
            <p className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
              Recommendations
            </p>
          </div>
          <p className="text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
            SEO Technical Optimizations
          </p>
          <p className="text-[15px] text-[color:var(--primary-300,#ABABAB)]">
            We found the following from your URL {issue.url}
          </p>
          <div className="block w-full">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex-none block">
                  {issue.warnings.map((val: any, i: any) => (
                    <p
                      key={i}
                      className="text-[15px] text-[color:var(--primary-300,#ABABAB)] whitespace-pre-wrap"
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'anywhere',
                      }}
                    >
                      - {val}
                    </p>
                  ))}
                </div>
              </div>
              <button
                className="px-5 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple relative"
                onClick={() => {
                  router.push(`/contentType/seo?type=0&url=${issue.url}`);
                }}
              >
                <span className="text-[13.5px]">View</span>

                {isInTutorialMode &&
                  tutorialCampaign === 'SEO' &&
                  currentGuideMode.mode === 'RECOMMENDATION' &&
                  i === 0 && (
                    <div className="absolute right-0 top-full translate-x-[-20px] translate-y-[10px] flex justify-end tutorial-element">
                      <TopToRightBezierCurveLineArrow />
                      <div className="absolute right-0 top-full translate-y-[10px]">
                        <div
                          className={
                            '!w-[310px] bg-primary-purple rounded-xl text-white p-5 text-md'
                          }
                        >
                          Click “view” to review specific optimizations for
                          search engine friendliness
                        </div>
                      </div>
                    </div>
                  )}
              </button>
            </div>
          </div>

          {isInTutorialMode &&
            tutorialCampaign === 'SEO' &&
            currentGuideMode.mode === 'RECOMMENDATION' &&
            i === 0 && (
              <Fragment>
                <div className="absolute right-full bottom-full translate-x-[-30px] translate-y-[-280px] tutorial-element">
                  <CloseButton />
                </div>
                <div className="absolute left-[120px] bottom-full translate-y-[-90px] flex items-center tutorial-element">
                  <LongTopToLeftBezierCurveLineArrow />
                  <div
                    className={`w-[310px] bg-primary-purple rounded-md text-white p-3 text-md tutorial-element ml-5 mb-[200px]`}
                  >
                    Toggle between on page and off page recommendations
                  </div>
                </div>
                <div className="absolute left-0 top-full w-full translate-y-[5px] flex tutorial-element">
                  <div
                    className={
                      '!w-[310px] bg-primary-purple rounded-xl text-white p-5 text-md translate-x-[-100px] translate-y-[30px] mr-5'
                    }
                  >
                    🎉Congratulations!🎉 You now have tailored recommendations
                    to help improve your SEO
                  </div>
                  <div className="relative flex-1">
                    <div className="absolute left-0 bottom-0 translate-x-[-100px]">
                      <BottomToRightCurveLineArrow width={100} height={84} />
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-full w-full translate-y-[250px] flex tutorial-element">
                  <NavigationButtons
                    onBack={() => setIsInTutorialMode(false)}
                    onNext={() => setIsInTutorialMode(false)}
                  />
                </div>
              </Fragment>
            )}
        </div>
      ))}
    </div>
  );
};

export default OnPage;
