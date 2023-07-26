import { SUCCESS_CODE } from "@/data/constant"
import { IGeneImageHistoryResp, IPretrainListResp, NewImage, PretrainItem } from "@/types/generate"
import { headers } from "next/headers"

export async function getPretrainFaceList() {
  const cookie = headers().get('cookie') || ''
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_face`, {
    method: 'GET',
    headers: {
      cookie
    }
  })
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  const data: IPretrainListResp = await response.json()
  if (data.status === SUCCESS_CODE) {
    return data.data
  } else {
    return []
  }
}

export async function getPretrainBackgroundList() {
  const cookie = headers().get('cookie') || ''
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_background`, {
    method: 'GET',
    headers: {
      cookie
    }
  })
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  const data: IPretrainListResp = await response.json()
  if (data.status === SUCCESS_CODE) {
    return data.data
  } else {
    return []
  }
}

export async function getPretrainStyleList(): Promise<PretrainItem[]> {
  const cookie = headers().get('cookie') || ''
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_style`, {
    method: 'GET',
    headers: {
      cookie
    }
  })
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  const data = await response.json()
  if (data.status === SUCCESS_CODE) {
    return data.data.map((item: string) => {
      return {
        name: item,
        image_path: '',
        lora: '',
        prompt: ''
      }
    })
  } else {
    return []
  }
}


export async function getGenerateImageHistoryList() {
  const cookie = headers().get('cookie') || ''
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/check_task?limit=7`, {
    method: 'GET',
    headers: {
      cookie,
    },
  })
  if (!response.ok) {
    throw new Error('Something went wrong')
  }
  const data: IGeneImageHistoryResp = await response.json()
  if (data.status === SUCCESS_CODE) {
    const imageList = data.image_data?.map(item => ({
      ...item,
      img_path: `${process.env.NEXT_PUBLIC_IMG_URL}/${item.img_path}/${item.filename}`,
    })) || []
    return imageList as NewImage[]
  } else {
    return []
  }
}
