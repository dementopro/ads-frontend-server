import PrimaryButton from '@/components/common/PrimaryButton'
import Image from 'next/image'

const OurMission = () => {
  return (
    <div className="android:w-full desktop:w-[1240px] desktop:mx-auto android:pl-[32px] android:pr-[32px] ipad:pl-[60px] desktop:pl-[0px] ipadmini:pr-[0px] android:my-[40px] ipadmini:my-[50px] bg-black android:flex-col ipadmini:flex-row justify-center items-center android:gap-[32px] desktop:gap-[60px] inline-flex">
      <div className="w-full flex flex-col justify-center items-start">
        <div className="flex flex-col gap-[16px] android:items-center ipadmini:items-start android:text-center ipadmini:text-left">
          <div className="w-full text-white font-poppins font-semibold android:text-[32px] ipad:text-[43px] android:leading-[34px] ipad:leading-[40px] desktop:leading-[56px]">
            Our Mission
          </div>
          <div className="w-full font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px] desktop:my-8 ">
            At AdsGency AI, our mission is to revolutionize advertising with AI-driven solutions, creating personalized, impactful connections between businesses and their audiences.
          </div>
          <PrimaryButton
            target="_self"
            href="/careers"
            text="Learn More"
          />
        </div>
      </div>

      <div className="w-full h-auto">
        <Image
          width={696}
          height={529}
          className="android:h-[386px] desktop:h-[475px] w-full object-cover rounded-[12px]"
          src={'/images/careers/our-mission.jpeg'}
          alt="our-mission"
        />
      </div>
    </div>
  );
};

export default OurMission;