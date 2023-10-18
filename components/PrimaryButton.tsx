import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="android:px-[18px] ipadmini:px-[25px] ipad:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] ipad:py-[10px] desktop:py-[14px] bg-gradient-to-r from-[#6859FF] to-[#AF41FF] rounded-lg justify-center items-center android:gap-[5px] ipadmini:gap-[5px] ipad:gap-[8px] desktop:gap-[8px] flex android:text-[12px] ipadmini:text-[12px] ipad:text-[14px] desktop:text-[16px] hover:from-[#A29BF8] hover:to-[#C590F8]"
    >
      <div>{text}</div>
      <div className="relative">
        <img
          title="arrow"
          className="cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto"
          src={'/images/elements/ep_right.svg'}
          alt="arrow"
        />
      </div>
    </Link>
  );
};

export default PrimaryButton;
