import Image from 'next/image'

const Step4 = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-[#141217] android:p-[32px] ipad:p-[60px] desktop:p-[0px]'>
      <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:my-[16px] ipad:my-[32px] flex-col android:justify-start android:items-start ipad:justify-center ipad:items-center gap-[32px] inline-flex">
        <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
          Text to Copies
        </div>
        <div className="w-fulll android:text-left ipad:text-center text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
          Step 4: <br />
          Your Path to SEO-Optimized Ad Campaigns
        </div>
        <div className="w-full android:text-left ipad:text-center font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
          Generate SEO-friendly descriptions that are both informative and engaging. Customize tone, style, and language to match your brand&apos;s voice.
        </div>
        <Image
          width={696}
          height={529}
          className="android:hidden ipadmini:block android:w-full ipad:w-[750px] h-auto object-cover"
          src='/images/features/step4-1.svg'
          alt="step4"
        />
        <Image
          width={696}
          height={529}
          className="android:block ipadmini:hidden android:w-full ipadmini:w-[450px] ipad:w-[710px] desktop:w-[930px] h-auto object-cover"
          src='/images/features/step4-2.svg'
          alt="step4"
        />
      </div>
    </div>
  );
};

export default Step4;
