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
  const largeNews = news.filter((news) => news.size === 'large');
  const smallNews = news.filter((news) => news.size === 'small');

  const id2 = news.filter((news) => news.id === '2');
  const id1 = news.filter((news) => news.id === '1');
  const id3 = news.filter((news) => news.id === '3');

  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[16px] ipad:my-[32px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className="w-full font-open-sans font-regular text-left android:text-[18px] ipad:text-[20px]">
        <div className="inline-block rounded-[12px] bg-[#7D55FA] android:px-[28px] android:py-[6px] ipad:px-[32px] ipad:py-[8px]">
          Latest
        </div>
      </div>
      <div className='android:block ipad:hidden'>
        <div className="w-full flex flex-col justify-start items-start gap-[32px] inline-flex">
          {largeNews.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>

        <div className="w-full flex android:flex-col ipadmini:flex-row justify-start items-start gap-[32px] inline-flex">
          {smallNews.map((news) => (
            <NewsCard news={news} key={news.id} />
          ))}
        </div>
      </div>

      <div className='android:hidden ipad:block'>
        <div className="w-full flex flex-row justify-start items-start gap-[32px] inline-flex">
          {id2.map((news) => (
            <div className='w-1/4'>
              <NewsCard news={news} key={news.id} />
            </div>
          ))}
          {id1.map((news) => (
            <div className='w-2/4'>
              <NewsCard news={news} key={news.id} />
            </div>
          ))}
          {id3.map((news) => (
            <div className='w-1/4'>
              <NewsCard news={news} key={news.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NewsList;
