'use client';
import React from 'react'
import { news } from '@/data/newsPress'
import SecondaryButton from '@/components/common/SecondaryButton'
import { NewsType } from '@/types/news';

type NewsCardProps = {
  news: NewsType;
};

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <>
      <div
        className={`w-full flex flex-col justify-start items-start gap-[32px]`}
      >
        <div
          className={`android:h-[210px] w-full ${news.size === 'large' ? 'ipadmini:h-[330px] ipad:h-[250px] desktop:h-[350px]' : 'ipadmini:h-[260px] ipad:h-[200px] desktop:h-[260px]'
            }`}
        >
          <img
            src={news.image}
            alt="News Image"
            className="w-full h-full object-cover rounded-[12px]"
          />
        </div>
        <div
          className={`inline-flex w-full flex-col justify-start items-start gap-[16px]`}
        >
          <div
            className={`${news.size === 'large'
              ? 'android:text-[28px] ipad:text-[34px] leading-[40px]'
              : 'android:text-[18px] ipad:text-[20px] leading-[24px]'
              } font-semibold font-poppins`}
          >
            {news.title}
          </div>
          <div className="text-[#D0D0D0] android:text-[14px] ipad:text-[16px] font-normal font-open-sans leading-[22px]">
            {news.description}
          </div>
          <SecondaryButton path={news.link} text="Read" target="_blank" id="" />
        </div>
      </div>
    </>
  );
};

const NewsList = () => {
  const id1 = news.find((blog) => blog.id === '1');
  const id2 = news.find((blog) => blog.id === '2');
  const id3 = news.find((blog) => blog.id === '3');

  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[32px] ipad:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="w-full font-open-sans font-regular text-left android:text-[18px] ipad:text-[20px]">
        <div className="inline-block rounded-[12px] bg-[#7D55FA] android:px-[28px] android:py-[6px] ipad:px-[32px] ipad:py-[8px]">
          Latest
        </div>
      </div>
      <div className='android:flex ipad:hidden flex-col gap-[32px]'>
        <div className="w-full flex flex-col justify-start items-start gap-[32px] inline-flex">
          {id1 && <NewsCard news={id1} key={id1.id} />}
        </div>
        <div className="w-full flex android:flex-col ipadmini:flex-row justify-start items-start gap-[32px] inline-flex">
          {id2 && <NewsCard news={id2} key={id2.id} />}
          {id3 && <NewsCard news={id3} key={id3.id} />}
        </div>
      </div>

      <div className='android:hidden ipad:block'>
        <div className="w-full flex flex-row justify-start items-start gap-[32px] inline-flex">
          {id2 && <div key={id2.id} className='w-1/4'>
            <NewsCard news={id2} key={id2.id} />
          </div>}
          {id1 && <div key={id1.id} className='w-2/4'>
            <NewsCard news={id1} key={id1.id} />
          </div>}
          {id3 && <div key={id3.id} className='w-1/4'>
            <NewsCard news={id3} key={id3.id} />
          </div>}
        </div>
      </div>
    </div>
  );
};
export default NewsList;
