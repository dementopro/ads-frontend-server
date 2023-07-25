import { Icon } from '@iconify/react'
import borderAllRounded from '@iconify/icons-material-symbols/border-all-rounded';
import React, { useContext } from 'react'
import { SocialInsightsContext } from '@/context/socialInsights';
import { capitalize } from '@/lib/format';
import { Platform } from '@/types/socialInsights';

const Header = () => {
  const { platforms, currentPlatform, setCurrentPlatform } = useContext(SocialInsightsContext)

  function onPlatformClick(platform: Platform) {
    if (platform.isConnected) {
      setCurrentPlatform(platform.name)
    }
  }

  return (
    <div className='flex items-center w-full border-b border-[#27282F]'>
      <button
        onClick={() => setCurrentPlatform('all')}
        className={`w-[122px] p-2 border-b-2 flex items-center justify-center gap-2 rounded-t-lg ${currentPlatform === 'all' ? 'border-primary-purple bg-[#35363A]' : 'border-transparent'}`}
      >
        <Icon icon={borderAllRounded} />
        <span>All</span>
      </button>
      {
        [...platforms]
          .sort((a, b) => +b.isConnected - +a.isConnected)
          .map(platform => (
            <button
              onClick={() => onPlatformClick(platform)}
              key={platform.name}
              className={`
            w-[128px] p-2 border-b-2 flex items-center justify-center gap-2
            ${currentPlatform === platform.name ? 'border-primary-purple bg-[#35363A] rounded-t-lg' : 'border-transparent'}
            ${platform.isConnected ? 'cursor-pointer' : 'cursor-not-allowed text-primary-gray'}
            `}
            >
              <Icon className={`${!platform.isConnected ? 'filter grayscale' : ''}`} icon={platform.icon} />
              <span>{capitalize(platform.name)}</span>
            </button>
          ))
      }
    </div>
  )
}

export default Header
