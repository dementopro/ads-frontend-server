import PrimaryButton from '@/components/common/PrimaryButton'
import { openPositions } from '@/data/openPositions';
import Image from 'next/image'
import Link from 'next/link';

const OpenPositions = () => {
    return (
        <div className="relative android:w-full desktop:w-[1240px] desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] bg-black flex-col justify-center items-center android:gap-[50px] ipadmini:gap-[100px] inline-flex">
            <Image
                width={100}
                height={100}
                className='android:hidden ipad:block absolute top-[100px] right-[-130px] android:w-[380px] ipad:w-[520px] h-auto z-10'
                title='Home'
                src={'/images/bg-elements/circles-decoration-1.svg'} alt='logo'
            />
            <div className="w-full flex flex-col justify-center items-start z-20">
                <div className="android:w-full ipadmini:w-3/4 ipad:w-1/2 flex flex-col gap-[16px] android:items-center ipadmini:items-start android:text-center ipadmini:text-left">
                    <div className="w-full font-poppins font-semibold android:text-[32px] ipad:text-[43px] android:leading-[34px] ipad:leading-[40px] desktop:leading-[56px] bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                        Open Positions
                    </div>
                    <div className="w-full font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px] desktop:my-8 ">
                        Join us and envision a future where advertising is seamlessly intuitive,
                        personalized, and effortlessly scalable, harnessing the power of AI.
                    </div>
                </div>
            </div>

            {openPositions.map((item, index) => (
                <div key={index} className="w-full flex flex-col gap-[32px] z-20">
                    <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                        {item.title}
                    </div>
                    <div className="flex flex-col gap-[32px]">
                        {item.positions.map((position, pIndex) => (
                            <div key={pIndex} className="android:w-full desktop:w-3/4 flex flex-row items-center bg-[#27252D] android:rounded-[8px] ipad:rounded-[12px] android:px-[16px] ipad:px-[32px] android:py-[45px] ipad:py-[48px]">
                                <div className="w-full flex flex-col gap-[8px] text-white">
                                    <div className="android:text-[16px] ipad:text-[18px] font-semibold">
                                        {position.title}
                                    </div>
                                    <div className="android:text-[12px] ipad:text-[14px] font-regular">
                                        {position.type}
                                    </div>
                                </div>
                                <Link target="_blank" href={position.link} className="w-full text-right text-[#6859FF] hover:text-[#9D93FF] android:text-[16px] ipad:text-[18px] font-semibold">
                                    View Position
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OpenPositions;