'use client';
import * as React from 'react';
import PrimaryButton from '../common/PrimaryButton';
import Image from 'next/image';
import { Avatar, CardProvider } from '@nextui-org/react';
import { BiHeart, BiMessage } from 'react-icons/bi';

type SampleCardProps = {
  avatar: string;
  image: string;
  name: string;
  comment: string;
};

<<<<<<< Updated upstream
const SampleCard = ({ avatar, name, comment, image }: SampleCardProps) => {
=======
type CardProps = {
  title: string;
  image: string;
  className?: string;
}

const Card = ({ title, image, className }: CardProps) => {
  return (
    <div className={`py-[2px] rounded-[8px] bg-light-purple-gradient ${className}`}>
      <div className="w-full h-full bg-black shrink-0 py-1 w-full android:w-[242px] rounded-[7px]">
        <div className="flex gap-[10px] items-center px-8 py-2">
          <h3 className="text-white font-semibold text-sm capitalize">
            {title}
          </h3>
        </div>
        <div
          className="mt-3 h-[176px] w-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </div>
  );
};


const SampleCard = ({ avatar, name, comment, image, className }: SampleCardProps) => {
>>>>>>> Stashed changes
  return (
    <div className={`py-[2px] rounded-[8px] bg-light-purple-gradient`}>
      <div className="w-full h-full bg-black shrink-0 py-1 w-full android:w-[242px] rounded-[7px]">
        <div className="flex gap-[10px] items-center px-4">
          <Avatar src={avatar} alt={name} className="w-9 h-9" />
          <h3 className="text-white font-semibold text-sm capitalize">
            {name}
          </h3>
        </div>
        <div
          className="mt-3 h-[104px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="mt-3 flex gap-[15px] items-center px-[14px] text-white">
          <BiHeart className="w-4 h-4" />
          <BiMessage className="w-4 h-4" />
        </div>
        <div
          className="break-words whitespace-break-spaces mt-3 px-[14px] text-white text-xs"
          style={{ overflowWrap: 'anywhere' }}
        >
          <span className="font-bold">{name.replaceAll(' ', '').toLowerCase()}</span>&nbsp;
          <span>{comment}</span>
        </div>
      </div>
    </div>
  );
};

interface ISamplesProps { }

const Samples: React.FunctionComponent<ISamplesProps> = (props) => {
  return (
    <div className="ipad:px-[60px] desktop:px-[100px] android:px-[16px] ipad:px-[0px] bg-[#141217] mt-20 py-16">
      <div className="max-w-[1240px] w-full mx-auto">
        <h2 className="text-center text-white font-poppins text-[43px] font-extrabold">
          Created with AdsGency AI
        </h2>
        <p className="mt-6 text-xl font-semibold text-center text-white font-open-sans">
          AdsGency AI works with Businesses to maximize omnichannel ROI
        </p>
        <div className="flex justify-center mt-6">
          <PrimaryButton icon={true} target="_self" href="/features" text="Learn More" />
        </div>
        <div className='w-full'>
          <div className="flex android:pb-[30px] ipad:pb-0 android:overflow-x-auto ipad:overflow-x-hidden ipad:flex-wrap items-stretch android:justify-start ipad:justify-center w-full gap-4 mt-14">
            <SampleCard
              avatar="/images/home/samples/1.png"
              image="/images/home/samples/1.jfif"
              name="Mazelab"
              comment="Transforming visions into reality with Mazelab - where innovation meets..."
            />
            <SampleCard
              avatar="/images/home/samples/2.png"
              image="/images/home/samples/2.jfif"
              name="Ruul.io"
              comment="Unlock the power of collaboration with Ruul.io - your gateway to seamless..."
            />
            <SampleCard
              avatar="/images/home/samples/3.png"
              image="/images/home/samples/3.jfif"
              name="Earlz"
              comment="Elevate your tech game with Earlz.de - Discover cutting-edge..."
            />
            <SampleCard
              avatar="/images/home/samples/4.png"
              image="/images/home/samples/4.jfif"
              name="Sembrar.Io"
              comment="Cultivate success with Sembrar.io - your growth partner in the..."
            />
          </div>
<<<<<<< Updated upstream
        </div>
        <div className="android:hidden ipad:flex flex-wrap items-stretch justify-center w-full gap-4 mt-6">
          <SampleCard
            avatar="/images/home/samples/5.png"
            image="/images/home/samples/5.jfif"
            name="Titan Ignite"
            comment="Elevate your brand, amplify your reach, and scale your impact. 🔥..."
          />
          <SampleCard
            avatar="/images/home/samples/6.png"
            image="/images/home/samples/6.jfif"
            name="The Hayden Digital"
            comment="Discover the digital edge with TheHaydenDigital.com, and embark on..."
          />
          <SampleCard
            avatar="/images/home/samples/7.png"
            image="/images/home/samples/7.jpg"
            name="Market Karma"
            comment="Boost your online presence with MarketKarma.com - navigate the digital..."
          />
        </div>
        <div className="android:hidden ipad:flex flex-wrap items-stretch justify-center w-full gap-4 mt-6">
          <div className={`py-[2px] rounded-[8px] bg-light-purple-gradient`}>
            <div className="p-6 h-full bg-black rounded-[7px]-lg w-[290px]">
              <img src="/images/home/samples/logo1.png" className='h-[40px]' />
              <div className="mt-3 text-xs text-white break-words whitespace-break-spaces">
                Hey Folks,
                <br />
                <br />
                Welcome to UniHusk - your destination for exceptional outdoor
                living! We&apos;re thrilled to have you on board and can&apos;t wait to help
                you create unforgettable outdoor spaces...
              </div>
              <button className="mt-3 bg-white rounded-full px-6 py-2 text-black text-[10px] font-semibold">
                Visit Website
              </button>
            </div>
          </div>

          <div className={`py-[2px] rounded-[8px] bg-light-purple-gradient`}>
            <div className="p-6 h-full bg-black rounded-[7px] w-[290px]">
              <img src="/images/home/samples/logo2.png" className='h-[50px]' />
              <div className="mt-3 text-xs text-white break-words whitespace-break-spaces">
                Hey there creatives!
                <br />
                <br />
                Capture the magic of your moments with PhotoBohemia! 📸
                <br />
                <br />
                🌈 Quality Prints: Turn your memories into works of art with our
                top-notch printing...
=======
          <div className='w-full'>
            <Marquee pauseOnHover={true} speed={20} autoFill={true}>
              <div className="flex android:pb-[30px] ipad:pb-0 android:overflow-x-auto ipad:overflow-x-hidden ipad:flex-wrap items-stretch android:justify-start ipad:justify-center w-full gap-4 mt-10">
                <SampleCard
                  avatar="/images/home/samples/1.png"
                  image="/images/home/samples/1.jfif"
                  name="Mazelab"
                  comment="Transforming visions into reality with Mazelab - where innovation meets..."
                />
                <SampleCard
                  avatar="/images/home/samples/2.png"
                  image="/images/home/samples/2.jfif"
                  name="Ruul.io"
                  comment="Unlock the power of collaboration with Ruul.io - your gateway to seamless..."
                />
                <SampleCard
                  avatar="/images/home/samples/3.png"
                  image="/images/home/samples/3.jfif"
                  name="Earlz"
                  comment="Elevate your tech game with Earlz.de - Discover cutting-edge..."
                />
                <SampleCard
                  avatar="/images/home/samples/4.png"
                  image="/images/home/samples/4.jpg"
                  name="Market Karma"
                  comment="Boost your online presence with MarketKarma.com – navigate the digit..."
                />
                <Card
                  image="/images/home/samples/5.jpg"
                  title="Inforgraphic"
                />
                <Card
                  image="/images/home/samples/6.jpg"
                  title="Video"
                  className='mr-4'
                />
              </div>
            </Marquee>
            <Marquee pauseOnHover={true} speed={20} autoFill={true}>
              <div className="android:hidden ipad:flex flex-wrap items-stretch justify-center w-full gap-4 mt-4">
                <SampleCard
                  avatar="/images/home/samples/7.png"
                  image="/images/home/samples/7.jfif"
                  name="Titan Ignite"
                  comment="Elevate your brand, amplify your reach, and scale your impact. 🔥..."
                />
                <SampleCard
                  avatar="/images/home/samples/8.png"
                  image="/images/home/samples/8.jfif"
                  name="Sembrar.Io"
                  comment="Cultivate success with Sembrar.io-your growth partner in the..."
                />
                <SampleCard
                  avatar="/images/home/samples/9.png"
                  image="/images/home/samples/9.jfif"
                  name="The Hayden Digital"
                  comment="Discover the digital edge with TheHaydenDigital.com, and embark o..."
                />
                <SampleCard
                  avatar="/images/home/samples/10.png"
                  image="/images/home/samples/10.jpg"
                  name="Click Trust"
                  comment="Don't have the resources internally? We take care of your campaigns..."
                />
                <Card
                  image="/images/home/samples/11.jpg"
                  title="Landing Page"
                />
                <Card
                  image="/images/home/samples/12.jpg"
                  title="Email Marketing"
                  className='mr-4'
                />
>>>>>>> Stashed changes
              </div>
            </div>
          </div>

          <div className={`py-[2px] rounded-[8px] bg-light-purple-gradient`}>
            <div className="p-6 h-full bg-black rounded-[7px] w-[290px]">
              <img src="/images/home/samples/logo3.png" className='h-[40px]' />
              <div className="mt-3 text-xs text-white break-words whitespace-break-spaces">
                Dear Customer,
                <br />
                <br />
                Welcome to Delos - where extraordinary experiences come to life!
                We are thrilled to have you as part of our community, and we can&apos;t
                wait to embark on this journey of discovery and innovation
                together...
              </div>
              <button className="mt-3 bg-blue-700 rounded-full px-6 py-2 text-white text-[10px] font-semibold">
                Visit Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Samples;
