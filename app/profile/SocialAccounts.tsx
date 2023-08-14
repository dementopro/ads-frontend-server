import { SocialInsightsContext } from '@/context/socialInsights'
import { SUCCESS_CODE } from '@/data/constant'
import { capitalize } from '@/lib/format'
import { Icon } from '@iconify/react'
import { Modal, message } from 'antd'
import React, { useContext } from 'react'

const SocialAccounts = () => {

  const { platforms, checkConnectStatus, updateAllConnectStatus } = useContext(SocialInsightsContext)
  const [modal, modalContextHolder] = Modal.useModal()
  const [messageApi, contextHolder] = message.useMessage();

  const enablePlatforms = ['tiktok']

  async function disconnectTikTok() {
    try {
      const response = await fetch('/fapi/tiktok_logout', {
        method: 'GET'
      })
      if (response.ok) {
        const data: IResponse = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Successfully disconnected')
        } else {
          messageApi.error(data.message || 'Something went wrong')
        }
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      updateAllConnectStatus()
    }
  }

  function ask() {
    modal.confirm({
      title: 'Are you sure you want to disconnect?',
      content: '',
      okText: 'Yes',
      cancelText: 'No',
      cancelButtonProps: {
        className: 'bg-primary-gradient text-white rounded-lg font-semibold hover:!text-white hover:opacity-80 mt-2'
      },
      okButtonProps: {
        className: 'bg-white text-primary-purple rounded-lg font-semibold hover:!text-white hover:!bg-primary-purple mt-2',
        type: 'link'
      },
      maskClosable: true,
      centered: true,
      async onOk() {
        await disconnectTikTok()
      }
    })
  }

  return (
    <>
      {modalContextHolder}
      {contextHolder}
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
                  <div className='flex items-center gap-3'>
                    <div
                      className='px-2 rounded-full text-primary-purple'>
                      {checkConnectStatus(platform.name) ? 'Connected' : 'Not connected'}
                    </div>
                    {
                      checkConnectStatus(platform.name) &&
                      <button
                        onClick={ask}
                        className='hover:opacity-80 px-2 rounded-full text-primary-purple bg-[#201641]'>
                        Disconnect
                      </button>
                    }
                  </div>
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
