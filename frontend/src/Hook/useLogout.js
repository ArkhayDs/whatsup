import {useDispatch} from "react-redux";
import {LogoutAction} from "../Action/LoginAction";

export default function useLogout() {
    const dispatch = useDispatch()

    return function() {
        document.cookie = "WhatsUpJWT=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "mercureAuthorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        dispatch(LogoutAction())
    }
}