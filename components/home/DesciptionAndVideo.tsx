'use client'
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DesciptionAndVideo = () => {
  const main = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // Define GSAP animations using ScrollTrigger
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

    // Cleanup GSAP animations when the component unmounts
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <div className='max-sm:hidden w-full h-min py-4 sm:py-12 bg-[#050a2a]' ref={main}>
      {/* ... JSX for content ... */}
    </div>
  );
}

export default DesciptionAndVideo;