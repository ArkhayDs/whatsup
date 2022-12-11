import {AxiosInstance} from "../Axios/AxiosInstance";

export default function useRegister() {
    return (username, password, password2) => {
        return AxiosInstance({
            url: '/register',
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: new URLSearchParams({
                username: username,
                password: password,
                password2: password2
            })
        })
            .then(res => res.data)
    }
}