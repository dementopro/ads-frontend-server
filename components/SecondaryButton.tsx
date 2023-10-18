import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  path: string;
  id: string;
  text: string;
}

const SecondaryButton: React.FC<ButtonProps> = ({ path, id, text }) => {
  const href = id === '' ? path : path + id;
  return (
    <Link
      target="_blank"
      href={href}
      className="android:px-[18px] ipadmini:px-[25px] desktop:px-[32px] android:py-[8px] ipadmini:py-[10px] desktop:py-[14px] border rounded-lg justify-center items-center android:gap-[5px] ipad:gap-[8px] flex android:text-[12px] ipad:text-[14px] hover:border-violet-500 hover:bg-violet-500"
    >
      <div>{text}</div>
      <div className="relative">
        <img
          title="arrow"
          className="cursor-pointer android:w-[12px] ipadmini:w-[12px] ipad:w-[15px] desktop:w-[18px] h-auto"
          src={'/images/elements/ep_right.svg'}
          alt="arrow"
        />
      </div>
    </Link>
  );
};

export default SecondaryButton;
