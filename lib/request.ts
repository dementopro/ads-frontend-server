type Method = 'GET' | 'POST'

export async function request(url: string, method: Method, data: Record<string, any> = {}) {
  try {
    url = process.env.API_BASE_URL + url
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return response
  } catch (error) {
    throw new Error(error as any)
  }
}
