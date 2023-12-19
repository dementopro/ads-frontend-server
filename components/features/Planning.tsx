'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { planning } from '@/data/features/planning';
import '../home/styles.css';

const Planning = () => {
  const [image, setImage] = useState('');
  const imageOptions = ['planning-screen', 'add-more-info-screen', 'reco-screen'];
  const animationDuration = 2000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate through text options
      setImage(imageOptions[(imageOptions.indexOf(image) + 1) % imageOptions.length]);
    }, animationDuration);

    return () => clearInterval(intervalId);
  }, [image]);

  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[32px] ipad:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
      <div className='w-full flex flex-col android:gap-[26px] ipad:gap-[32px] justify-start items-start'>
        <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
          Planning
        </div>
        <div className="w-fulll text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
          Plan Your Strategy
        </div>
        <div className='relative flex flex-row gap-[32px] justify-start items-center'>
          <div className='w-full flex flex-wrap flex-row gap-[32px]'>
            {planning.map((item, index) => (
              <div key={index} className='w-[272px] flex flex-col gap-[10px] justify-start items-start'>
                <Image
                  width={64}
                  height={64}
                  className="w-[64px] h-[64px] object-cover"
                  src={item.icon}
                  alt="join-us"
                />
                <div className='text-[18px] font-bold font-open-sans text-white'>
                  {item.title}
                </div>
                <div className='text-[16px] font-regular font-open-sans text-[#ABABAB]'>
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          <div
            className="w-5/6 h-full absolute right-[-200px] z-10"
            style={{
              background:
                'radial-gradient(55.59% 55.02% at 47.67% 45.03%, #000 0%, rgba(104, 89, 255, 0.27) 50%, rgba(50, 46, 84, 0.00) 100%)',
            }}
          ></div>
          <div className='z-20 w-full'>
            <Image
              width={600}
              height={390}
              src={`images/features/${image}.svg`}
              alt={image}
            />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Planning;
