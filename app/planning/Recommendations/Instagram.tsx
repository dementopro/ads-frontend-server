import React, { useEffect, useState } from 'react';
import styles from '@/./app/planning/planning.module.css';
import { useRouter } from 'next/navigation';
import { useSeoAnalyzerContext } from '@/context/seo';
import { BiEdit, BiInfoCircle } from 'react-icons/bi';
import Image from 'next/image';
import { Dropdown } from 'antd';

const uploadMenuItems = [
  {
    label: 'Upload Media',
    key: 1
  },
  {
    label: 'Upload Image',
    key: 2
  },
  {
    label: 'Dropbox',
    key: 3
  },
  {
    label: 'Google Drive',
    key: 4
  }
]

export type ImageType = {
  url: string;
  data: File;
}

const InstagramRecommendation = () => {
  const { emailInstruction, socialMedia } = useSeoAnalyzerContext();
  const router = useRouter();
  const [images, setImages] = useState<ImageType[]>([]);

  return (
    <div className={`${styles.onPageDiv} overflow-x-auto`}>
      <div className={`${styles.mainDiv} w-full !p-0`}>
        <div className="flex items-center justify-between w-full px-6 py-3 border rounded-t-lg bg-background-300 border-white/20">
          <div className="flex flex-row gap-x-[8px]">
            <p className="w-[16px] h-[16px]">⭐</p>
            <p className="w-full self-stretch text-white text-[15px] h-[18px] not-italic font-medium leading-[normal]">
              Recommendations
            </p>
          </div>
          <button className="px-5 py-3 not-italic font-semibold leading-5 text-center text-white rounded-lg bg-primary-purple" onClick={() => {
            router.push(`/contentType/socialMedia?type=0`);
          }}>
            <span className="text-[13.5px]">View</span>
          </button>
        </div>
        <div className='w-full px-6 py-3 border rounded-b-lg border-white/20'>
          <div className='flex items-center gap-2 p-2 mt-2 rounded-lg bg-background-300'>
            <BiInfoCircle className='w-4 h-4' />
            <p className="text-[15px]">
              Based on your uploaded media assets, we have generated optimized media content and captions for Instagram
            </p>
          </div>
          <h3 className='mt-4 font-medium text-white text-normal'>
            Attached Media
          </h3>
          <div className='block w-full mt-4'>
            <div className="flex flex-wrap gap-4">
              {
                socialMedia.map((media, i) => (
                  <div>
                    <Image
                      className='overflow-hidden rounded-lg !w-[192px] !h-[160px] object-cover object-center'
                      src={process.env.NEXT_PUBLIC_API_URL + media.img_url}
                      width={192}
                      height={160}
                      alt={media.img_url}
                    />
                    <label className='flex items-center justify-center gap-3 mt-2 cursor-pointer hover:underline'>
                      <input type="file" hidden onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                          const file = e.target.files[0] as File;
                          const newImages: Array<ImageType> = images.map((val, idx) => idx === i ? {url: URL.createObjectURL(file), data: file} : val);[
                            ...images,
                            {
                              url: URL.createObjectURL(file),
                              data: file
                            }
                          ]
                          setImages(newImages);
                        }
                      }} />
                      <BiEdit className='w-4 h-4' />
                      <span className='text-sm'>Edit</span>
                    </label>
                  </div>
                ))
              }
              <Dropdown menu={{ items: uploadMenuItems, theme: "dark" }} trigger={['click', 'contextMenu']}>
                <label className='w-[192px] h-[160px] bg-[#212228] border-2 border-dotted border-background-300 flex justify-center items-center rounded-lg hover:brightness-75'>
                  {/* <input type="file" hidden onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const file = e.target.files[0] as File;
                      const newImages: Array<ImageType> = [
                        ...images,
                        {
                          url: URL.createObjectURL(file),
                          data: file
                        }
                      ]
                      setImages(newImages);
                    }
                  }} /> */}
                  <span className='text-xl'>+</span>
                </label>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramRecommendation;
