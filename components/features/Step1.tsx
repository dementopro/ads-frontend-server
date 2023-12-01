import Image from 'next/image'
import { step1 } from '@/data/features/step1';

const Step1 = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[16px] ipad:my-[32px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className='w-full flex flex-col android:gap-[26px] ipad:gap-[32px] justify-start items-start'>
        <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
          Planning
        </div>
        <div className="w-fulll text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
          Step 1: <br />
          Plan Your Strategy
        </div>
        <div className='w-full flex android:flex-col ipad:flex-row gap-[32px]'>
          {step1.map((item, index) => (
            <div key={index} className='w-full flex flex-col gap-[10px] justify-start items-start'>
              <Image
                width={64}
                height={64}
                className="w-[64px] h-[64px] object-cover"
                src={item.icon}
                alt="join-us"
              />
              <div className='text-[18px] font-bold font-open-sans'>
                {item.title}
              </div>
              <div className='text-[16px] font-regular font-open-sans'>
                {item.description}
              </div>
            </div>
          ))}
      </div>
    </div>
    </div >
  );
};

export default Step1;
