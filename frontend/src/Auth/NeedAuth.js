import {useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";

export default function NeedAuth(props) {
    let location = useLocation();
    // const storedUser = useSelector(store => store.SigninReducer);
    const storedUser = "hello"

    if (storedUser) {
        return props.children;
    } else {
        return <Navigate to='/login' state={{from: location}}/>
    }
}