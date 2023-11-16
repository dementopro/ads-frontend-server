import PrimaryButton from '@/components/common/PrimaryButton';
import { FiCheck } from 'react-icons/fi';
import ContactUsForm from './ContactUsForm';

const ContactUsContainer = () => {
    return (

        <div className="android:w-full ipadmini:w-[495px] ipad:w-full desktop:w-[1240px] mx-auto flex justify-center items-center android:flex-col ipad:flex-row gap-[32px] android:mt-[60px] android:mb-[32px] ipad:my-[60px] android:px-[32px] ipadmini:px-[0px]">
            <div className="w-full relative inline-flex flex-col justify-start items-start android:gap-[16px] ipad:gap-[32px] ipad:pl-[48px]">
                <img
                    className="absolute android:w-[146px] android:top-[-74px] android:left-[-8px] ipadmini:top-[-37px] ipadmini:left-[-104px] ipad:w-[146px] ipad:top-[-79px] ipad:left-[19px]  desktop:w-[249px] desktop:top-[-66px] desktop:left-[-27px] h-auto z-10"
                    title="Home"
                    src={'/images/bg-elements/headline-circles.png'}
                    alt="logo"
                />
                <div className="text-white font-poppins font-semibold text-left android:text-[32px] ipad:text-[43px] android:leading-[34px] ipad:leading-[40px] desktop:leading-[56px] z-20">
                    Connect with our Sales Team
                </div>
                <div className="w-full text-left text-stone-300 android:text-[12px] ipad:text-[15px] desktop:text-[18px] font-open-sans font-regular">
                    Our team can help you:
                </div>
                <div className="flex flex-col android:gap-[16px] ipad:gap-[32px] android:py-[16px] ipad:py-[0px]">
                    <div className="w-full justify-start items-center gap-[15px] inline-flex">
                        <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#7D55FA] rounded-full">
                            <FiCheck className="cursor-pointer text-white w-full h-full" />
                        </div>

                        <div className="android:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                            Demo Product
                        </div>
                    </div>
                    <div className="w-full justify-start items-center gap-[15px] inline-flex">
                        <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#7D55FA] rounded-full">
                            <FiCheck className="cursor-pointer text-white w-full h-full" />
                        </div>

                        <div className="android:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                            Access flexible pricing options
                        </div>
                    </div>
                    <div className="w-full justify-start items-center gap-[15px] inline-flex">
                        <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#7D55FA] rounded-full">
                            <FiCheck className="cursor-pointer text-white w-full h-full" />
                        </div>

                        <div className="android:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                            Automated Workflows & Real time performance
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <ContactUsForm />
            </div>
        </div>
    );
};

export default ContactUsContainer
