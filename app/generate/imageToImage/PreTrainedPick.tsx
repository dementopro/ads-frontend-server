import { GeneImageContext } from '@/context/generate'
import { SUCCESS_CODE } from '@/data/constant'
import { PretrainItem, IGeneImageOption, IGeneImageResp } from '@/types/generate'
import { message } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

type PickImageProps = {
  item: PretrainItem
  isActive?: boolean
  setOption: () => void
  pickType?: keyof IGeneImageOption
}

const PickItem = ({ item, isActive, setOption, pickType }: PickImageProps) => {
  return (
    <>
      {
        pickType !== 'style'
          ?
          <div className='flex flex-col items-center gap-3 w-[150px]'>
            <div onClick={setOption} className={`${isActive ? 'border-primary-purple' : 'border-[#15161a]'} overflow-hidden cursor-pointer hover:opacity-90 border-2 w-[150px] h-[150px] relative rounded-lg bg-primary-gray`}>
              <Image src={`${process.env.NEXT_PUBLIC_IMG_URL}/${item.image_path}`} alt={item.name} fill className='object-cover' />
              <Image src={'/images/admin/img2img/checked.svg'} alt='portrait' width={24} height={24} className={`absolute right-2 top-2 ${isActive ? 'flex' : 'hidden'}`} />
            </div>
            <div title={item.name} className='max-w-[150px] truncate text-center inline'>
              {item.name}
            </div>
          </div>
          :
          <button
            onClick={setOption}
            className={`h-[44px] px-4 flex items-center justify-center   rounded-lg hover:text-white ${isActive ? 'bg-[#5F6368] text-white' : 'bg-[#35363A] text-primary-gray'}`}
          >
            {item.name}
          </button>
      }
    </>
  )
}

type OptionBtnProps = {
  onClick: () => void
  isActive: boolean
  isChecked: boolean
  isDisabled: boolean
  text: string
  step: number
}

const OptionBtn = ({ onClick, isActive, isChecked, isDisabled, text, step }: OptionBtnProps) => {
  return (
    <button
      onClick={() => {
        if (!isDisabled) {
          onClick()
        }
      }}
      className={`border-transparent ${isActive ? 'text-white rounded-t-lg bg-[#35363A] !border-primary-purple' : ''} ${isDisabled ? '' : ''} ${isChecked ? '!border-primary-purple' : ''} px-4 h-[44px] min-w-[160px] flex items-center justify-center gap-3 border-b-2`}
    >
      {
        isChecked ?
          <Image src={'/images/admin/img2img/checked.svg'} alt='checked' width={18} height={18} />
          :
          <span className={`flex items-center justify-center rounded-full border text-sm w-[18px] h-[18px] ${isActive ? 'text-primary-purple border-primary-purple' : ''}`}>{step}</span>
      }
      <span className={`truncate`}>{text}</span>
    </button>
  )
}


const PreTrainedPick = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter()
  const {
    preTrainedStep, updatePreTrainStep,
    preTrainedOption, updatePreTrainedOption,
    pretrainList,
    label, modeType,
    file, file_name, file_path, mask_file_name, mask_file_path,
    updateIsGenerating,
    updateGeneratedImage,
    updateReload,
    imageId
  } = useContext(GeneImageContext)

  function onGenerate() {
    switch (modeType) {
      case 'portrait':
        onGenerateImage()
        break;
      case 'product':
        onReplaceBackground()
        break;
      default:
        break;
    }
  }

  async function onReplaceBackground() {
    updateIsGenerating(true)
    try {
      const response = await fetch(`/fapi/generate_image/replace_pro_background_v2`, {
        method: 'POST',
        body: JSON.stringify({
          _id: imageId,
          img_path: file_path,
          file_name,
          background_style: preTrainedOption.background,
          back_ground_mask: file
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        const data: IGeneImageResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Generate image successfully!')
          const result = data.new_image.map(item => ({
            ...item,
            // img_path: `${process.env.NEXT_PUBLIC_IMG_URL}/${data.file_path}/${item.filename}`
            img_path: `data:image/png;base64, ${item.file}`
          }))
          updateGeneratedImage(result)
          updateReload()
          router.refresh()
        } else {
          messageApi.error(data.message || 'Something went wrong!')
        }
      } else {
        console.log('response', response)
        messageApi.error(response.statusText || 'Something went wrong!')
      }
    } catch (error) {
      messageApi.error('Something went wrong!')
      console.log('error', error)
    } finally {
      updateIsGenerating(false)
    }
  }

  async function onGenerateImage() {
    updateIsGenerating(true)
    try {
      const response = await fetch(`/fapi/generate_image/image_to_image`, {
        method: 'POST',
        body: JSON.stringify({
          segment_mask: [{ label }],
          file_name,
          file_path,
          mask_file_name,
          mask_file_path,
          face_mode: preTrainedOption.face,
          background_mode: preTrainedOption.background,
          style: preTrainedOption.style,
          mode_type: modeType,
          face_prompt: '',
          background_prompt: '',
          _id: imageId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        keepalive: true,
      })
      if (response.ok) {
        const data: IGeneImageResp = await response.json()
        if (data.status === SUCCESS_CODE) {
          messageApi.success('Generate image successfully!')
          const result = data.new_image.map(item => ({
            ...item,
            // img_path: `${process.env.NEXT_PUBLIC_IMG_URL}/${data.file_path}/${item.filename}`
            img_path: `data:image/png;base64, ${item.file}`
          }))
          updateGeneratedImage(result)
          updateReload()
          router.refresh()
        } else {
          messageApi.error(data.message || 'Something went wrong!')
        }
      } else {
        console.log('response', response)
        messageApi.error(response.statusText || 'Something went wrong!')
      }
    } catch (error) {
      messageApi.error('Something went wrong!')
      console.log('error', error)
    } finally {
      updateIsGenerating(false)
    }
  }



  return (
    <>
      {contextHolder}
      <div className='flex flex-col mt-10'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-wrap items-center text-primary-gray'>
            <OptionBtn
              onClick={() => updatePreTrainStep('background')}
              isActive={preTrainedStep === 'background'}
              isChecked={preTrainedOption.background !== ''}
              isDisabled={preTrainedOption.image === ''}
              text='Background'
              step={1}
            />
            {
              modeType === 'portrait' && (
                <>
                  <OptionBtn
                    onClick={() => updatePreTrainStep('face')}
                    isActive={preTrainedStep === 'face'}
                    isChecked={preTrainedOption.face !== ''}
                    isDisabled={preTrainedOption.image === ''}
                    text='Model faces'
                    step={2}
                  />
                  <OptionBtn
                    onClick={() => updatePreTrainStep('style')}
                    isActive={preTrainedStep === 'style'}
                    isChecked={preTrainedOption.style !== ''}
                    isDisabled={preTrainedOption.image === ''}
                    text='Style'
                    step={3}
                  />
                </>
              )
            }
          </div>
          <button
            onClick={onGenerate}
            disabled={
              modeType === 'portrait' ?
                Object.values(preTrainedOption).some(item => item === '') :
                preTrainedOption.background === ''
            }
            className={`bg-primary-purple hover:opacity-80 text-base flex items-center justify-center w-[150px] h-[44px] rounded-lg truncate ${(modeType === 'portrait' ?
              Object.values(preTrainedOption).some(item => item === '') :
              preTrainedOption.background === '') ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
          >
            Generate
          </button>
        </div>
      </div>
      <div className='flex flex-wrap gap-5 mt-8 relative'>
        {
          pretrainList[`${preTrainedStep}List`]
            ?.map((item, index) => (
              <PickItem
                pickType={preTrainedStep}
                item={item}
                key={index} isActive={item.name === preTrainedOption[preTrainedStep]}
                setOption={() => updatePreTrainedOption({ [preTrainedStep]: item.name })}
              />
            ))
        }
        {/* {
          preTrainedStep === 'image' &&
          <div className='w-full h-full z-10 rounded-lg bg-[#000000b5] absolute top-0 left-0 right-0 bottom-0' />
        } */}
      </div>
    </>
  )
}

export default PreTrainedPick
