import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'http://localhost:9999/',
    withCredentials: true
})