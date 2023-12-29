import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

interface ButtonProps {
  target: string;
  href: string;
  text: string;
  icon: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({ target, href, text, icon }) => {
  return (
    <Link
      target={target}
      href={href}
      className="android:px-[25px] ipad:px-[32px] android:py-[10px] ipad:py-[14px] bg-brand-color rounded-[8px] justify-center items-center android:gap-[5px] ipad:gap-[8px] flex android:text-[14px] ipad:text-[16px] hover:from-[#A29BF8] hover:to-[#C590F8] transition ease-in-out !duration-500"
    >
      <div className="text-white">{text}</div>
      <div className={`relative ${icon ? 'inline-block' : 'hidden'}`}>
        <FiArrowRight
          className={`cursor-pointer text-white android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto`}
        />
      </div>
    </Link>
  );
};

export default PrimaryButton;
