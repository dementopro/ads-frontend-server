import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { capitalize } from '@/lib/format'
import { PlatformType } from '@/types/socialInsights'
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'

const SocialAccountsList = () => {

  const { platforms, updateConnectedStatus } = useContext(SocialInsightsContext)

  async function onConnect(platform: PlatformType | "all") {
    switch (platform) {
      case "facebook":
        await connectFacebook()
        updateConnectedStatus(platform, true)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h3 className='text-lg mt-12'>Add some social accounts</h3>
      <div className='mt-5 flex flex-wrap gap-10 select-none'>
        {
          platforms.map(platform => (
            <div key={platform.name} className='flex justify-between items-center p-6 border border-[#525252] bg-[#35363A] rounded-lg w-[294px]'>
              <div className='flex items-center gap-3'>
                <Icon icon={platform.icon} width={32} height={32} />
                <div className='text-base'>{capitalize(platform.name)}</div>
              </div>
              <div>
                {
                  !platform.isConnected ?
                    <button
                      onClick={() => onConnect(platform.name)}
                      className='w-[106px] h-[28px] flex items-center justify-center rounded-full bg-primary-purple text-white text-sm hover:opacity-80'>Connect</button>
                    :
                    <div className='w-[106px] h-[28px] flex items-center justify-center rounded-full bg-[#201641] text-primary-purple text-sm'>Connected</div>
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SocialAccountsList


async function connectFacebook() {
  try {
    const response = await fetch('/fapi/fb_login', {
      method: 'GET',
    })
    if (response.ok) {
      const data = await response.json()
      if (data.status === SUCCESS_CODE) {
        window.open(data.fb_url, '_blank')
      } else {
        console.log(data.message)
      }
    } else {
      console.log('error')
    }
    console.log('response', response)
  } catch (error) {
    console.log('error', error)
  }
}
