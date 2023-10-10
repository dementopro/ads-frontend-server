import { Dropdown, MenuProps, message } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import chevronDown from '@iconify/icons-mdi/chevron-down'
import { Icon } from '@iconify/react'

// Import necessary dependencies and components
import { SUCCESS_CODE } from '@/data/constant'
import { onLogout } from '@/lib/auth'
import { useAccountContext } from '@/context/account'

// Define the DropDown component
const DropDown = () => {
  // Access the router for navigation
  const router = useRouter()
  // Use the message API from Ant Design for displaying messages
  const [messageApi, contextHolder] = message.useMessage()
  const { setAccount } = useAccountContext();

  // Define menu items for the dropdown
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

  // Function to navigate to the user profile page
  function toProfilePage() {
    router.push('/profile')
  }

  // Async function to handle user logout
  async function handleLogout() {
    try {
      // Display a loading message
      messageApi.loading('Logout...');
      onLogout();
      setAccount(null);
      router.push('/login');
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      {contextHolder}
      {/* Create a dropdown menu with specified items */}
      <Dropdown menu={{ items }} arrow>
        {/* Render the dropdown trigger */}
        <a className='h-[46px] flex items-center justify-center gap-0 android:gap-4 cursor-pointer' onClick={(e) => e.preventDefault()}>
          <Image src={'/images/admin/avatar.svg'} width={30} height={30} alt="avatar" className="rounded-full inline-block" />
          <Icon icon={chevronDown} inline className='text-primary-gray' />
        </a>
      </Dropdown>
    </>
  )
}

// Export the DropDown component
export default DropDown