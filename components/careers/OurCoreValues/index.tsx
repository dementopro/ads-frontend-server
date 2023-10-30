'use client'
import React from 'react'
import Image from 'next/image'

const OurCoreValues = () => {

    return (
        <div className="android:w-full desktop:w-[1240px] desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex">
            <div className="w-full flex-col relative justify-center items-start gap-[50px] inline-flex">
                <Image
                    width={100}
                    height={100}
                    className='android:hidden ipad:block absolute top-[-100px] left-[-200px] android:w-[400px] ipad:w-[600px] h-auto z-10'
                    title='Home'
                    src={'/images/bg-elements/circles-decoration-2.svg'} alt='logo'
                />
                <div className='w-full android:text-center ipadmini:text-left android:text-[32px] ipad:text-[43px] font-bold font-poppins bg-gradient-to-r from-[#D634FF] to-[#4663FF] text-transparent bg-clip-text z-20'>
                    Our Core Values
                </div>
                <div className="w-full h-full android:flex-col ipadmini:flex-row justify-center android:items-center ipadmini:items-start android:gap-[50px] ipadmini:gap-[0px] inline-flex z-20">
                    <div className="w-full h-full ipadmini:px-[30px] desktop:px-[50px] flex-col justify-center items-center android:gap-[8px] ipad:gap-[15px] inline-flex ipadmini:border-r-2 ipadmini:border-[#838383] ipadmini:border-opacity-45">
                        <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                            Efficiency
                        </div>
                        <div className="ipad:mt-[20px] text-[#D0CDD6] text-center android:text-[14px] ipad:text-[16px] font-regular font-open-sans">
                            At AdsGency AI, we value smart work as much as hard work. We’re passionate about simplifying processes and optimizing results, always aiming for that sweet spot of precision and effectiveness. In everything we do, we prioritize clarity and purpose, ensuring our strategies are as efficient as they are impactful.
                        </div>
                    </div>
                    <div className="w-full h-full ipadmini:px-[30px] desktop:px-[50px] flex-col justify-center items-center android:gap-[8px] ipad:gap-[15px] inline-flex ipadmini:border-r-2 ipadmini:border-[#838383] ipadmini:border-opacity-45">
                        <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                            Leadership
                        </div>
                        <div className="ipad:mt-[20px] text-[#D0CDD6] text-center android:text-[14px] ipad:text-[16px] font-regular font-open-sans">
                            Leadership at AdsGency AI isn't just a title; it's a mindset. We're not just observers of industry trends; we’re the pioneers shaping them. Every member of our team, irrespective of their role, is empowered with the spirit of innovation, always encouraged to think forward and craft the future of advertising.
                        </div>
                    </div>
                    <div className="w-full h-full ipadmini:px-[30px] desktop:px-[50px] flex-col justify-center items-center android:gap-[8px] ipad:gap-[15px] inline-flex">
                        <div className="android:text-[18px] ipad:text-[24px] font-semibold font-poppins">
                            Collaboration
                        </div>
                        <div className="ipad:mt-[20px] text-[#D0CDD6] text-center android:text-[14px] ipad:text-[16px] font-regular font-open-sans">
                            We firmly believe that the best solutions emerge from collaborative efforts. It’s a blend of diverse talents, perspectives, and insights that allows us to craft exceptional advertising strategies. Together, as a united team, we ensure our clients benefit from the best of our combined knowledge and creativity.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCoreValues