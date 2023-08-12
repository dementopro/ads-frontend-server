import { SUCCESS_CODE } from '@/data/constant'
import { onLogout } from '@/lib/auth'
import chevronDown from '@iconify/icons-mdi/chevron-down'
import { Icon } from '@iconify/react'
import { Dropdown, MenuProps, message } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


const DropDown = () => {

  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage()

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: (
        <button
          onClick={toProfilePage}
          className='text-center flex items-center justify-between gap-2 w-full'
        >
          <Icon icon='mdi:account' width={18} height={18} inline className='text-primary-gray' />
          <span className='flex-1 text-center'>User profile</span>
        </button>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'signOut',
      label: (
        <button
          onClick={handleLogout}
          className='text-center flex items-center justify-between gap-2 w-full'
        >
          <Icon icon='mdi:logout-variant' width={18} height={18} inline className='text-primary-gray' />
          <span className='flex-1 text-center'>Sign out</span>
        </button>
      ),
    },
  ]

  function toProfilePage() {
    router.push('/profile')
  }

  async function handleLogout() {
    try {
      messageApi.loading('Logout...')
      const response = await fetch(`/api/auth/logout`)
      if (response.ok) {
        const data: IResponse = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Logout success')
          onLogout()
          setTimeout(() => {
            router.push('/login')
          }, 1000)
        } else {
          messageApi.error('Logout failed')
        }
      } else {
        messageApi.error('Logout failed')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      {contextHolder}
      <Dropdown menu={{ items }} arrow>
        <a className='h-[46px] flex items-center justify-center gap-4 cursor-pointer' onClick={(e) => e.preventDefault()}>
          <Image src={'/images/admin/avatar.svg'} width={30} height={30} alt="avatar" className="rounded-full inline-block" />
          <Icon icon={chevronDown} inline className='text-primary-gray' />
        </a>
      </Dropdown>
    </>
  )
}

export default DropDown
