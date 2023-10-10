import axios, { InternalAxiosRequestConfig } from 'axios';

import { getCookie } from '@/lib/cookies'

let axiosInstance = axios.create();

// axiosInstance.defaults.headers.common['Authorization'] = '';
axiosInstance.interceptors.request.use(async function (config: InternalAxiosRequestConfig<any>) {
    const token = await getCookie('jwt');
    if (token) {
        (config as any).headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }
    
    return config;
});

export default axiosInstance;