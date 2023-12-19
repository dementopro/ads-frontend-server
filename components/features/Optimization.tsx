import Image from 'next/image'
import { step3 } from '@/data/features/step3';

const Optimization = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-[#141217] android:p-[32px] ipad:p-[60px] desktop:p-[0px]'>
      <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:my-[32px] ipad:my-[60px] flex-col android:justify-start android:items-start ipad:justify-center ipad:items-center gap-[32px] inline-flex">
        <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
          Optimization
        </div>
        <div className="w-fulll text-left text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
          Launch your Content
        </div>
        <div className='w-[750px] text-[16px] font-regular font-open-sans text-[#ABABAB]'>
          Launch your optimizations directly from our platform. Don’t worry, if you want to download optimizations and implement them independently- you can do that too!
        </div>
        <div className='w-full flex flex-row items-center justify-center gap-[16px]'>
          <div className='w-full flex flex-col gap-[16px]'>
            <Image
              src='images/features/seo-2.svg'
              className='w-full h-full object-cover'
              width={50}
              height={50}
              alt='seo'
            />
            <div className='text-[18px] font-open-sans font-bold text-white'>
              SEO
            </div>
          </div>

          <div className='w-full flex flex-col gap-[16px]'>
            <Image
              src='images/features/social-media-2.svg'
              className='w-full h-full object-cover'
              width={50}
              height={50}
              alt='social-media'
            />
            <div className='text-[18px] font-open-sans font-bold text-white'>
              Social Media
            </div>
          </div>

          <div className='w-full flex flex-col gap-[16px]'>
            <Image
              src='images/features/email-marketing-2.svg'
              className='w-full h-full object-cover'
              width={50}
              height={50}
              alt='email-marketing'
            />
            <div className='text-[18px] font-open-sans font-bold text-white'>
              Email Marketing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optimization;
