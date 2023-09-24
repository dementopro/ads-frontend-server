// Import React and styles.
import React from 'react';
import styles from './careers.module.css';
import JobList from '@/app/careers/JobList';

// Define the Content component.
const Content = () => {

  // Function to scroll to the job list when the button is clicked.
  function onSeeOpenRolesClick() {
    const jobList = document.getElementById('job-list');
    jobList?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* The header section with background image and text. */}
      <div className={`${styles['head-bg']} w-full h-[600px] flex flex-col items-center justify-center gap-4`}>
        <h1 className="text-2xl sm:text-4xl text-white font-bold">Join Our Team</h1>
        <p className="text-white text-center max-w-[600px]">
          Join our team of world-class engineers, designers, product managers, and marketers. We’re looking for people who are as excited as we are to build the future of commerce.
        </p>
        {/* Button to see open job roles. */}
        <button
          onClick={onSeeOpenRolesClick}
          className='px-9 py-4 bg-primary-purple text-white font-semibold rounded hover:opacity-80'
        >
          See open roles
        </button>
      </div>
      {/* The job list section. */}
      <div id='job-list'>
        <JobList />
      </div>
    </>
  );
}

export default Content;