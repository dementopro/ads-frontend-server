'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import styles from './BookMeeting.module.css'
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import Link from 'next/link';

const BookMeeting = () => {

  const router = useRouter();

  function toContactUs() {
    router.push('/contactUs');
  }

  return (
    <>
      <div
        style={{
          boxShadow: '0 0 51px 0 rgba(132, 79, 255, 0.25)',
        }}
        className="android:w-full ipadmini:w-[550px] relative inline-flex flex-col gap-[16px] justify-center items-center android:px-[32px] ipad:px-[48px] py-[26px] bg-[#141414] android:rounded-[9px] ipad:rounded-[12px] border-1 border-[#9D93FF] border-opacity-60"
      >
        <div className={`${styles['pop']} ${styles['pop1']}`}>
          We&apos;ve delivered over 229K+ ad content for clients
        </div>
        <div className={`${styles['pop']} ${styles['pop2']}`}>
          Saving time from training marketers, hiring agencies and conducting analysis.
        </div>
        <div className={`${styles['pop']} ${styles['pop3']}`}>
          No code interface & low maintenance for users applications
        </div>

        <div className="w-full text-white text-center android:text-[28px] ipad:text-[35px] font-semibold">
          Congratulations!
        </div>
        <p className='text-center text-[16px]'>
          Our information has been successfully submitted. We will be in touch with you shortly, or you can directly book a meeting with us.
        </p>
        <Image
          src='/images/book-meeting.svg'
          width={300}
          height={200}
          className='w-full'
          alt='book a meeting'
        />
        <div className="w-full">
          <PrimaryButton
            target="_blank"
            href="https://calendly.com/xinrliu/adsgency-ai-demo-meeting"
            text="Book Meeting"
          />
        </div>

        <div className='w-full mt-[32px] flex flex-col justify-center items-center android:text-[12px] ipad:text-[14px]'>
          <p className='w-full text-center text-[#C1BECA]'>
            For technical issues and general inquires, please
          </p>
          <Link href="/contactUs" className='text-[#9B71FF] underline text-base'>
            contact us
          </Link>
        </div>
      </div>
    </>
  )
}

export default BookMeeting
