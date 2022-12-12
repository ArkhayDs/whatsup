import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function useGetUserList() {
    const currentUser = useSelector(store => store.SigninReducer)
    console.log(currentUser)

    return () => {
        return AxiosInstance({
            url: '/',
            method: 'get',
            headers: {
                'Authorization': `Bearer ${currentUser}`
            }
        })
            .then(res => res.data)
            .catch(error => console.log(error.request))
    }
}