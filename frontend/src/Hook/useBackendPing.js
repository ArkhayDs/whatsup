import {AxiosInstance} from "../Axios/AxiosInstance";

export default function useBackendPing() {
    return function (userId) {
        return AxiosInstance({
            url: `/ping/${userId}`,
            method: 'POST'
        })
            .then(data => data.data.message)
    }
}