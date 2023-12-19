import Image from 'next/image'
import PrimaryButton from '../common/PrimaryButton';

const Step4 = () => {
  return (
    <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:p-[32px] ipad:p-[60px] desktop:p-[0px] android:my-[32px] ipad:my-[60px] bg-black android:flex-col ipad:flex-row justify-center items-center gap-[32px] inline-flex">
      <Image
        width={696}
        height={529}
        className="android:hidden ipad:block android:w-full ipad:w-2/5 h-auto object-cover"
        src='/images/features/step4.svg'
        alt="step5"
      />
      <div className="relative flex flex-col flex-1 items-start">
        <div className="flex flex-col gap-[16px] justify-center items-start relative z-20">
          <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
            Social Insights
          </div>
          <div className="w-fulll text-left text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
            Step 4: <br />
            Gain Insights & Optimize
          </div>
          <div className="w-full text-left font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
            Implement AI-driven analytics to monitor and analyze your ad campaigns in real-time so you can make data-driven decisions and continuously optimize your strategies.
          </div>
        </div>
      </div>
      <Image
        width={696}
        height={529}
        className="android:block ipad:hidden w-full h-auto object-cover"
        src='/images/features/step4.svg'
        alt="step5"
      />
    </div>
  );
};

export default Step4;
