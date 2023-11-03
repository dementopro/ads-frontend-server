import React from 'react'
import Image from 'next/image'

const BlogLanding = () => {
    return (
        <div className="relative desktop:w-[1240px] ipad:w-full android:mx-[32px] ipad:mx-[0px] desktop:mx-auto mt-[32px] pb-[16px] border-b-1 border-[#A09BAE]">
            <div className="font-open-sans font-regular text-left android:text-[18px] ipad:text-[20px]">
                Blog
            </div>
            <div className="inline-flex android:items-start ipadmini:items-end android:flex-col ipadmini:flex-row android:gap-[2px] ipadmini:gap-[10px]">
                <div className="text-white font-poppins font-bold text-left android:text-[32px] ipad:text-[43px]">
                    Stay in the Loop with
                </div>
                <Image
                    className="cursor-pointer android:w-[200px] ipadmini:w-[250px] h-auto"
                    src="/logo.svg"
                    alt="logo"
                    title="Home"
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
};

export default BlogLanding