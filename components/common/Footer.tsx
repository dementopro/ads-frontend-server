'use client'
import Image from 'next/image'
import React from 'react'
import twitterIcon from '@iconify/icons-mdi/twitter';
import { Icon } from '@iconify/react'
import facebookIcon from '@iconify/icons-mdi/facebook';
import gmailIcon from '@iconify/icons-mdi/gmail';
import youtubeIcon from '@iconify/icons-mdi/youtube';
import linkedinIcon from '@iconify/icons-mdi/linkedin';
import Link from 'next/link';
import { footerLinks } from '@/data/Links/footerLinks';

type ColumnProps = {
  title: string;
  section: {
    title: string;
    links: {
      label: string;
      href: string
    }[];
  }[];
};

const FooterColumn = ({ title, section }: ColumnProps) => (
  <div className='w-full flex android:flex-col ipadmini:flex-row android:gap-[16px] ipadmini:gap-[50px]'>
    <div className='w-[200px] font-open-sans font-medium text-[20px] text-[#7879F1] uppercase'>
      {title}
    </div>
    <div className='w-full flex flex-row gap-[32px]'>
      {section.map((item, index) => (
        <div key={index} className='w-full flex flex-col gap-[10px]'>
          <div className='font-poppins font-medium text-white uppercase text-[16px]'>
            {item.title}
          </div>
          {item.links.map((link, i) =>
            <Link
              key={i}
              href={link.href}
              className="text-[#ABABAB] hover:text-[#9D93FF] transition ease-in-out !duration-500"
            >
              {link.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
  // <div className="flex flex-col gap-[8px]">
  //   <h4 className="font-semibold uppercase text-white">{title}</h4>
  //   <ul className="flex flex-col gap-[4px] text-[16px] font-regular text-[#C1BECA]">
  //     {links.map((link) => (
  //       <Link  href={link.href} key={link.label} className="hover:text-[#9D93FF]">
  //         {link.label}
  //       </Link>
  //     ))}
  //   </ul>
  // </div>
);

const Footer = () => {
  return (
    <footer className='w-full flex flex-col gap-[32px] android:p-[32px] ipad:p-[60px] bg-black font-open-sans'>
      <div className='desktop:w-[1240px] ipad:w-full desktop:mx-auto flex flex-wrap gap-[32px] justify-between'>
        <div className='flex flex-col gap-[5px] items-start'>
          <Image src='/logo.svg' width={131} height={50} alt='AdsGency AI' />
          <span className='text-[16px] text-[#C1BECA]'>
            One stop ads platform without limits
          </span>
        </div>
        <div className="flex flex-col gap-[32px]">
          {
            footerLinks.map(item => (
              <FooterColumn
                key={item.title}
                title={item.title}
                section={item.section}
              />
            ))
          }
        </div>
      </div>
      <div className='desktop:w-[1240px] ipad:w-full desktop:mx-auto text-[#C1BECA] text-[16px] text-left border-t border-[#A09BAE] py-[12px]'>
        <span>&copy; 2023 AdsGency AI. All rights reserved.</span>
      </div>
    </footer >
  )
}

export default Footer