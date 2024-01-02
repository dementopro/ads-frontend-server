'use client';
import { Avatar } from '@nextui-org/react';
import Image from 'next/image';
import { FC, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import "./styles.css";

interface IDemoProps {}

const Demo: FC<IDemoProps> = (props) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div
      className="py-10 mt-6"
      style={{
        background:
          'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 50%, rgba(50, 46, 84, 0.00) 100%)',
      }}
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 relative ipad:px-[60px] desktop:px-[100px] android:px-[16px] ipad:px-[0px]">
        <h2 className="text-white font-open-sans text-[42px] font-extrabold text-center">
          ✨ Interactive Demo ✨
        </h2>
        <div className="w-full border-y-1 border-y-[#844FFF] p-6 bg-[#010314] rounded-[20px] min-h-[500px] mt-8">
          <div className="flex rounded-[14px] bg-[#15161A] w-full items-stretch justify-self-stretch overflow-hidden p-0">
            <div className="ipad:w-[200px] bg-[#1B1C21] border-r border-r-[#3A3A3A] py-4">
              <div
                className={`flex items-center gap-2 px-5 py-1 hover:bg-[#0d0d0f80] select-none cursor-pointer ${
                  tab === 0 && 'bg-[#7D55FA]'
                }`}
                onClick={() => setTab(0)}
              >
                <img src="/images/sidebar/home.svg" className="w-4 h-4" />
                <span className="hidden text-white ipad:block">
                  Get Started
                </span>
              </div>
              <div
                className={`mt-[10px] flex items-center gap-2 px-5 py-1 hover:bg-[#0d0d0f80] select-none cursor-pointer ${
                  (tab === 1 || tab === 2) && 'bg-[#7D55FA]'
                }`}
                onClick={() => setTab(1)}
              >
                <img
                  src="/images/sidebar/planning.svg"
                  className="w-4 h-4 text-white"
                />
                <span className="hidden text-white ipad:block">Planning</span>
              </div>
              <div className="mt-[10px] flex items-center gap-2 px-5 py-1 hover:bg-[#0d0d0f80] select-none cursor-pointer">
                <img src="/images/sidebar/generate.svg" className="w-4 h-4" />
                <span className="flex-1 hidden text-white ipad:block">
                  Content Type
                </span>
                <BiChevronDown className="w-4 h-4" />
              </div>
              {tab === 3 && (
                <>
                  <div
                    className={`mt-[10px] flex items-center gap-2 px-5 py-1 hover:bg-[#0d0d0f80] select-none cursor-pointer ${
                      tab === 3 && 'bg-[#7D55FA]'
                    }`}
                  >
                    <span className="text-white ipad:indent-3">SEO</span>
                  </div>
                  <div className="mt-[10px] flex items-center gap-2 px-5 py-1 hover:bg-[#0d0d0f80] select-none cursor-pointer">
                    <span className="text-white ipad:indent-3">
                      Social Media
                    </span>
                  </div>
                  <div className="mt-[10px] flex items-center gap-2 px-5 py-1 hover:bg-[#0d0d0f80] select-none cursor-pointer">
                    <span className="text-white ipad:indent-3">
                      Email Marketing
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="flex-1 p-4">
              <section className="flex flex-col justify-center">
                <div className="flex gap-x-[8px] mb-6">
                  <p className="w-[24px] h-[24px] text-black text-2xl not-italic font-medium leading-[normal]">
                    {tab === 0 ? '✨' : '📋'}
                  </p>
                  <h1 className="text-2xl w-full h-[29px] font-medium text-white">
                    {tab === 0
                      ? 'Get Started'
                      : "Let's gather some more information"}
                  </h1>
                </div>
              </section>
              <section
                id="stepper"
                className={`flex items-stretch gap-4 p-2 rounded-xl bg-background-200 ${
                  tab === 3 && 'hidden'
                }`}
              >
                <button
                  className={`flex-1 flex items-center gap-3 rounded-lg px-2 py-1 ${
                    tab === 0 && 'bg-[#7D55FA]'
                  }`}
                  onClick={() => setTab(0)}
                >
                  <div
                    className={`rounded-full w-6 h-6 font-poppins text-normal font-semibold text-center align-middle ${
                      tab === 0
                        ? 'bg-white text-[#7D55FA]'
                        : 'bg-[#4E4A5B] text-[#838383]'
                    }`}
                  >
                    1
                  </div>
                  <span
                    className={`${
                      tab === 0 ? 'text-white' : 'text-[#838383]'
                    } font-poppins text-sm`}
                  >
                    Plan
                  </span>
                </button>
                <button
                  className={`flex-1 flex items-center gap-3 rounded-lg px-2 py-1 ${
                    tab === 1 && 'bg-[#7D55FA]'
                  }`}
                  onClick={() => setTab(1)}
                >
                  <div
                    className={`rounded-full w-6 h-6 font-poppins text-normal font-semibold text-center align-middle ${
                      tab === 1
                        ? 'bg-white text-[#7D55FA]'
                        : 'bg-[#4E4A5B] text-[#838383]'
                    }`}
                  >
                    2
                  </div>
                  <span
                    className={`${
                      tab === 1 ? 'text-white' : 'text-[#838383]'
                    } font-poppins text-sm`}
                  >
                    Additional Details
                  </span>
                </button>
                <button
                  className={`flex-1 flex items-center gap-3 rounded-lg px-2 py-1 ${
                    tab === 2 && 'bg-[#7D55FA]'
                  }`}
                  onClick={() => {
                    if (tab !== 0) setTab(2);
                  }}
                >
                  <div
                    className={`rounded-full w-6 h-6 font-poppins text-normal font-semibold text-center align-middle ${
                      tab === 2
                        ? 'bg-white text-[#7D55FA]'
                        : 'bg-[#4E4A5B] text-[#838383]'
                    }`}
                  >
                    3
                  </div>
                  <span
                    className={`${
                      tab === 2 ? 'text-white' : 'text-[#838383]'
                    } font-poppins text-sm`}
                  >
                    Recommendation
                  </span>
                </button>
              </section>
              <section className="w-full mt-6">
                <div
                  className={`grid grid-cols-12 gap-4 ${
                    tab === 0 ? 'fade-in' : 'hidden'
                  }`}
                >
                  <div className="w-full col-span-12 px-6 py-4 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      1. Add information about your company
                    </h5>
                    <div className="grid grid-cols-12 gap-4 mt-4">
                      <div className="col-span-12 ipad:col-span-6">
                        <label className="text-sm font-medium text-white">
                          Company Name
                        </label>
                        <div className="py-[10px] px-4 bg-background-100 border border-[#3A3A3A] rounded-md text-primary-gray mt-2">
                          Global HR
                        </div>
                      </div>
                      <div className="col-span-12 ipad:col-span-6">
                        <label className="text-sm font-medium text-white">
                          Company Website
                        </label>
                        <div className="py-[10px] px-4 bg-background-100 border border-[#3A3A3A] rounded-md text-primary-gray mt-2">
                          globalhr.com
                        </div>
                      </div>
                      <div className="col-span-12">
                        <label className="text-sm font-medium text-white">
                          Company Description
                        </label>
                        <div className="py-[10px] px-4 bg-background-100 border border-[#3A3A3A] rounded-md text-primary-gray mt-2 min-h-[200px] font-medium text-sm">
                          Global HR is your strategic workforce partner, offering international expertise with a local touch.<br/>From compliance assurance to cutting-edge technologies, we tailor solutions to elevate your business through effective workforce management.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full col-span-12 px-6 py-4 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      2. Choose your content type
                    </h5>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Social Media
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Email Marketing
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] whitespace-nowrap outline-1 outline outline-primary-gray text-white font-medium">
                        SEO
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Infographics
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Video
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-12 gap-4 ${
                    tab === 1 ? 'fade-in' : 'hidden'
                  }`}
                >
                  <div className="w-full col-span-12 px-6 py-4 ipad:col-span-6 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      3. Add your target audience
                    </h5>
                    <div className="mt-4">
                      <div className="py-[10px] px-4 bg-background-100 border border-[#3A3A3A] rounded-md text-primary-gray mt-2 text-sm">
                        No Gender, 20s ot 50s, human resources, talent
                        management, and workforce optimization.
                      </div>
                    </div>
                  </div>
                  <div className="w-full col-span-12 px-6 py-4 ipad:col-span-6 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      4. Add ideal customer profile
                    </h5>
                    <div className="mt-4">
                      <div className="py-[10px] px-4 bg-background-100 border border-[#3A3A3A] rounded-md text-primary-gray mt-2 text-sm">
                        Executives, and other professionals involved in
                        recruitment, employee onboarding, performance management
                      </div>
                    </div>
                  </div>
                  <div className="w-full col-span-12 px-6 py-4 ipad:col-span-6 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      5. Add your competitors
                    </h5>
                    <div className="mt-4">
                      <div className="py-[10px] px-4 bg-background-100 border border-[#3A3A3A] rounded-md text-primary-gray mt-2 text-sm">
                        Workday, Gusto, ADP
                      </div>
                    </div>
                  </div>
                  <div className="w-full col-span-12 px-6 py-4 ipad:col-span-6 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      6. Connect your historical data (optional)
                    </h5>
                    <p className="mt-2 text-sm text-primary-gray">
                      Select for 1 click authentication
                    </p>
                    <div className="flex gap-2 mt-4">
                      <button className="inline-flex justify-center items-center gap-2 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]">
                        <Image
                          width={18}
                          height={18}
                          src={
                            '/images/admin/plan/google-analytics-svgrepo-com.svg'
                          }
                          alt="#"
                        />
                        <label className="inline-flex text-[15px] min-h-[20px] min-w-[112px] justify-center items-center ">
                          Google Analytics
                        </label>
                      </button>
                      <button className="w-[122px] h-[44px] inline-flex justify-center items-center gap-2 px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-[#ABABAB]">
                        <Image
                          width={18}
                          height={18}
                          src={'/images/admin/plan/Vector.svg'}
                          alt="#"
                        />
                        <label className="inline-flex text-[15px] min-h-[20px] min-w-[64px] justify-center items-center ">
                          Semrush
                        </label>
                      </button>
                    </div>
                  </div>
                  <div className="w-full col-span-12 px-6 py-4 bg-background-200 rounded-xl">
                    <h5 className="text-[#B3ACFF] text-sm font-medium">
                      7. Choose your business objectives
                    </h5>
                    <p className="mt-2 text-sm text-primary-gray">
                      Select for 1 click authentication
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] whitespace-nowrap outline-1 outline outline-primary-gray text-white font-medium">
                        Organic Traffic
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Bounce Rate
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Brand Visibility
                      </button>
                      <button className="px-[16px] py-[8px] rounded-lg border-solid bg-[#35363A] text-primary-gray whitespace-nowrap">
                        Content Engagement
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-12 gap-4 ${
                    tab === 2 ? 'fade-in' : 'hidden'
                  }`}
                >
                  <div className="col-span-12 border border-[#27282F] bg-[#1B1C21] px-[14px] py-[10px] rounded-xl">
                    <div className="bg-[#27282F] px-[14px] py-[10px] rounded-lg">
                      <div className="flex flex-row gap-x-[8px]">
                        <h5 className="w-[16px] h-[16px]">⭐</h5>
                        <h5 className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
                          Recommendations
                        </h5>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="mt-2 flex-1 flex flex-col gap-[10px]">
                          <h6 className="text-xs font-medium text-white">
                            SEO Technical Optimzizations
                          </h6>
                          <p className="text-xs text-primary-gray">
                            We found the following from your URL
                            “www.bamboohr.com”{' '}
                          </p>
                          <div className="text-[#FBBC04] rounded-md text-xs bg-background-300 px-2 py-1 w-fit">
                            Anchor missing title tags
                          </div>
                          <div className="text-[#FBBC04] rounded-md text-xs bg-background-300 px-2 py-1 w-fit">
                            Spam keyword found
                          </div>
                          <div className="text-[#FBBC04] rounded-md text-xs bg-background-300 px-2 py-1 w-fit">
                            Image missing alt tags
                          </div>
                        </div>
                        <button
                          className="bg-[#7D55FA] rounded-md font-medium px-3 py-1 text-white cursor-pointer"
                          onClick={() => setTab(3)}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`grid grid-cols-12 gap-4 ${
                    tab === 3 ? 'fade-in' : 'hidden'
                  }`}
                >
                  <div className="col-span-12 border border-[#27282F] bg-[#1B1C21] px-[14px] py-[10px] rounded-xl">
                    <div className="bg-[#27282F] p-4">
                      <div className="flex items-center gap-8">
                        <span className="flex-1">
                          Anchor missing title tags
                        </span>
                        <div className="px-2 py-1 text-green-700 rounded-md bg-background-300">
                          Completed
                        </div>
                        <div className="flex items-center gap-2 text-primary-purple">
                          Close
                          <BiChevronUp className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <hr className="mt-2 opacity-50" />
                    <div className="flex mt-4">
                      <p className="flex-1 text-sm text-primary-gray">
                        Based on your URL https://bamboohr.com, remove meta
                        keywords tag from HTML
                      </p>
                      <button className="bg-[#7D55FA] rounded-md font-medium px-3 py-1 text-white cursor-pointer">
                        Download
                      </button>
                    </div>
                    <h5 className="mt-4 text-sm font-medium text-white">
                      Instructions
                    </h5>
                    <div className="px-4 py-2 mt-4 bg-background-300 text-primary-gray">
                      To fix the issue of a missing title tag for an anchor on a
                      webpage, you need to add a title attribute to the anchor
                      tag.Here is an example of the HTML code with the title
                      attribute added to the anchor tag:
                      <br />
                      <br />
                      {`<a href="https://www.bamboohr.com/pl-pages/demo-request/" title="Request a Demo">Demo Request</a>`}
                    </div>
                  </div>
                </div>
              </section>
              <section className="mt-6 text-right">
                {tab === 0 ? (
                  <button
                    className="bg-[#7D55FA] rounded-md font-medium px-3 py-1 text-white cursor-pointer"
                    onClick={() => setTab(1)}
                  >
                    Add more information
                  </button>
                ) : tab === 1 ? (
                  <button
                    className="bg-[#7D55FA] rounded-md font-medium px-3 py-1 text-white cursor-pointer"
                    onClick={() => setTab(2)}
                  >
                    Submit
                  </button>
                ) : tab === 3 ? (
                  <button
                    className="border border-[#848484] rounded-md font-medium px-3 py-1 text-white cursor-pointer"
                    onClick={() => setTab(2)}
                  >
                    Back
                  </button>
                ) : (
                  <></>
                )}
              </section>
            </div>
          </div>
        </div>

        <div
          className={`transition-all ease-linear duration-[2000] absolute flex items-end gap-2 ${
            tab === 0
              ? '-translate-x-1/2 translate-y-full android:left-[150px] android:bottom-[20px] ipadmini:left-[50px] ipadmini:bottom-1/2'
              : tab === 1
              ? '-translate-x-2/3 android:left-[150px] ipad"left-0 top-[40px]'
              : tab === 2
              ? '-translate-x-1/2 translate-y-full android:left-[150px] android:bottom-[20px] ipadmini:left-[50px] ipadmini:bottom-1/2'
              : '-translate-x-[200px] android:left-[200px] android:bottom-[20px] ipadmini:left-[50px] ipadmini:bottom-1/2 -translate-y-[50px]'
          }`}
        >
          <Avatar src="/images/home/demo/avatar1.svg" size="lg" />
          <div className="pb-[35px]">
            <div className="p-4 bg-[#7D55FA] rounded-xl relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
                className="absolute bottom-0 left-0 -translate-x-1/2"
              >
                <path
                  d="M0.487052 16.5305L7.39258 0.163381L13.4298 11.3689L0.487052 16.5305Z"
                  fill="#7D55FA"
                />
              </svg>
              <p className="text-xs font-semibold text-black font-poppins">
                Samuel
              </p>
              <p className="text-xs text-white max-w-[120px]">
                {tab === 0
                  ? 'I need to optimize my website’s SEO'
                  : tab === 1
                  ? 'Will additional info help my recommendations?'
                  : tab === 2
                  ? 'Wow! That was fast. I see my suggestions based on my website.'
                  : "Great! These are useful suggestions I can use to start cleaning up my website's HTML"}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`absolute transition-all duration-1000 flex gap-5 ${
            tab === 0
              ? 'top-[50px] right-0'
              : tab === 1
              ? 'android:bottom-[100px] ipadmini:bottom-[50px] android:right-[0px] ipadmini:-right-[100px]'
              : tab === 2
              ? 'top-[50px] right-0'
              : 'bottom-[200px] android:right-[0px] ipadmini:-right-[100px]'
          }`}
        >
          <div className="p-4 bg-[#7D55FA] rounded-xl relative mt-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              className="absolute right-0 translate-x-4"
            >
              <path
                d="M16.67 1.79207L0.847482 15.5828L0.275718 0.529541L16.67 1.79207Z"
                fill="#7D55FA"
              />
            </svg>
            <p className="text-xs font-semibold text-black font-poppins">
              Debbie
            </p>
            <p className="text-xs text-white max-w-[120px]">
              {tab === 0
                ? 'Filling out your company information will help us identify improvements'
                : tab === 1
                ? 'Exactly, we want to create targeted and useful optimizations for you to use instantly.'
                : tab === 2
                ? "It's that easy! Click view to see detailed instructions"
                : 'Glad you agree! Use instructions to rank higher on search engines & increase traffic to your site.'}
            </p>
          </div>
          <Avatar src="/images/home/demo/avatar2.svg" size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
