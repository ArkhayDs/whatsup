import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function useGetUserList() {
    const currentUser = useSelector(store => store.SigninReducer)

    return () => {
        return AxiosInstance({
            url: '/',
            method: 'get',
            headers: {
                'Authorization': `Bearer ${currentUser}`
            }
        })
            .then(res => res.data)
    }
}