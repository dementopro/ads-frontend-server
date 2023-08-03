import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { capitalize } from '@/lib/format'
import Image from 'next/image'
import React, { useContext } from 'react'

const ConnectPlatform = () => {

  const { currentPlatform, updateConnectedStatus } = useContext(SocialInsightsContext)

  const imgUrl = `/images/socialInsights/${currentPlatform}_connect.svg`

  async function onConnect() {
    switch (currentPlatform) {
      case "facebook":
        await connectFacebook()
        updateConnectedStatus(currentPlatform, true)
        break;
      default:
        break;
    }
  }

  return (
    <div className='mx-auto flex flex-col items-center justify-center pt-[80px] gap-12'>
      <h2 className='text-[18px]'>Add {capitalize(currentPlatform)} account</h2>
      <Image src={imgUrl} alt={currentPlatform} width={320} height={320} />
      <button
        onClick={onConnect}
        className='bg-primary-purple text-white rounded-lg w-[132px] flex items-center justify-center py-2 hover:opacity-80'>Add account</button>
    </div>
  )
}

export default ConnectPlatform


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
