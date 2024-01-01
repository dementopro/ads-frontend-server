'use client';
import { FC, Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import './styles.css';

const tabs = [
  {
    value: 0,
    name: 'Add your Brand',
    title: '10x your Advertising Performance',
    comment:
      'Input your company website and brand description and choose the content type you want to optimize.',
    image_url: '/images/home/brand/addbrand.svg',
  },
  {
    value: 1,
    name: 'Generate Recommendations',
    title: 'Use the Power of AI to Create Targeted Ads',
    comment:
      'Our AI uses your input to instantly generate recommendations based on your content type.',
    image_url: '/images/home/brand/generate.svg',
  },
  {
    value: 2,
    name: 'Optimize and Edit',
    title: 'You have the Final Say',
    comment:
      'Choose which optimizations you want to implement and customize them easily to fit your business objectives.',
    image_url: '/images/home/brand/optimize.svg',
  },
  {
    value: 3,
    name: 'Launch',
    title: 'Launch your Content from 1 platform',
    comment:
      'Launch and review your content with ease using our integrated advertising platform',
    image_url: '/images/home/brand/launch.svg',
  },
];

interface IBrandProps { }

const Brand: FC<IBrandProps> = (props) => {
  const [tab, setTab] = useState<number>(0);

  return (
    <div className="ipad:px-[60px] desktop:px-[100px] android:px-[16px] ipad:px-[0px] w-full max-w-[1240px] mx-auto">
      <div className="text-center">
        <h2 className="text-[42px] font-[800] text-white">
          Enjoy the Ease of an Integrated Workflow
        </h2>
        <p className="text-xl font-semibold">Based on your brand</p>
      </div>
      <div className="mt-4">
        <div className="max-w-[986px] mx-auto rounded-lg bg-[#010314] grid grid-cols-12 p-1">
          {tabs.map((val, i) => (
            <button
              key={i}
              className={`transition-all android:col-span-12 ipadmini:col-span-3 bg-transparent rounded-md text-[#838383] flex items-center justify-center px-[10px] py-3 ${tab === val.value && '!bg-[#7D55FA] text-white'
                }`}
              onClick={() => setTab(val.value)}
            >
              {val.name}
            </button>
          ))}
        </div>
        <div className="relative mt-8">
          {
            tabs.map((val, i) => (val.value === tab &&
              (<Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0, animationDelay: "0.2s" }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative top-0 left-0 grid grid-cols-12 gap-4 px-4 overflow-visible">
                    <div
                      className="absolute top-0 left-0 z-0 h-full ipadmini:w-full ipad:w-full desktop:col-span-6 translate-y-[10%] z-10"
                      style={{
                        background:
                          'radial-gradient(60% 50% at 50.00% 50.00%, rgba(104, 89, 255, 0.50) 0%, rgba(50, 46, 84, 0.00) 88.58%)',
                      }}
                    ></div>
                    <div className="relative android:col-span-12 ipad:col-span-6 z-20">
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/home/sparkles.svg"
                          className="android:w-[21px] ipadmini:w-[26px] ipad:w-[30px] desktop:w-[36px] android:h-[21px] ipadmini:h-[26px] ipad:h-[26px] desktop:h-[26px]"
                          alt="sparkles"
                        />
                        <h5 className="uppercase bg-gradient-to-r from-[#6859FF] bg-clip-text text-transparent to-[#AF41FF] text-base tracking-[.2em]">
                          How It Works
                        </h5>
                      </div>
                      <p className="mt-6 text-[42px] font-extrabold text-white transition-all">
                        {tabs[tab].title}
                      </p>
                      <p className="mt-6 text-white text-[20px] font-semibold">
                        {tabs[tab].comment}
                      </p>
                    </div>
                    <div className="ipad:bg-center bg-no-repeat bg-contain android:col-span-12 ipad:col-span-6 android:h-[300px] ipadmini:h-[300px] ipad:h-[350px] desktop:h-[350px] z-20"
                      style={{ backgroundImage: `url(${tabs[tab].image_url})` }}
                    >
                    </div>
                  </div>
                </motion.div>
              </Fragment>)
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Brand;
