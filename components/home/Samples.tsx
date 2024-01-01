'use client';
import * as React from 'react';
import PrimaryButton from '../common/PrimaryButton';
import Image from 'next/image';
import { Avatar } from '@nextui-org/react';
import { BiHeart, BiMessage } from 'react-icons/bi';

type SampleCardProps = {
  avatar: string;
  image: string;
  name: string;
  comment: string;
};

const SampleCard = ({ avatar, name, comment, image }: SampleCardProps) => {
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
              comment="Transforming visions into reality with Mazelab – where innovation meets craftsmanship. Elevate your space, #MazelabStyle. ✨ #InteriorDesign #CraftedElegance #HomeInspiration"
            />
            <SampleCard
              avatar="/images/home/samples/2.png"
              image="/images/home/samples/2.jfif"
              name="Ruul.io"
              comment="Unlock the power of collaboration with Ruul.io – your gateway to seamless teamwork and productivity. 💻 #RuulYourWorld #CollaborationRevolution #ProductivityMatters"
            />
            <SampleCard
              avatar="/images/home/samples/3.png"
              image="/images/home/samples/3.jfif"
              name="Earlz"
              comment="Elevate your tech game with Earlz.de – Discover cutting-edge solutions and redefine your digital experience. 🚀 #EarlzTechHub #InnovationUnleashed #TechSolutions"
            />
            <SampleCard
              avatar="/images/home/samples/4.png"
              image="/images/home/samples/4.jfif"
              name="Sembrar.Io"
              comment="Cultivate success with Sembrar.io – your growth partner in the digital landscape. 🌱 #SembrarGrowth #DigitalInnovation #HarvestingSuccess"
            />
          </div>
        </div>
        <div className="android:hidden ipad:flex flex-wrap items-stretch justify-center w-full gap-4 mt-6">
          <SampleCard
            avatar="/images/home/samples/5.png"
            image="/images/home/samples/5.jfif"
            name="Titan Ignite"
            comment="Elevate your brand, amplify your reach, and scale your impact. 🔥 #ScaleWithIgnite #BusinessGrowth #StrategicSuccesss"
          />
          <SampleCard
            avatar="/images/home/samples/6.png"
            image="/images/home/samples/6.jfif"
            name="The Hayden Digital"
            comment="Discover the digital edge with TheHaydenDigital.com, and embark on a journey of digital transformation. 🌐✨ #HaydenDigitalImpact #DigitalTransformation #CreativeStrategies"
          />
          <SampleCard
            avatar="/images/home/samples/7.png"
            image="/images/home/samples/7.jpg"
            name="Market Karma"
            comment="Boost your online presence with MarketKarma.com – navigate the digital landscape, build your brand, and conquer markets. 🚀 #MarketKarmaMagic #DigitalDominance #StrategicSuccess"
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
                Welcome to UniHusk – your destination for exceptional outdoor
                living! We&apos;re thrilled to have you on board and can&apos;t wait to help
                you create unforgettable outdoor spaces.
                <br />
                <br />
                To start your UniHusk journey, use code OUTDOOR15 for an exclusive
                15% discount on your next purchase.
                <br />
                <br />
                Thank you for choosing UniHusk – let&apos;s make your outdoor living
                exceptional!
                <br />
                <br />
                Best, UniHusk Team
              </div>
              <button className="mt-3 bg-black rounded-full px-6 py-2 text-white text-[10px] font-semibold">
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
                top-notch printing. 🎉 Exclusive Offer: Sign up today for a
                special discount on your first order. Because every moment
                deserves to be cherished!
                <br />
                <br />
                Dive into PhotoBohemia here: photobohemia.com
                <br />
                <br />
                Cheers to unforgettable experiences!
                <br />
                <br />
                Best,
                <br />
                Katie @ PhotoBohemia Team
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
                Welcome to Delos – where extraordinary experiences come to life!
                We are thrilled to have you as part of our community, and we can&apos;t
                wait to embark on this journey of discovery and innovation
                together.
                <br />
                <br />
                At Delos, we are dedicated to transforming the way you live, work,
                and play by providing cutting-edge solutions that elevate your
                everyday experiences.
                <br />
                <br />
                Thank you for joining us on this exciting journey. We look forward
                to being a part of your quest for exceptional living.
                <br />
                <br />
                Best Regards,
                <br />
                Kevin, Delos Customer Experience Team
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
