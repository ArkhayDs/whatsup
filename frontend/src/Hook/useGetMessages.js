import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function useGetMessages() {
    const currentUser = useSelector(store => store.SigninReducer)

    return (topic) => {
        return AxiosInstance({
            url: `/chat/${topic}`,
            method: 'get',
            headers: {
                'Authorization': `Bearer ${currentUser}`
            }
        })
            .then(res => res.data)
    }
}