import Image from 'next/image';
import React from 'react';
import styles from './Landing.module.css';
import { useRouter } from 'next/navigation';

const Landing = () => {
  const router = useRouter();

  function toHome() {
    router.push('/');
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center max-lg:hidden lg:max-w-[660px] bg-[#121212] px-8 py-[28px] relative select-none'>
      <Image
        title='Home - AdsGency AI'
        onClick={toHome}
        alt='logo'
        className='cursor-pointer max-lg:mb-5 lg:absolute top-[28px] left-8'
        width={130}
        height={28}
        src={'/logo.svg'}
      />
      <div className='flex flex-col gap-[28px] max-w-[440px]'>
        <div className={`text-5xl lg:text-6xl font-bold`}>
          🚀 <span className={`${styles['landing-txt']}`}>One-Stop Ads Platform without limits</span>
        </div>
        <p className='text-[#E0E0E0] text-lg lg:text-xl'>
          Generative AI models empowered omnichannel management for Creative Ads
        </p>
        <div className='text-xs text-[#F6F6F6]'>Made with 💜 in San Francisco</div>
      </div>
    </div>
  );
};

export default Landing;
