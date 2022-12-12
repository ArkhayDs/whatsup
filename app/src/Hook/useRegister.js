import {useDispatch} from "react-redux";
import {AxiosInstance} from "../Axios/AxiosInstance";
import qs from 'qs';

export default function useRegister() {
    return (username, password, password2) => {
        return AxiosInstance({
            url: '/register',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                username: username,
                password: password,
                password2: password2
            })
        })
            .then(res => res.data)
            .catch(error => console.log(error))
    }
}