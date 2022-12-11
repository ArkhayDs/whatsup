import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function useMercurePublish() {
    return () => {
        return AxiosInstance({
            url: '/mercure-publish',
            method: 'get'
        })
    }
}