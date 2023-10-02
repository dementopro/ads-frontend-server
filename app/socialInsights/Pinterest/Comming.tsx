// Import necessary dependencies and components
import { Icon } from '@iconify/react'
import Image from 'next/image'
import pinterestIcon from '@iconify/icons-logos/pinterest';

// Define the Comming component
const Comming = () => {

  return (
    <div className='mx-auto flex flex-col items-center justify-center mt-5 py-5 gap-10'>
      {/* Display a message indicating that Pinterest is connected */}
      <h2 className='text-[18px] flex items-center justify-center '>
        Pinterest Connected! 🎊
      </h2>
      {/* Display Pinterest icon, TikTok logo, and another logo */}
      <div className='flex items-center justify-between gap-10'>
        <Icon icon={pinterestIcon} width={54} height={54} />
        <Image src={'/images/socialInsights/link.svg'} alt='tiktok' width={130} height={34} />
        <Image src={'/images/socialInsights/logo.svg'} alt='tiktok' width={54} height={54} />
      </div>
      {/* Display an image of a man */}
      <Image src='/images/socialInsights/man.svg' alt='man' width={204} height={176} />
      {/* Display a message indicating that the dashboard is coming soon */}
      <div
        className='text-primary-gray flex items-center justify-center'>
        Dashboard is coming soon!
      </div>
    </div>
  )
}

// Export the Comming component as the default export
export default Comming