'use client';
import React, { useState, useEffect } from 'react';
import PrimaryButton from '@/components/PrimaryButton';
import { FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Announcement = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [hasShownAnnouncement, setHasShownAnnouncement] = useState(false);
  const pathname = usePathname();

  const closeAnnouncement = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-y-hidden');
  };

  useEffect(() => {
    const hasShown = localStorage.getItem('hasShownAnnouncement');
    pathname === '/' && document.body.classList.add('overflow-y-hidden');

    if (!hasShown) {
      setHasShownAnnouncement(true);
      localStorage.setItem('hasShownAnnouncement', 'true');
    }
  }, [pathname]);

  if (!hasShownAnnouncement && pathname == '/') {
    return (
      <div
        className={`absolute top-0 left-0 h-screen w-full transition ease-in-out !duration-500 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 hidden'
        }`}
      >
        <div className="relative flex bg-black bg-opacity-50 h-full w-full justify-center items-center">
          <div className="android:w-[340px] ipad:w-auto bg-[#CAC5FF] bg-cover android:gap-[8px] ipad:gap-[16px] android:m-[10px] ipad:m-[0px] p-[32px] android:rounded-[15px] ipad:rounded-[25px] shadow flex-col inline-flex">
            <div className="w-full relative text-right">
              <FiX
                className="cursor-pointer text-[#0B0129] hover:text-violet-500 inline-block android:w-[15px] ipadmini:[20px] ipad:w-[25px] desktop:w-[30px] h-auto"
                onClick={closeAnnouncement}
              />
            </div>
            <div className="inline-flex android:flex-col ipad:flex-row justify-start items-center android:gap-[16px] ipad:gap-[32px]">
              <div className="inline-flex flex-col justify-start items-start android:w-full ipad:w-[400px] android:gap-[16px] ipad:gap-[32px]">
                <div className="text-left text-[#0B0129] android:-text-[25px] ipadmini:text-[30px] ipad:text-[38px] desktop:text-[45px] font-semibold font-poppins">
                  📣 Exciting News!
                </div>
                <div className="text-left text-[#0B0129] android:text-[8px] ipadmini:text-[10px] ipad:text-[13px] desktop:text-[15x] font-regular font-poppins">
                  AdsGency AI selected to participate in the TechStars
                  Accelerator Program
                </div>
                <PrimaryButton
                  href="https://www.linkedin.com/posts/bolbi-liu-6aa0b4ab_techstarsforlife-startuplife-founders-activity-7117202850144800768-lSwq?utm_source=share&utm_medium=member_desktop"
                  text="See Details Here"
                />
              </div>
              <img
                className="android:w-full ipad:w-[290px] h-auto android:rounded-[6px] ipad:rounded-[12px]"
                src="/images/home/announcement.png"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Render nothing when the announcement has already been shown
  return null;
};

export default Announcement;
