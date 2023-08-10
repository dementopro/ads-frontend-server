'use client'
import { SUCCESS_CODE } from '@/data/constant'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const AuthTikTok = () => {

    const router = useRouter()
    const [isSuccess, setIsSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    async function sendCodeToBackend(auth_code: string | null ,code: string | null) {
        try {
            setLoading(true)
            if (!code) return false
            const response = await fetch(`/fapi/tiktok_callback?auth_code=${auth_code}&code=${code}`, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            console.log(response)
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
        loginWithTikTok()
    }, [])

    async function loginWithTikTok() {
        const auth_code = new URLSearchParams(window.location.search).get('auth_code')
        const code = new URLSearchParams(window.location.search).get('code')
        const flag = await sendCodeToBackend(auth_code,code)
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
