import PrimaryButton from '@/components/PrimaryButton'
import Image from 'next/image'

const OurMission = () => {
    return (
        <div className="android:w-full desktop:w-[1240px] desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] bg-black flex-row justify-center items-center android:gap-[32px] desktop:gap-[60px] inline-flex">
            <div className="w-full flex flex-col justify-center items-start">
                <div className="flex flex-col gap-[16px] android:items-center ipadmini:items-start android:text-center ipadmini:text-left">
                    <div className="w-full text-white font-poppins font-semibold android:text-[32px] ipad:text-[43px] android:leading-[34px] ipad:leading-[40px] desktop:leading-[56px]">
                        Our Mission
                    </div>
                    <div className="w-full font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px] desktop:my-8 ">
                        At AdsGency AI, our mission is to revolutionize advertising with AI-driven solutions, creating personalized, impactful connections between businesses and their audiences.
                    </div>
                    {/* <PrimaryButton
                        target="_self"
                        href="/"
                        text="Learn More"
                    /> */}
                </div>
            </div>

            <div className="w-full h-auto android:hidden ipadmini:block">
                <Image
                    width={696}
                    height={529}
                    className="w-full h-auto object-coverm rounded-[25px]"
                    src={'/images/career/our-mission.jpeg'}
                    alt="our-mission"
                />
            </div>
        </div>
    );
};

export default OurMission;