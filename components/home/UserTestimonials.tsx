'use client'
import Image from 'next/image';
import Slider from "react-slick";
import { userTestimonials } from '@/data/user-testimonials';
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UserTestimonials = () => {
  return (
    <div className='flex flex-col w-full py-12 overflow-hidden'>
      <h3 className='text-3xl max-sm:text-center sm:px-[74px]'>User Testimonials</h3>
      <Slider arrows={false} variableWidth autoplay pauseOnHover={false} autoplaySpeed={0} speed={5000} cssEase='linear' centerMode swipeToSlide={false}
        centerPadding={'60px'} className='mt-8 max-sm:h-[200px]'>
        {userTestimonials.map((item, index) => (
          <div key={index}>
            <div className='p-6 rounded-xl bg-[#1B1C21] border border-primary-purple max-sm:w-[320px] sm:w-[648px] flex items-start justify-center gap-4 mx-5'>
              <Image alt={item.name} src={`/images/home/avatar/${index + 1}.jpg`} width={64} height={64} className='rounded-full max-sm:w-10' />
              <div className='flex flex-1 flex-col'>
                <div>{item.name}</div>
                <div className='flex items-center gap-1 mt-1'>
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                  <Image alt='user' src='/images/home/star.svg' width={20} height={20} className='rounded-full' />
                </div>
                <p className='line-clamp-4 text-sm mt-3 max-sm:w-[260px] max-sm:ml-[-54px]'>
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
