'use client'
import { SUCCESS_CODE } from '@/data/constant'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import axios from '@/lib/axios';

const AuthTikTok = () => {

  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function sendCodeToBackend(auth_code: string | null, code: string | null) {
    try {
      setLoading(true)
      if (!code || !auth_code) return false
      const response = await axios({
        url: `/fapi/tiktok_callback?auth_code=${auth_code}&code=${code}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      if (response.status !== 200) {
        return false
      }
      const data: IResponse = response.data()
      return data.status === SUCCESS_CODE
    } catch (error) {
      return false
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loginWithTikTok()
  }, [])

  async function loginWithTikTok() {
    const auth_code = new URLSearchParams(window.location.search).get('auth_code')
    const code = new URLSearchParams(window.location.search).get('code')
    const flag = await sendCodeToBackend(auth_code, code)
    setIsSuccess(flag)
    setTimeout(() => {
      router.push('/socialInsights')
    }, 1000)
  }


  return (
    <div>
      {loading
        ? 'Loading...'
        : isSuccess
          ? 'TikTok Auth success'
          : 'TikTok Auth failed'
      }
    </div>
  )
}

export default AuthTikTok
