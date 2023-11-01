'use client'
import PrimaryButton from '@/components/PrimaryButton'
import Image from 'next/image'
import { useEffect, useState } from 'react';

interface JoinOurTeamProps {
  scrollToOpenPositions: () => void; // Define the type explicitly
}

const JoinOurTeam: React.FC<JoinOurTeamProps> = ({ scrollToOpenPositions }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth > 1440);

      function handleResize() {
        setIsDesktop(window.innerWidth > 1440);
      }
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="desktop:w-[1240px] ipad:w-full m-auto h-full android:my-[32px] ipad:my-[48px] android:px-[32px] ipad:px-[0px] justify-start items-center flex android:flex-col ipadmini:flex-row android:gap-[32px] ipad:gap-[32px]">
      <div className="desktop:w-5/12 android:w-full relative flex flex-col items-start">
        <Image
          width={100}
          height={100}
          className='android:hidden ipad:block absolute top-[-50px] left-[-20px] android:w-[60px] ipad:w-[100px] h-auto z-10'
          title='Home'
          src={'/images/bg-elements/headline-circles.svg'} alt='logo'
        />
        <div className="flex flex-col gap-[16px] justify-center android:items-center ipadmini:items-start relative z-20">
          <div className="w-fulll text-white font-poppins font-semibold android:text-[32px] ipad:text-[43px] android:leading-[34px] ipad:leading-[40px] desktop:leading-[56px]">
            Join Our Team
          </div>
          <div className="w-full android:text-center ipadmini:text-left font-open-sans text-[#D0CDD6] font-regular android:text-[14px] ipad:text-[16px]">
            Join our team of world-class engineers, designers, product managers,
            and marketers. We’re looking for people who are as excited as we are
            to build the future of commerce.
          </div>

          <div onClick={scrollToOpenPositions}>
            <PrimaryButton
              target="_self"
              href=""
              text="See Open Roles"
            />
          </div>
        </div>
      </div>

      <div className="desktop:w-7/12 android:w-full h-auto">
        <Image
          width={696}
          height={529}
          className="w-full h-auto object-coverm rounded-[25px]"
          src={isDesktop ? '/images/career/join-us-large.svg' : '/images/career/join-us-small.svg'}
          alt="join-us"
        />
      </div>
    </div>
  );
};

export default JoinOurTeam;
