import axios, { InternalAxiosRequestConfig } from 'axios';

let axiosInstance = axios.create();

// axiosInstance.defaults.headers.common['Authorization'] = '';
axiosInstance.interceptors.request.use(async function (config: InternalAxiosRequestConfig<any>) {
    const jwtToken: string | null = localStorage.getItem('Authorization');
    if (jwtToken) {
        (config as any).headers = {
            ...config.headers,
            Authorization: `Bearer ${jwtToken}`
        }
    }
    
    return config;
});

export default axiosInstance;