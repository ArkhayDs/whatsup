import {AxiosInstance} from "../Axios/AxiosInstance";

export default function useLogin() {
    return (username, password) => {
        return AxiosInstance({
            url: '/login',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                username: username,
                password: password
            })
        })
            .then(res => res.data)
    }
}