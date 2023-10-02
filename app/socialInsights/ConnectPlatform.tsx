// Import necessary dependencies and components
import { SocialInsightsContext } from '@/context/socialInsights';
import { capitalize } from '@/lib/format';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useContext } from 'react';

// Define the list of opened platforms
const openedPlatforms = ['tiktok'];

// Define the ConnectPlatform component
const ConnectPlatform = () => {

  // Get the currentPlatform and platforms from the context
  const { currentPlatform, platforms } = useContext(SocialInsightsContext);

  // Function to handle connecting to the current platform
  async function onConnect() {
    switch (currentPlatform) {
      case "facebook":
        await connectFacebook();
        break;
      case "tiktok":
        await connectTikTok();
        break;
      case "pinterest":
        await connectPinterest();
        break;
      default:
        break;
    }
  }

  // Get the logo for the current platform
  const logo = platforms.find(platform => platform.name === currentPlatform)?.icon!;

  return (
    <div className='mx-auto flex flex-col items-center justify-center mt-5 py-5 gap-10'>
      <h2 className='text-[18px]'>Add {capitalize(currentPlatform)} account</h2>
      <div className='flex items-center justify-between gap-10'>
        <Icon icon={logo} width={54} height={54} />
        <Image src={'/images/socialInsights/link.svg'} alt={currentPlatform} width={130} height={34} />
        <Image src={'/images/socialInsights/logo.svg'} alt={currentPlatform} width={54} height={54} />
      </div>
      <Image src='/images/socialInsights/man.svg' alt='man' width={204} height={176} />
      {
        // Render a "Add account" button or a "Coming soon" message based on the current platform
        openedPlatforms.includes(currentPlatform) ?
          <button
            onClick={onConnect}
            className='bg-primary-purple text-white rounded-lg flex items-center justify-center py-2 px-4 hover:opacity-80'>
            <Icon icon='mdi-link' width={18} className='mr-2 rotate-[135deg]' />
            Add account
          </button>
          :
          <div
            className='bg-primary-gray text-white rounded-lg flex items-center justify-center py-2 px-4 select-none'>
            <Icon icon='mdi-lock' width={18} className='mr-2' />
            Coming soon
          </div>
      }
    </div>
  );
}

// Export the ConnectPlatform component as the default export
export default ConnectPlatform;

// Functions for connecting to different platforms

async function connectFacebook() {
  try {
    const response = await fetch('/fapi/fb_login', {
      method: 'GET',
    });
    if (response.ok) {
      const data = await response.json();
      // Replace the current URL with data.fb_auth_url
      window.location.replace(data.fb_auth_url);
    } else {
      console.log('error');
    }
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
}

async function connectTikTok() {
  try {
    const response = await fetch('/fapi/tiktok_login', {
      method: 'GET',
    });
    if (response.ok) {
      const data = await response.json();
      // Replace the current URL with data.url
      window.location.replace(data.url);
    } else {
      console.log('error');
    }
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
}

async function connectPinterest() {
  try {
    const response = await fetch('/fapi/pinterest_login', {
      method: 'GET',
    });
    if (response.ok) {
      const data = await response.json();
      // Replace the current URL with data.url
      window.location.replace(data.url);
    } else {
      console.log('error');
    }
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
}