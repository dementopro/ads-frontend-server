'use client';
import Link from 'next/link';
import { useState } from 'react';

interface DropdownProps {
  heading: string;
  links: { label: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ heading, links }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        className={`flex flex-col items-center relative transition-all duration-2000 cursor-pointer focus:outline-none ${
          expanded ? 'expand-open' : 'expand-closed'
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-row gap-[8px] justify-between">
          <div className="">{heading}</div>
          <div className="text-right">
            <img
              title="arrow"
              className={`cursor-pointer inline-block android:w-[14px] ipad:w-[16px] h-auto rotate-${
                expanded ? '180' : '0'
              } transition-all duration-500`}
              src="/images/elements/arrow-point.svg"
              alt="arrow"
            />
          </div>
        </div>
        {expanded && (
          <div className="w-[150px] origin-bottom-left absolute left-0 mt-[50px] box-shadow bg-[#15161A] flex flex-col p-[20px] rounded-[12px] gap-[26px] text-left font-regular">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-[#9D93FF]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
