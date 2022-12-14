import {AxiosInstance} from "../Axios/AxiosInstance";
import {useSelector} from "react-redux";

export default function useSendMessage() {
    const currentUser = useSelector(store => store.SigninReducer)

    return function (topic, content, otheruserId) {
        return AxiosInstance({
            url: `/chat/send-message/${otheruserId}`,
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