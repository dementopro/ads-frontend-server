import { SocialInsightsContext } from '@/context/socialInsights';
import { capitalize } from '@/lib/format';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import React, { useContext } from 'react';

import axios from '@/lib/axios';

const openedPlatforms = ['tiktok', 'facebook', 'pinterest'];

const ConnectPlatform = () => {
  const { currentPlatform, platforms } = useContext(SocialInsightsContext);

  async function onConnect() {
    switch (currentPlatform) {
      case 'facebook':
        await connectFacebook();
        break;
      case 'tiktok':
        await connectTikTok();
        break;
      case 'pinterest':
        await connectPinterest();
        break;
      default:
        break;
    }
  }

  const logo = platforms.find((platform) => platform.name === currentPlatform)
    ?.icon!;

  return (
    <div className="mx-auto flex flex-col items-center justify-center mt-5 py-5 gap-10">
      <h2 className="text-[18px]">Add {capitalize(currentPlatform)} account</h2>
      <div className="flex items-center justify-between gap-10">
        <Icon icon={logo} width={54} height={54} />
        <Image
          src={'/images/socialInsights/link.svg'}
          alt={currentPlatform}
          width={130}
          height={34}
        />
        <Image
          src={'/images/socialInsights/logo.svg'}
          alt={currentPlatform}
          width={54}
          height={54}
        />
      </div>
      <Image
        src="/images/socialInsights/man.svg"
        alt="man"
        width={204}
        height={176}
      />
      {openedPlatforms.includes(currentPlatform) ? (
        <button
          onClick={onConnect}
          className="bg-primary-purple text-white rounded-lg flex items-center justify-center py-2 px-4 hover:opacity-80"
        >
          <Icon icon="mdi-link" width={18} className="mr-2 rotate-[135deg]" />
          Add account
        </button>
      ) : (
        <div className="bg-primary-gray text-white rounded-lg flex items-center justify-center py-2 px-4 select-none">
          <Icon icon="mdi-lock" width={18} className="mr-2" />
          Comming soon
        </div>
      )}
    </div>
  );
};

export default ConnectPlatform;

async function connectFacebook() {
  try {
    const response = await axios({
      url: '/fapi/fb_login',
      method: 'GET',
    });
    if (response.status === 200) {
      const data = response.data;
      // 替换当前 url 为 data.fb_auth_url
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
    const response = await axios({
      url: '/fapi/tiktok_login',
      method: 'GET',
    });
    if (response.status === 200) {
      const data = response.data;
      // 替换当前 url 为 data.url
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
    const response = await axios({
      url: '/fapi/pinterest_login',
      method: 'GET',
    });
    if (response.status === 200) {
      const data = response.data;
      // 替换当前 url 为 data.url
      window.location.replace(data.url);
    } else {
      console.log('error');
    }
    console.log('response', response);
  } catch (error) {
    console.log('error', error);
  }
}
