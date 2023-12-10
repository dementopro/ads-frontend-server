'use client';
import { FC, useState } from 'react';
import { BiSolidStar } from 'react-icons/bi';
import "./styles.css";

const tabs = [
  {
    value: 0,
    name: 'SEO',
    tagline: 'On-pgae / Off-page optimizations',
  },
  {
    value: 1,
    name: 'Social Media',
    tagline: 'Maximize omnichannel ROI',
  },
  {
    value: 2,
    name: 'Email Marketing',
    tagline: "Quickly draft targeted emails to achieve your KPI's",
  },
];

interface IGetRecommendationsProps {}

const GetRecommendations: FC<IGetRecommendationsProps> = (props) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="w-full max-w-[1240px] mx-auto mt-20">
      <div className="relative grid grid-cols-12 gap-10 px-4 mt-4 overflow-visible">
        <div className="bg-[#010314] rounded-2xl p-6 desktop:col-span-7 col-span-12 flex gap-6">
          <div className="flex-1">
            <div className="overflow-hidden rounded-lg">
              <div className="bg-[#0E1125] px-6 py-3 flex items-center gap-2">
                <BiSolidStar className="w-4 h-4 text-[#FFD74A]" />
                Recommendations
              </div>
              <div className="bg-[#19173A] transition-all">
                <div className={tab === 0 ? "fade-in" : "hidden"}>
                  <div className="px-6 py-3">
                    <h6 className="text-[15px] font-bold text-white">
                      Get Identified
                    </h6>
                    <p className="text-xs font-normal text-white">
                      Low impact for Search Engine Optimization
                    </p>
                  </div>
                  <div className="px-6 py-3">
                    <h6 className="text-[15px] font-bold text-white">
                      Solution
                    </h6>
                    <p className="text-xs font-normal text-white">
                      Remove meta keywords tag from HMTL
                    </p>
                  </div>
                </div>
                <div className={tab === 1 ? "fade-in" : "hidden"}>
                  <div className="px-6 py-3">
                    <h6 className="text-[15px] font-bold text-white">
                      Based on historical data from your integrations
                    </h6>
                    <div className="mt-3 flex items-center gap-2 text-white text-[13px] font-medium">
                      <img src="/images/planning/instagram.svg" />
                      Instagram
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-white text-[13px] font-medium">
                      <img src="/images/planning/meta.svg" />
                      Meta
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-white text-[13px] font-medium">
                      <img src="/images/planning/linkedin.svg" />
                      Linkedin
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-white text-[13px] font-medium">
                      <img src="/images/planning/youtube.svg" />
                      Youtube
                    </div>
                  </div>
                </div>
                <div className={tab === 2 ? "fade-in" : "hidden"}>
                  <div className='px-6 py-3'>
                    <h6 className="text-[15px] font-bold text-white">
                      Email & Sequences
                    </h6>
                    <p className='mt-3 text-xs font-normal text-white'>Welcome email option 1 - brand awareness</p>
                    <p className='mt-3 text-xs font-normal text-white'>Welcome email option 2 - customer retention</p>
                    <p className='mt-3 text-xs font-normal text-white'>Welcome email option 3 - lead generation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[250px] w-[250px]">
            <div
              className={`transition-all w-full px-6 py-3 text-center cursor-pointer rounded-lg select-none ${
                tab === 0
                  ? 'border-none bg-gradient-to-r from-[#6859FF] to-[#AF41FF]'
                  : 'border border-[#7D55FA]'
              }`}
              onClick={() => {
                setTab(0);
              }}
            >
              <h6 className="text-2xl font-bold tracking-tight font-poppins">
                SEO
              </h6>
              <p className="font-semibold font-open-sans text-[15px]">
                On-page / Off-page optimizations
              </p>
            </div>
            <div
              className={`transition-all w-full px-6 py-3 mt-3 text-center cursor-pointer rounded-lg select-none ${
                tab === 1
                  ? 'border-none bg-gradient-to-r from-[#6859FF] to-[#AF41FF]'
                  : 'border border-[#7D55FA]'
              }`}
              onClick={() => {
                setTab(1);
              }}
            >
              <h6 className="text-2xl font-bold tracking-tight font-poppins">
                Social Media
              </h6>
              <p className="font-semibold font-open-sans text-[15px]">
                Maximize omnichannel ROI
              </p>
            </div>
            <div
              className={`transition-all w-full px-6 py-3 mt-3 text-center rounded-lg cursor-pointer select-none ${
                tab === 2
                  ? 'border-none bg-gradient-to-r from-[#6859FF] to-[#AF41FF]'
                  : 'border border-[#7D55FA]'
              }`}
              onClick={() => {
                setTab(2);
              }}
            >
              <h6 className="text-2xl font-bold tracking-tight font-poppins">
                Email Marketing
              </h6>
              <p className="font-semibold font-open-sans text-[15px]">
                Quickly draft targeted emails to achieve your KPI’s
              </p>
            </div>
          </div>
        </div>
        <div className="relative android:col-span-12 ipadmini:col-span-5 ipad:col-span-5 desktop:col-span-5">
          <div
            className="absolute top-0 left-0 z-0 h-full ipadmini:w-full ipad:w-full desktop:col-span-6 translate-y-[10%] opacity-70"
            style={{
              background:
                'radial-gradient(60% 50% at 50.00% 50.00%, #000 0%, rgba(104, 89, 255, 0.27) 33.65%, rgba(50, 46, 84, 0.00) 100%)',
            }}
          ></div>
          <div className="flex items-center gap-2">
            <img
              src="/images/home/sparkles.svg"
              className="android:w-[21px] ipadmini:w-[26px] ipad:w-[30px] desktop:w-[36px] android:h-[21px] ipadmini:h-[26px] ipad:h-[26px] desktop:h-[26px]"
              alt="sparkles"
            />
            <h5 className="uppercase bg-gradient-to-r from-[#6859FF] bg-clip-text text-transparent to-[#AF41FF] text-base">
              How It Works
            </h5>
          </div>
          <p className="mt-6 text-[42px] font-extrabold text-white">
            Get Recommendations in seconds
          </p>
          <p className="mt-6 text-white text-[20px] font-semibold">
            Our optimizations are backed by your historical data. Just choose
            your content type and watch as our AI scans your data 90% faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetRecommendations;
