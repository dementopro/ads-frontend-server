'use client';
import { Avatar } from '@nextui-org/react';
import React, { useState, useEffect } from 'react';
import { BiSolidStar, BiStar } from 'react-icons/bi';

interface IServicesProps { }

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  const [text, setText] = useState('');
  const textOptions = ['Transformation', 'Strategic Planning', 'Content Generation', 'Ads Optimization', 'Insights'];
  const animationDuration = 2000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate through text options
      setText(textOptions[(textOptions.indexOf(text) + 1) % textOptions.length]);
    }, animationDuration);

    return () => clearInterval(intervalId);
  }, [text]);

  const getDynamicClasses = () => {
    // Define CSS classes based on the current text
    switch (text) {
      case 'Transformation':
        return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
      case 'Strategic Planning':
        return 'text-violet-400';
      case 'Content Generation':
        return 'bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text';
      case 'Ads Optimization':
        return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
      case 'Insights':
        return 'text-violet-400';
      default:
        return 'bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text';
    }
  };
  const dynamicClasses = getDynamicClasses();
  return (
    <div className="mt-20 max-w-[1240px] w-full mx-auto">
      <div className='w-full android:flex-col ipadmini:flex-row ipad:flex-row desktop:flex-row justify-center items-center android:gap-[0px] ipadmini:gap-[6px] ipad:gap-[8px] desktop:gap-[10px] inline-flex'>
        <div className="text-white android:text-[34px] desktop:text-[42px] font-bold font-poppins">
          We Help our</div>
        <div className='text-white android:text-[34px] desktop:text-[42px] font-bold font-poppins'>
          Clients Achieve
        </div>
        <div className={`${dynamicClasses} android:text-[34px] desktop:text-[42px] font-bold font-poppins`}>
          {text}
        </div>
      </div>
      <p className="mt-6 text-xl font-semibold text-center text-white font-open-sans">
        Here&apos;s what they have to say about us
      </p>
      <div className="flex android:mx-[30px] ipad:mx-0 android:pb-[30px] ipad:pb-0 android:overflow-x-auto ipad:overflow-x-hidden ipad:flex-wrap items-start android:justify-start ipad:justify-center gap-6 mt-6">
        <div className="shrink-0 w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
          <div className="flex items-center w-full gap-1">
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
          </div>
          <div className="flex-1 max-h-[140px] overflow-hidden" style={{ overflowWrap: 'anywhere' }}>
            As a marketer myself, I appreciate the value of effortlessly
            creating engaging ads, maximizing ROI, and gaining data-driven
            insights for multichannel marketing.
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/testimonial/David.svg" size="md" />
            <div>
              <h6 className="text-xs font-semibold text-white font-poppins">
                David Saadioui
              </h6>
              <p className="text-[#A09BAE] font-open-sans text-xs font-normal">
                Founder @ PRKD
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
          <div className="flex items-center w-full gap-1">
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
          </div>
          <div className="flex-1 max-h-[140px] overflow-hidden" style={{ overflowWrap: 'anywhere' }}>
            Finally, a tool that doesn&apos;t just throw spaghetti at the wall, but
            carefully selects the strands for a perfect al dente performance.
            AdsGency AI is like the dream sidekick for marketers!
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/testimonial/Niroshan.svg" size="md" />
            <div>
              <h6 className="text-xs font-semibold text-white font-poppins">
                Niroshan Ranapathi
              </h6>
              <p className="text-[#A09BAE] font-open-sans text-xs font-normal">
                Software Engineer
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
          <div className="flex items-center w-full gap-1">
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
          </div>
          <div className="flex-1 max-h-[140px] overflow-hidden" style={{ overflowWrap: 'anywhere' }}>
            As a fellow marketer, I understand the struggle of creating ads that
            effectively resonate with our target audience. AdsGency sounds like
            the perfect solution to this pain point. I can&apos;t wait to give it a
            try and see how the AI-generated ads perform.
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/testimonial/Ardash.svg" size="md" />
            <div>
              <h6 className="text-xs font-semibold text-white font-poppins">
                Ardash Benny
              </h6>
              <p className="text-[#A09BAE] font-open-sans text-xs font-normal">
                SaaS Marketer
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
          <div className="flex items-center w-full gap-1">
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
          </div>
          <div className="flex-1 max-h-[140px] overflow-hidden" style={{ overflowWrap: 'anywhere' }}>
            One of the things I love most about this software is its ability to
            analyze large amounts of data and provide insightful metrics. This
            has helped me to uncover hidden patterns and trends that I would
            never have been able to see on my own.
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/testimonial/Jade.svg" size="md" />
            <div>
              <h6 className="text-xs font-semibold text-white font-poppins">
                Jade
              </h6>
              <p className="text-[#A09BAE] font-open-sans text-xs font-normal">
                Product Manager
              </p>
            </div>
          </div>
        </div>

        <div className="shrink-0 w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
          <div className="flex items-center w-full gap-1">
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
          </div>
          <div className="flex-1 max-h-[140px] overflow-hidden" style={{ overflowWrap: 'anywhere' }}>
            I’m really inspired by AdsGency AI’s product and it’s one of the
            most promising companies I’ve seen!
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/testimonial/Alexey.svg" size="md" />
            <div>
              <h6 className="text-xs font-semibold text-white font-poppins">
                Alexey Yurkevich
              </h6>
              <p className="text-[#A09BAE] font-open-sans text-xs font-normal">
                Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
