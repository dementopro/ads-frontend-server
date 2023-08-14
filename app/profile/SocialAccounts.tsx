import { SocialInsightsContext } from '@/context/socialInsights'
import { capitalize } from '@/lib/format'
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'

const SocialAccounts = () => {

  const { platforms, checkConnectStatus } = useContext(SocialInsightsContext)

  const enablePlatforms = ['tiktok', 'pinterest']

  return (
    <>
      <div className='px-6 py-5 bg-[#1B1C21] border border-[#27282F] rounded-lg flex justify-between flex-col min-h-[280px]'>
        <h2 className='text-primary-gray text-sm'>Social accounts</h2>
        <div className='flex flex-col mt-3 overflow-auto pr-4 small-scrollbar'>
          {
            platforms.map(platform => (
              <div key={platform.name} className={`p-4 flex items-center justify-between w-full rounded-lg hover:bg-[#35363A]`}>
                <div className={`flex items-center gap-7 ${!checkConnectStatus(platform.name) ? 'filter grayscale' : ''}`}>
                  <Icon width={22} height={22} icon={platform.icon} />
                  <span className='text-base'>{capitalize(platform.name)}</span>
                </div>
                {
                  enablePlatforms.includes(platform.name) &&
                  <button className='px-2 rounded-full text-primary-purple bg-[#201641]'>
                    {checkConnectStatus(platform.name) ? 'Connected' : 'Not connected'}
                  </button>
                }
                {
                  !enablePlatforms.includes(platform.name) &&
                  <button className='px-2 rounded-full text-[#5F6368] border border-[#5F6368]'>
                    Coming soon
                  </button>
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SocialAccounts
