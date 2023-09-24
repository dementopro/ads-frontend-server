// Import necessary dependencies and components
import { GeneImageContext } from '@/context/generate'; // Import context for managing state
import Image from 'next/image'; // Import Next.js Image component
import React, { useContext } from 'react'; // Import React and useContext hook

// Topbar Component: Represents the top navigation bar
const Topbar = () => {
  const {
    modeType, // Mode type state (e.g., 'portrait' or 'product')
    updateModeType, // Function to update the mode type
  } = useContext(GeneImageContext); // Access state and functions from the GeneImageContext

  return (
    <div className='flex flex-wrap gap-2 justify-between items-center mb-4'>
      <div className='flex items-center gap-4'>
        <div className='text-xl'>Image to Image</div>
      </div>
      <div className='flex items-center justify-between border border-[#35363A] bg-[#1B1C21] p-[6px] rounded-lg'>
        {/* Button to select 'Portrait' mode */}
        <button
          onClick={() => updateModeType('portrait')} // Call updateModeType with 'portrait' when clicked
          className={`py-1 px-4 flex items-center justify-between border gap-2 rounded-lg transition-all ${modeType === 'portrait' ? 'bg-[#35363A] border-primary-purple' : 'border-transparent'}`}>
          <Image src={modeType === 'portrait' ? '/images/admin/img2img/portrait-active.svg' : '/images/admin/img2img/portrait.svg'} alt='portrait' width={28} height={28} />
          <span>Portrait</span>
        </button>
        {/* Button to select 'Product' mode */}
        <button
          onClick={() => updateModeType('product')} // Call updateModeType with 'product' when clicked
          className={`py-1 px-4 flex items-center justify-between border gap-2 rounded-lg transition-all ${modeType === 'product' ? 'bg-[#35363A] border-primary-purple' : 'border-transparent'}`}>
          <Image src={modeType === 'product' ? '/images/admin/img2img/product-active.svg' : '/images/admin/img2img/product.svg'} alt='product' width={28} height={28} />
          <span>Product</span>
        </button>
      </div>
    </div>
  );
}

export default Topbar;