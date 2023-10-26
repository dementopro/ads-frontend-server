'use client'
import React from 'react';
import PrimaryButton from '@/components/PrimaryButton'
import { FiCheck, FiX } from 'react-icons/fi';


const SimplifyAds = () => {
    return (
        <div className='android:my-[32px] ipad:my-[60px] bg-black flex-col justify-center items-center gap-[32px] inline-flex'>
            <div className='w-full text-center text-white android:text-[20px] ipadmini:text-[20px] ipad:text-[34px] desktop:text-[42px] font-bold font-open-sans'>
                Simplify your Ads Management
            </div>
            <div className="w-full pb-[16px] px-[16px] overflow-x-auto android:justify-center ipad:justify-center inline-flex">
                <div className="inline-flex flex-col android:w-[550px] ipadmini:w-[600px] ipad:w-[862px] desktop:w-[932px] py-[32px] android:px-[30px] ipad:px-[100px] relative bg-[#27252D] android:border-2 ipadmini:border-3 ipad:border-4 border-violet-500 border-opacity-60 rounded-[25px] shadow flex-col justify-center items-center android:gap-[16px] ipad:gap-[32px]">
                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full text-center text-[#A09BAE] android:text-[10px] ipadmini:text-[13px] ipad:text-[16px] desktop:text-[16px] font-medium">
                            Without AdsGency AI
                        </div>
                        <div className="w-full text-center text-white android:text-[10px] ipadmini:text-[13px] ipad:text-[16px] desktop:text-[16px] font-medium">
                            With AdsGency AI
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <img className="w-full overflow-hidden android:h-[140px] ipadmini:h-[150px] ipad:h-[165px] desktop:h-[165px] object-cover relative android:rounded-[10px] ipad:rounded-[25px]" src="/images/home/simplify/image-1.jpeg" />
                        <img className="w-full overflow-hidden android:h-[140px] ipadmini:h-[150px] ipad:h-[165px] desktop:h-[165px] object-cover relative android:rounded-[10px] ipad:rounded-[25px]" src="/images/home/simplify/image-2.png" />
                    </div>
                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full justify-end items-center gap-[10px] inline-flex">
                            <div className="flex-grow-0 android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular text-right">
                                Training and Hiring Markets
                            </div>
                            <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#4E4A5B] rounded-full">
                                <FiX
                                    className='cursor-pointer text-[#A09BAE] w-full h-full'
                                />
                            </div>
                        </div>
                        <div className="w-full justify-start items-center gap-[15px] inline-flex">
                            <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#7D55FA] rounded-full">
                                <FiCheck
                                    className='cursor-pointer text-white w-full h-full'
                                />
                            </div>
                            <div className="flex-grow-0 android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                                Automated Workflows & Real time performance
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full justify-end items-center gap-[10px] inline-flex">
                            <div className="flex-grow-0 android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular text-right">
                                Complex Coding & High Maintenance
                            </div>
                            <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#4E4A5B] rounded-full">
                                <FiX
                                    className='cursor-pointer text-[#A09BAE] w-full h-full'
                                />
                            </div>
                        </div>
                        <div className="w-full justify-start items-center gap-[15px] inline-flex">
                            <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#7D55FA] rounded-full">
                                <FiCheck
                                    className='cursor-pointer text-white w-full h-full'
                                />
                            </div>
                            <div className="flex-grow-0 android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                                Seamless Integration & Low Maintenance
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-row justify-center items-center android:gap-[20px] ipadmini:gap-[30px] ipad:gap-[80px]">
                        <div className="w-full justify-end items-center gap-[15px] inline-flex">
                            <div className="flex-grow-0 android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular text-right">
                                Time consuming update cycles
                            </div>
                            <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#4E4A5B] rounded-full">
                                <FiX
                                    className='cursor-pointer text-[#A09BAE] w-full h-full'
                                />
                            </div>
                        </div>
                        <div className="w-full justify-start items-center gap-[15px] inline-flex">
                            <div className="flex-shrink-0 android:p-[3px] ipadmini:p-[5px] ipad:p-[7px] android:w-[26px] ipadmini:w-[32px] ipad:w-[40px] h-auto relative bg-[#7D55FA] rounded-full">
                                <FiCheck
                                    className='cursor-pointer text-white w-full h-full'
                                />
                            </div>
                            <div className="flex-grow-0 android:text-[12px] ipadmini:text-[14px] ipad:text-[16px] desktop:text-[18px] font-regular">
                                ML Model Retraining & Update
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PrimaryButton target="_blank" href="/requestDemo" text="Request Demo" />
        </div >
    )
}

export default SimplifyAds
