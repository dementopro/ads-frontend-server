import Image from 'next/image'
import { step3 } from '@/data/features/step3';

const Step3 = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[16px] ipad:my-[32px] bg-black flex-col justify-start items-start gap-[32px] inline-flex">
      <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
        Image to Image
      </div>
      <div className="w-fulll text-left text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
        Step 3: <br />
        Align with your Campaign
      </div>
      <div className='flex android:flex-col ipad:flex-row gap-[28px] android:w-full ipadmini:w-[450px] ipad:w-full desktop:w-[1085px]'>
        {step3.map((item, index) => (
          <div key={index} className='w-full flex flex-col gap-[10px] justify-start items-start'>
            <div className='flex flex-row gap-[10px] itesm-center'>
              <Image
                width={32}
                height={32}
                className="w-[32px] h-[32px] object-cover"
                src={item.icon}
                alt="step3"
              />
              <div className='text-[18px] font-bold font-open-sans'>
                {item.title}
              </div>
            </div>
            <div className='text-[16px] font-regular font-open-sans'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <Image
        width={696}
        height={529}
        className="android:w-full ipadmini:w-[450px] ipad:w-[710px] desktop:w-[930px] h-auto object-cover"
        src='/images/features/step3.svg'
        alt="step3"
      />
    </div>
  );
};

export default Step3;
