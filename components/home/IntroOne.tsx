'use client'
import Image from 'next/image'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroOne = () => {

  const main = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes: Array<HTMLDivElement> = self.selector?.('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          opacity: 1,
          scale: 1,
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
    <div className='w-full mx-auto max-sm:p-4 py-2 sm:py-20 bg-[#050a2a]' ref={main}>
      <div className='mx-auto max-w-[1100px] flex items-center justify-between max-sm:flex-col'>
        <div className='flex flex-col gap-8 max-sm:mb-6'>
          <h2 className='italic text-3xl max-sm:text-center max-w-[500px]'>
            One click deployment to public or on-premise cloud
          </h2>
          <div className='text-primary-gray max-sm:text-center flex flex-col gap-4 max-w-[540px] text-sm'>
            <p>Advanced Automation: AdsGency AI delivers complete automated workflows, liberating your data science team to concentrate on crafting top-notch ML models rather than mundane tasks.</p>
            <p>Intelligent Monitoring: With AdsGency AI, gain access to real-time metrics of your models. Our software persistently oversees these indicators, promptly detecting any drift or anomaly and alerting you for immediate action.</p>
            <p>{`Seamless Integration: AdsGency AI smoothly fits into your existing tech environment, whether you're using AWS, GCP, Azure, or other platforms, adapting to your needs and ensuring uninterrupted operations.`}</p>
          </div>
        </div>
        <div className='box scale-50 opacity-50 relative flex items-center justify-center'>
          <div className='z-50 p-2 rounded-lg bg-[#9f70be] w-full h-full'>
            <Image src={'/images/home/base.png'} width={480} height={360} alt='intro' />
          </div>
          <div className='z-20 flex items-center justify-center rounded-lg bg-[#7d3e8f] absolute inset-0 w-[90%] h-[110%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />
          <div className='z-30 flex items-center justify-center rounded-lg bg-[#88539b] absolute inset-0 w-[95%] h-[105%] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' />
        </div>
      </div>
    </div>
  )
}

export default IntroOne