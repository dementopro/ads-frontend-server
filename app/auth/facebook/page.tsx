'use client'
import { SUCCESS_CODE } from '@/data/constant'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AuthFacebook = () => {

  const router = useRouter()
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function sendCodeToBackend(code: string | null) {
    try {
      setLoading(true)
      if (!code) return false
      const response = await fetch(`/fapi/fb_callback_api?code=${code}`, {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
      })
      if (!response.ok) {
        return false
      }
      const data: IResponse = await response.json()
      return data.status === SUCCESS_CODE
    } catch (error) {
      return false
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loginWithFacebook()
  }, [])

  async function loginWithFacebook() {
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
          ? 'Facebook Auth success'
          : 'Facebook Auth failed'
      }
    </div>
  )
}

export default AuthFacebook
