import React from 'react'
import { privacy } from '@/data/privacy'
import { terms } from '@/data/terms'
import Image from 'next/image'

const PrivacyPolicy = () => {
    return (
        <div className=''>
            <div className="flex flex-col m-[32px] android:gap-[16px] ipad:gap-[32px]">
                <div className="text-center font-poppins font-semibold inline-block android:text-[26px] ipadmini:text-[32px] ipad:text-[40px] desktop:text-[48px]">
                    <div className="inline-block bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                        Privacy Policy
                    </div>
                </div>

                {privacy.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="text-white font-poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
                            {item.title}
                        </div>
                        <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col m-[32px] android:gap-[16px] ipad:gap-[32px]">
                <div className="text-center font-poppins font-semibold inline-block android:text-[26px] ipadmini:text-[32px] ipad:text-[40px] desktop:text-[48px]">
                    <div className="inline-block bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text">
                        Terms of Services
                    </div>
                </div>
                {terms.map((item, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="text-white font-poppins android:font-medium ipad:font-semibold android:text-[15px] ipadmini:text-[22px] ipad:text-[28px] desktop:text-[34px]">
                            {item.title}
                        </div>
                        <div className="text-[#D0D0D0] font-open-sans font-regular android:text-[14px] ipad:text-[16px]">
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PrivacyPolicy