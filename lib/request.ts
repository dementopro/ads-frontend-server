import axios from '@/lib/axios';

type Method = 'GET' | 'POST'

export async function request(url: string, method: Method, data: Record<string, any> = {}, headers = {}) {
  try {
    url = process.env.API_BASE_URL + url
    // TODO: change to use application/json
    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key])
    }
    const response = await axios({
      url,
      method,
      data: formData,
      headers,
    })
    return response
  } catch (error) {
    console.log('error', error)
    throw new Error(error as any)
  }
}

export async function requestJson(url: string, method: Method, data: Record<string, any> = {}, headers = {}) {
  try {
    url = process.env.API_BASE_URL + url
    const response = await axios({
      url,
      method,
      data: JSON.stringify(data),
      headers,
    })
    return response
  } catch (error) {
    console.log('error', error)
    throw new Error(error as any)
  }
}
