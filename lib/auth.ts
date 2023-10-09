// 'use server'
import { cookies } from 'next/headers'
import { setCookie } from './cookie'
import { getCookie } from './cookies'

export async function isUserLogin() {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('Authorization') === 'true'
  // if (await getCookie ('session') == 'success') return true
  // return false
}

export async function onLogin() {
  localStorage.setItem('Authorization', 'true')
  setCookie({
    session: 'success'
  })
}

export async function onLogout() {
  localStorage.removeItem('Authorization')
  // return cookies().delete('session')
  return setCookie ({session: null})
}
