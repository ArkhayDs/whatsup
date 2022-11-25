import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import useGetCookies from "../Hook/useGetCookies";

export default function NeedAuth(props) {
    const cookies = useGetCookies()
    let location = useLocation();
    const currentUser = useSelector(store => store.SigninReducer);
    if (currentUser || Object.keys(cookies).includes('WhatsUpJWT')) {
        return props.children;
    } else {
        return <Navigate to='/authentification' state={{from: location}}/>
    }
}