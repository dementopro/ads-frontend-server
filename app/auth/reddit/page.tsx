'use client'
import { SUCCESS_CODE } from '@/data/constant'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import axios from '@/lib/axios';

const AuthReddit = () => {

  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function sendCodeToBackend(code: string | null) {
    try {
      setLoading(true)
      if (!code) return false
      const response = await axios({
        url: `/fapi/reddit_callback?code=${code}`,
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      if (response.status !== 200){
        return false
      }
      const data: IResponse = response.data
      return data.status === SUCCESS_CODE
    } catch (error) {
      return false
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loginWithReddit()
  }, [])

  async function loginWithReddit() {
    const code = new URLSearchParams(window.location.search).get('code')
    const flag = await sendCodeToBackend(code)
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
          ? 'Reddit Auth success'
          : 'Reddit Auth failed'
      }
    </div>
  )
}

export default AuthReddit
