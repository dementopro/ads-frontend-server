import Empty from '@/components/Empty'
import { SUCCESS_CODE } from '@/data/constant'
import { IGeneImage, IGeneImageHistory } from '@/types/generate'
import { headers } from 'next/headers'
import { Image } from 'antd';
import axios from '@/lib/axios';

async function getImageList(): Promise<IGeneImage[]> {
  const cookie = headers().get('cookie') || ''
  const response = await axios({
    url: `${process.env.API_BASE_URL}/get_image_list_api`,
    method: 'GET',
    headers: {
      cookie
    },
  })
  if (response.status !== 200) {
    throw new Error('Failed to fetch data')
  }
  const data: IGeneImageHistory = response.data
  if (data.status === SUCCESS_CODE) {
    const filePath = data.file_path
    const imageList = data.image_list.map((image) => ({
      ...image,
      filename: `${process.env.NEXT_PUBLIC_IMG_URL}${filePath}/${image.filename}`
    }))
    return imageList
  } else {
    console.log('data', data)
    return []
  }
}


const HistoricalGenerations = async () => {

  const imageList = await getImageList()

  return (
    <>
      <h2 className='text-white font-medium text-xl my-6'>
        Historical Generations({imageList.length})
      </h2>
      <div className='grid grid-flow-row grid-cols-1 md:grid-cols-3 ipad:grid-cols-4 2xl:grid-cols-5 gap-5'>
        {
          !imageList.length
            ? <Empty />
            : imageList.map((image, index) => (
              <div key={index} className='flex items-center gap-3 max-md:max-w-[260px] flex-col p-4 bg-[#1E1F22] rounded-lg border border-[#3A3A3A]'>
                <Image alt='generated image' sizes='contain' src={'/_next/image?url=' + image.filename + '&w=1080&q=75'} className='w-full h-full object-contain' rootClassName='w-full h-full' />
                <div className='flex flex-col gap-3'>
                  <div title={image.prompt} className='text-base line-clamp-1'>{image.prompt}</div>
                  <div title={image.description} className='text-xs text-primary-gray line-clamp-2'>{image.description}</div>
                </div>
              </div>
            ))
        }
      </div>
    </>
  )
}

export default HistoricalGenerations
