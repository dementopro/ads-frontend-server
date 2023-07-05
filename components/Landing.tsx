import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='w-full h-full max-lg:hidden lg:w-1/2 lg:max-w-[600px] bg-white px-16 py-20 relative'>
      <Image alt='landing' src={'/images/login/landing.png'} fill />
    </div>
  )
}

export default Landing
