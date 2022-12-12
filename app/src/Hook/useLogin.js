import {AxiosInstance} from "../Axios/AxiosInstance";
import qs from 'qs';

export default function useLogin() {
    return (username, password) => {
        return AxiosInstance({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
            .catch(error => console.log(error))
    }
}