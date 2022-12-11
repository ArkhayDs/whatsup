import {useSelector} from "react-redux";

export default function useGetCurrentUserUsername(currentUser) {
    return JSON.parse(atob(currentUser.split('.')[1])).username
}