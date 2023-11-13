import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface ButtonProps {
  path: string;
  id?: string;
  text: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ path, id, text }) => {
  const href = id === '' ? path : path + id;
  return (
    <Link
      href={href}
      className="text-white android:px-[18px] ipadmini:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] desktop:py-[14px] border rounded-lg justify-center items-center android:gap-[5px] ipad:gap-[8px] flex android:text-[12px] ipad:text-[14px] hover:border-[#9D93FF] hover:text-[#9D93FF] transition ease-in-out !duration-500"
    >
      <div>{text}</div>
      <div className="relative">
        <FiArrowRight
          className={`cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] android:h-[12px] ipadmini:h-[12px] ipad:h-auto desktop:h-auto`}
        />
      </div>
    </Link>
  );
};

export default SecondaryButton;
