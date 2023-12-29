import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface ButtonProps {
  path: string;
  id?: string;
  text: string;
  target?: string;
  icon: boolean;
}

const SecondaryButton: React.FC<ButtonProps> = ({ path, id, text, target, icon}) => {
  const href = id === '' ? path : path + id;
  return (
    <Link
      href={href}
      target={target}
      className="android:px-[25px] ipad:px-[32px] android:py-[10px] ipad:py-[14px] bg-black rounded-[8px] justify-center items-center android:gap-[5px] ipad:gap-[8px] flex android:text-[14px] ipad:text-[16px] border-1 border-white justify-center hover:border-[#9D93FF] hover:text-[#9D93FF] transition ease-in-out !duration-500"
    >
      <div>{text}</div>
      <div className={`relative ${icon ? 'inline-block' : 'hidden'}`}>
        <FiArrowRight
          className={`cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto`}
        />
      </div>
    </Link>
  );
};

export default SecondaryButton;
