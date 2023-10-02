import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import { SocialInsightsContext } from '@/context/socialInsights';
import { capitalize } from '@/lib/format';
import { Platform } from '@/types/socialInsights';

const Header = () => {
  const { platforms, currentPlatform, setCurrentPlatform, checkConnectStatus } = useContext(SocialInsightsContext)

  function onPlatformClick(platform: Platform) {
    setCurrentPlatform(platform.name)
  }

  return (
    <div className='flex items-center w-full border-b border-[#27282F]'>
      {
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
              <Icon className={`${!checkConnectStatus(platform.name) ? 'filter grayscale' : ''}`} icon={platform.icon} />
              <span>{capitalize(platform.name)}</span>
            </button>
          ))
      }
    </div>
  )
}

export default Header
