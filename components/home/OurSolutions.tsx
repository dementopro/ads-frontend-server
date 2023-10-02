'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { ourSolutions } from '@/data/our-solutions'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OurSolutions = () => {

  const main = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes: Array<HTMLDivElement> = self.selector?.('.box');
      boxes.forEach((box, index) => {
        gsap.to(box, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 80%',
            scrub: true,
          },
        });
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className='sm:px-[74px] max-sm:items-center bg-[#050a2a] flex flex-col w-full sm:py-12 overflow-hidden' ref={main}>
      <h3 className='text-3xl sm:text-4xl text-center italic font-semibold uppercase'>Our solutions</h3>
      <div className='w-full mx-auto mt-12 mb-8 justify-center flex max-sm:flex-col max-sm:items-center flex-wrap sm:gap-x-[22px] gap-4 sm:gap-y-[30px]'>
        {ourSolutions.map((item, index) => (
          <div key={item.title} className={`
          box transition-all translate-y-[100px] opacity-0 border rounded-xl border-[#35363a] p-6 gap-3 flex flex-col max-sm:w-[90%] w-[304px] min-h-[220px]
          `}
            style={{
              transitionDelay: `${(index % 4) * 100}ms`,
              animationDelay: `${(index % 4) * 100}ms`
            }}
          >
            <div className='flex justify-between items-baseline h-[56px]'>
              <Image alt={item.title} width={20} height={20} src={`/images/home/solutions/${index + 1}.png`} />
              <div className='text-[#D9D9D9] italic text-right text-xl font-semibold max-w-[180px]'>{item.title}</div>
            </div>
            <p className='text-[#D9D9D9] text-base text-right'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurSolutions