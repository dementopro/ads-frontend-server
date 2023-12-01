import Image from 'next/image'
import PrimaryButton from '../common/PrimaryButton';

const Step2 = () => {
  return (
    <div className='w-full flex flex-col justify-center bg-[#141217] android:p-[32px] ipad:p-[60px] desktop:p-[0px]'>
      <div className="desktop:w-[1240px] ipad:w-full desktop:mx-auto android:my-[16px] ipad:my-[32px] android:flex-col ipad:flex-row justify-center items-center gap-[32px] inline-flex">
        <Image
          width={696}
          height={529}
          className="android:hidden ipad:block w-full h-auto object-cover"
          src='/images/features/step2.svg'
          alt="step2"
        />
        <div className="relative flex flex-col items-start">
          <div className="flex flex-col gap-[16px] justify-center items-start relative z-20">
            <div className="android:px-[14px] ipad:px-[18px] android:py-[3px] android:py-[5px] bg-[#B3ACFF] android:rounded-[8px] ipad:rounded-[5px] text-black android:text-[14px] ipad:-[18px] font-normal font-open-sans">
              Text to Image
            </div>
            <div className="w-fulll text-left text-white font-poppins font-semibold android:text-[32px] ipad:text-[42px] android:leading-[34px] ipad:leading-[56px]">
              Step 2: <br />
              Conceptualize Ads
            </div>
            <div className="w-full text-left font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
              Create realistic images from textual descriptions without needing graphic design skills. Preview and adjust until you find the perfect match.
            </div>
          </div>
        </div>
        <Image
          width={696}
          height={529}
          className="android:block ipad:hidden w-full h-auto object-cover"
          src='/images/features/step2.svg'
          alt="step2"
        />
      </div>
    </div>
  );
};

export default Step2;
