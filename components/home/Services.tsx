'use client';
import { Avatar } from '@nextui-org/react';
import * as React from 'react';
import { BiSolidStar, BiStar } from 'react-icons/bi';

interface IServicesProps {}

const Services: React.FunctionComponent<IServicesProps> = (props) => {
  return (
    <div className="mt-20 max-w-[1240px] w-full mx-auto">
      <h2 className="text-[42px] font-poppins text-white font-bold text-center break-words whitespace-pre-wrap break-all">
        We Help Our Clients Achieve&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D634FF] to-[#4663FF]">
          Transformation
        </span>
      </h2>
      <p className="mt-6 text-xl font-semibold text-center text-white font-open-sans">
        Here's what they have to say about us
      </p>
      <div className="flex flex-wrap items-start justify-center gap-6 mt-6">
        <div className="w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
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
            <Avatar src="/images/home/avatar/1.jpg" size="md" />
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

        <div className="w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
          <div className="flex items-center w-full gap-1">
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
            <BiSolidStar className="text-[#FFD74A] w-5 h-5" />
          </div>
          <div className="flex-1 max-h-[140px] overflow-hidden" style={{ overflowWrap: 'anywhere' }}>
            Finally, a tool that doesn't just throw spaghetti at the wall, but
            carefully selects the strands for a perfect al dente performance.
            AdsGency AI is like the dream sidekick for marketers!
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/avatar/2.jpg" size="md" />
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

        <div className="w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
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
            the perfect solution to this pain point. I can't wait to give it a
            try and see how the AI-generated ads perform.
          </div>
          <div className="flex items-center w-full gap-4">
            <Avatar src="/images/home/avatar/3.jpg" size="md" />
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

        <div className="w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
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
            <Avatar src="/images/home/avatar/4.jpg" size="md" />
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

        <div className="w-[300px] h-[250px] px-5 py-3 flex flex-col gap-3 rounded-2xl border-t border-t-[#7D55FA] border-b border-b-[#7D55FA] bg-[#010314] shadow-[0_16px_80px_0px_rgba(104, 89, 255, 0.20)">
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
            <Avatar src="/images/home/avatar/5.jpg" size="md" />
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
      </div>
    </div>
  );
};

export default Services;
