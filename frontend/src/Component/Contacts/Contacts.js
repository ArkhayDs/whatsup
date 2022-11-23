import useGetUserList from "../../Hook/useGetUserList";
import {useEffect, useState} from "react";

export default function Contacts() {
    const getUserList = useGetUserList()

    const [userList, setUserList] = useState([])

    useEffect(() => {
        getUserList().then(data => {
            setUserList(data.users)
        })
    },[])

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