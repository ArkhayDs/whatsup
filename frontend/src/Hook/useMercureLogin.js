import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function useMercureLogin() {
    return () => {
        return AxiosInstance({
            url: '/mercure-login',
            method: 'get'
        })
    }
}