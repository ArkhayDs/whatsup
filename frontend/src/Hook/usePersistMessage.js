import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function usePersistMessage() {
    const currentUser = useSelector(store => store.SigninReducer)

    return function (topic, content) {
        return AxiosInstance({
            url: `/chat/persist-message`,
            method: "POST",
            headers: {
                "Authorization": `Bearer ${currentUser}`
            },
            data: new URLSearchParams({
                topic: topic,
                content: content
            })
        })
            .then(res => res.data)
    }
}