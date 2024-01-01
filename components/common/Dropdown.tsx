'use client'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { FiChevronDown } from 'react-icons/fi'

interface DropdownProps {
  heading: string;
  section: {
    title: string;
    links: {
      label: string;
      href: string
    }[];
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ heading, section }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    // Add a click event listener to the document
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full flex flex-col items-center relative transition ease-in-out duration-2000 cursor-pointer focus:outline-none ${expanded ? 'expand-open' : 'expand-closed'
          }`}
        onClick={toggleExpansion}
        ref={dropdownRef}
      >
        <div className="android:w-full ipad:w-auto flex flex-row gap-[8px] justify-between hover:text-[#9D93FF]">
          <div className="text-left transition ease-in-out !duration-500">{heading}</div>
          <div className="text-right">
            <FiChevronDown
              className={`cursor-pointer inline-block android:w-[14px] ipad:w-[16px] h-auto rotate-${expanded ? '180' : '0'
                } transition ease-in-out !duration-500`}
            />
          </div>
        </div>
        {expanded && (
          <div className="android:w-full ipad:w-[250px] ipad:origin-bottom-left ipad:absolute ipad:left-0 android:mt-[16px] ipad:mt-[50px] ipad:box-shadow bg-[#15161A] flex flex-col android:px-[12px] android:py-[0px] ipad:px-[20px] ipad:py-[20px] ipad:rounded-[12px] gap-[32px] text-left font-regular transition ease-in-out !duration-500">
            {section.map((item, index) => (
              <div key={index} className='flex flex-col gap-[10px]'>
                <div className='font-poppins font-medium text-[#ABABAB] uppercase text-[16px]'>
                  {item.title}
                </div>
                {item.links.map((link, i) =>
                  <Link
                    key={i}
                    href={link.href}
                    className="hover:text-[#9D93FF] transition ease-in-out !duration-500"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
