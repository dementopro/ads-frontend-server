import PrimaryButton from '@/components/common/PrimaryButton'
import { ourTeam } from '@/data/ourTeam';
import Image from 'next/image'

const OurTeam = () => {
    return (
        <div className="android:w-full desktop:w-[1240px] desktop:mx-auto android:px-[32px] ipad:px-[60px] desktop:px-[0px] android:my-[40px] ipadmini:my-[50px] ipad:my-[60px] bg-black flex-col justify-center items-center android:gap-[32px] desktop:gap-[60px] inline-flex">
            <div className="w-full flex flex-col justify-center items-start">
                <div className="w-full flex flex-col gap-[16px]items-center text-center">
                    <div className="w-full bg-gradient-to-r from-[#D336FF] to-[#FD8CFF] text-transparent bg-clip-text font-poppins font-semibold android:text-[32px] ipad:text-[43px] android:leading-[34px] ipad:leading-[40px] desktop:leading-[56px]">
                        This is Who We Are
                    </div>
                    <div className="w-full font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px] desktop:my-8 ">
                        A remote first team based in San Francisco, CA
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex android:flex-col ipad:flex-row gap-[32px] justify-center items-center">
                {ourTeam.map((employee, index) => (
                    <div key={index} className="w-[250px] flex flex-col gap-[20px] items-center">
                        <Image
                            width={250}
                            height={250}
                            className='w-full h-[250px] object-cover rounded-[8px] border-4 border-[#7D55FA] border-opacity-60'
                            src={employee.image} alt='logo'
                        />
                        <div className="w-full flex flex-col gap-[10px] items-start justify-center">
                            <div className="android:text-[18px] ipad:text-[20px]"> {employee.name} </div>
                            <div className="android:text-[12px] ipad:text-[14px]"> {employee.designation} </div>
                        </div>
                    </div>
                ))}
            </div>
                    
            <PrimaryButton
                target="_self"
                href="/careers"
                text="See Open Roles"
            />
        </div>
    );
};

export default OurTeam;