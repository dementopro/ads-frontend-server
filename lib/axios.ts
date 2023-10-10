import axios, { InternalAxiosRequestConfig } from 'axios';
import { getCookie } from './cookies';

let axiosInstance = axios.create();

// axiosInstance.defaults.headers.common['Authorization'] = '';
axiosInstance.interceptors.request.use(async function (config: InternalAxiosRequestConfig<any>) {
    let jwtToken: string | null;
    if (typeof (localStorage) === "undefined") {
        jwtToken = await getCookie('jwtToken') as string;
    }
    else jwtToken = localStorage.getItem('Authorization');

    if (jwtToken) {
        (config as any).headers = {
            ...config.headers,
            Authorization: `Bearer ${jwtToken}`
        }
    }
    
    return config;
});

export default axiosInstance;