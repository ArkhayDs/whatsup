import {useSelector} from "react-redux";

export default function useGetCurrentUserUsername() {
    const currentUser = useSelector(store => store.SigninReducer)
    return JSON.parse(atob(currentUser.split('.')[1])).username
}