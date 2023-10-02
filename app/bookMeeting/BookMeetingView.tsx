// Import necessary modules and components.

'use client'

import { useRouter } from 'next/navigation';
import React from 'react';
import styles from './BookMeeting.module.css';
import Image from 'next/image';

// Define the BookMeetingView component.
const BookMeetingView = () => {
  const router = useRouter();

  // Function to navigate to the Contact Us page.
  function toContactUs() {
    router.push('/contactUs');
  }

  return (
    <>
      {/* Container for the "Book Meeting" view */}
      <div
        className={styles.form}
        style={{
          boxShadow: '0px 0px 66px 0px rgba(132, 79, 255, 0.28)', // Adding a box shadow
        }}
      >
        <h3 className='text-white text-center text-3xl font-bold mb-7'>
          Congratulations!
        </h3>
        <p className='text-center text-base'>
          Our information has been successfully submitted. We will be in touch
          with you shortly, or you can directly book a meeting with us.
        </p>
        {/* Display an image */}
        <Image
          src='/images/book-meeting.png'
          width={300}
          height={200}
          className=''
          alt='book a meeting'
        />
        {/* Button to book a meeting */}
        <a
          href='https://calendly.com/xinrliu/adsgency-demo-request'
          target='_blank'
          className='w-full justify-center h-[44px] flex items-center cursor-pointer hover:opacity-80 rounded bg-primary-gradient text-white text-base font-medium truncate'
        >
          Book a meeting
        </a>
        <div className='mt-10 flex flex-col justify-center items-center'>
          <p className='text-primary-gray text-base text-center'>
            For technical issues and general inquiries, please
          </p>
          {/* Button to navigate to the Contact Us page */}
          <button
            type='button'
            onClick={toContactUs}
            className='text-primary-purple underline text-base'
          >
            contact us
          </button>
        </div>
      </div>
    </>
  );
};


export default BookMeetingView;
