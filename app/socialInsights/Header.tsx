// Import necessary dependencies and components
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import { SocialInsightsContext } from '@/context/socialInsights';
import { capitalize } from '@/lib/format';
import { Platform } from '@/types/socialInsights';

// Define the header component
const Header = () => {
  // Access context values using useContext hook
  const { platforms, currentPlatform, setCurrentPlatform, checkConnectStatus } = useContext(SocialInsightsContext)

  // Handle platform button click event
  function onPlatformClick(platform: Platform) {
    setCurrentPlatform(platform.name)
  }

  // Render the header
  return (
    <div className='flex items-center w-full border-b border-[#27282F]'>
      {
        // Map through the available platforms and create buttons for each
        platforms
          .map(platform => (
            <button
              onClick={() => onPlatformClick(platform)}
              key={platform.name}
              className={`
                w-[128px] p-2 border-b-2 flex items-center justify-center gap-2 cursor-pointer
                ${currentPlatform === platform.name ? 'border-primary-purple bg-[#35363A] rounded-t-lg' : 'border-transparent'}
                ${checkConnectStatus(platform.name) ? '' : 'text-primary-gray'}
              `}
            >
              {/* Render platform icon */}
              <Icon className={`${!checkConnectStatus(platform.name) ? 'filter grayscale' : ''}`} icon={platform.icon} />
              {/* Render platform name */}
              <span>{capitalize(platform.name)}</span>
            </button>
          ))
      }
    </div>
  )
}

export default Header