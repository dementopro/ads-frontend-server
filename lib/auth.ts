// 'use server'
import jwt_decode from 'jwt-decode';
import { cookies } from 'next/headers'
import { setCookie } from './cookie'
import { getCookie } from './cookies'

export function isUserLogin() {
  if (typeof window === 'undefined') return false
  
  const jwtToken: string | null = localStorage.getItem('Authorization');
  if (!jwtToken) return false;

  try {
    const decoded = jwt_decode(jwtToken);
    return decoded;
  } catch (_err) {
    return false;
  }
}

export async function onLogin(token: string) {
  localStorage.setItem('Authorization', token);
  setCookie({
    jwtToken: token
  })
}

export async function onLogout() {
  localStorage.removeItem('Authorization')
  // return cookies().delete('session')
  return setCookie ({jwtToken: null})
}
