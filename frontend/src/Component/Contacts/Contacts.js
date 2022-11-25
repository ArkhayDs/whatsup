import useGetUserList from "../../Hook/useGetUserList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function Contacts() {
    const getUserList = useGetUserList()
    const currentUser = useSelector(store => store.SigninReducer)

    const [userList, setUserList] = useState([])

    useEffect(() => {
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })
        }
    },[currentUser])

    return (
        <div>
            <h1>Contacts</h1>
            {userList.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.username}</p>
                    </div>
                )
            })}
        </div>
    )
}