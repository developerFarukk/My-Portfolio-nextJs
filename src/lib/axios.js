

"use server"
import axios from "axios";


const app_axios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_API,
    withCredentials: true,
});

app_axios.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default app_axios;