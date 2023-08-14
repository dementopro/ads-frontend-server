'use client'
import Image from 'next/image';
import Slider from "react-slick";
import { userTestimonials } from '@/data/user-testimonials';
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BgClipPath = (index: number) => {
  switch (index % 6) {
    case 0:
      return (
        <div
          className='absolute inset-0 top-[-30px] w-full h-full'
          style={{
            clipPath: 'circle(50% at 50% 0)',
            backgroundImage: 'url(/images/home/testimonial/0.jpg)',
            backgroundPosition: '50% 250%',
          }}
        ></div>
      )
    case 1:
      return (
        <div
          className='absolute inset-0 top-[-30px] w-full h-full'
          style={{
            clipPath: 'circle(50% at 50% 0)',
            backgroundImage: 'url(/images/home/testimonial/1.jpg)',
            backgroundPosition: '33% 128%',
            backgroundSize: '100%',
          }}
        ></div>
      )
    case 2:
      return (
        <div
          className='absolute inset-0 top-[-30px] w-full h-full'
          style={{
            clipPath: 'circle(50% at 50% 0)',
            backgroundImage: 'url(/images/home/testimonial/2.jpg)',
            backgroundPosition: '52% 112%',
            backgroundSize: '91%',
          }}
        ></div>
      )
    case 3:
      return (
        <div
          className='absolute inset-0 top-[-30px] w-full h-full'
          style={{
            clipPath: 'circle(50% at 50% 0)',
            backgroundImage: 'url(/images/home/testimonial/3.jpg)',
            backgroundPosition: '40% 113%',
            backgroundSize: '71%',
          }}
        ></div>
      )
    case 4:
      return (
        <div
          className='absolute inset-0 top-[-30px] w-full h-full'
          style={{
            clipPath: 'circle(50% at 50% 0)',
            backgroundImage: 'url(/images/home/testimonial/4.jpg)',
            backgroundPosition: '40% 113%',
            backgroundSize: '100%',
          }}
        ></div>
      )
    case 5:
      return (
        <div
          className='absolute inset-0 top-[-30px] w-full h-full'
          style={{
            clipPath: 'circle(50% at 50% 0)',
            backgroundImage: 'url(/images/home/testimonial/5.jpg)',
            backgroundPosition: '40% 113%',
            backgroundSize: '100%',
          }}
        ></div>
      )
    default:
      return (<div />)
  }
}

const UserTestimonials = () => {





  return (
    <div className='flex flex-col w-full py-16 overflow-hidden'>
      <h3 className='text-3xl sm:text-4xl text-center italic font-semibold uppercase'>
        User Testimonials
      </h3>
      <Slider arrows={false} variableWidth autoplay={true} pauseOnHover={false} autoplaySpeed={0} speed={5000} cssEase='linear' centerMode swipeToSlide={false}
        centerPadding={'6px'} className='mt-12'>
        {userTestimonials.map((item, index) => (
          <div key={index}>
            <div className='p-6 rounded-lg bg-[#171a3b] hover:bg-[#55556f] border border-primary-gray/50 w-[264px] h-[370px] flex flex-col items-center justify-center gap-4 mx-2 relative overflow-hidden'
            >
              {BgClipPath(index)}
              <Image alt={item.name} src={`/images/home/avatar/${index + 1}.jpg`} width={64} height={64} className='rounded-full max-sm:w-10 z-20 mt-[70px]' />
              <div className='flex flex-1 flex-col items-center'>
                <div>{item.name}</div>
                <div className='flex items-center gap-1 mt-1'>
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                </div>
                <p className='line-clamp-5 text-center text-sm mt-3' title={item.testimonial}>
                  {item.testimonial}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div >
  )
}

export default UserTestimonials
