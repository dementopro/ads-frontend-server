'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DesciptionAndVideo = () => {

  const main = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes: Array<HTMLDivElement> = self.selector?.('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 40%',
            scrub: true,
          },
        });
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);


  return (
    <div className='max-sm:hidden w-full h-min py-4 sm:py-12 bg-[#050a2a]' ref={main}>
      <div className='flex gap-11 flex-wrap items-center justify-center max-w-[1100px] mx-auto'>
        <div className='flex flex-col text-white sm:gap-9 flex-1 overflow-hidden'>
          <div className={`box flex gap-5 items-center p-6 rounded-lg translate-x-[200px] opacity-0
          `}
            style={{
              background: 'linear-gradient(90deg, rgba(39,40,47,1) 0%, rgba(5,10,42,1) 100%)',
            }}
          >
            <div className='text-4xl sm:text-5xl'>🦄</div>
            <div className='max-w-[320px] flex items-center'>
              {`We've delivered over 229K+ ad content for clients`}
            </div>
          </div>
          <div className={`box flex gap-5 items-center p-6 rounded-lg translate-x-[200px] opacity-0
          `}
            style={{
              background: 'linear-gradient(90deg, rgba(39,40,47,1) 0%, rgba(5,10,42,1) 100%)',
            }}
          >
            <div className='text-4xl sm:text-5xl'>⏰</div>
            <div className='max-w-[320px] flex items-center'>
              Saving time from training marketers, hiring agencies and conducting analysis.
            </div>
          </div>
          <div className={`box flex gap-5 items-center p-6 rounded-lg translate-x-[200px] opacity-0
          `}
            style={{
              background: 'linear-gradient(90deg, rgba(39,40,47,1) 0%, rgba(5,10,42,1) 100%)',
            }}
          >
            <div className='text-4xl sm:text-5xl'>☎️</div>
            <div className='max-w-[320px] flex items-center'>
              Real time data analytics on content and ad performances for users from 145+ countries
            </div>
          </div>
        </div>
        <div className='sm:w-[540px] sm:h-[400px] rounded-lg overflow-hidden '>
          <iframe className='w-full h-full' src="https://www.youtube.com/embed/aEEINIkBd20" title="AdsGency AI Intro" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  )
}

export default DesciptionAndVideo
