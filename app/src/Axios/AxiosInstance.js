import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL: 'http://192.168.156.113:9999/',
    withCredentials: true
})