import { SUCCESS_CODE } from "@/data/constant"
import { IGeneImageHistoryResp, IPretrainListResp, NewImage, PretrainItem } from "@/types/generate"
import { headers } from "next/headers"

import axios from '@/lib/axios';

export async function getPretrainFaceList() {
  const cookie = headers().get('cookie') || ''
  const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_face`, {
    method: 'GET',
    headers: {
      cookie
    }
  });
  if (response.status !== 200) {
    throw new Error('Something went wrong')
  }
  const data: IPretrainListResp = await response.data
  if (data.status === SUCCESS_CODE) {
    return data.data
  } else {
    return []
  }
}

export async function getPretrainBackgroundList() {
  const cookie = headers().get('cookie') || ''
  const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_background`, {
    method: 'GET',
    headers: {
      cookie
    }
  })
  if (response.status !== 200) {
    throw new Error('Something went wrong')
  }
  const data: IPretrainListResp = await response.data
  if (data.status === SUCCESS_CODE) {
    return data.data
  } else {
    return []
  }
}

export async function getPretrainStyleList(): Promise<PretrainItem[]> {
  const cookie = headers().get('cookie') || ''
  const response = await axios(`${process.env.NEXT_PUBLIC_API_URL}/generate_image/get_pretrain_style`, {
    method: 'GET',
    headers: {
      cookie
    }
  })
  if (response.status !== 200) {
    throw new Error('Something went wrong')
  }
  const data = await response.data
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
