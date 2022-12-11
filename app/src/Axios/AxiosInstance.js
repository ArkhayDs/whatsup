import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'http://192.168.1.102:9999/',
    withCredentials: true
})