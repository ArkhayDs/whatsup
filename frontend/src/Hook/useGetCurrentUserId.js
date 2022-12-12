import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export default function useGetCurrentUserId(currentUser) {
    return JSON.parse(atob(currentUser.split('.')[1])).id
}