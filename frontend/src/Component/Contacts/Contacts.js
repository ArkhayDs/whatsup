import useGetUserList from "../../Hook/useGetUserList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import '../style.scss'
import './contacts.scss'
import {NavLink} from "react-router-dom";
import useBackendPing from "../../Hook/useBackendPing";

export default function Contacts() {
    const getUserList = useGetUserList()
    const currentUser = useSelector(store => store.SigninReducer)
    const dark = useSelector(store => store.DarkModeReducer)

    const [userList, setUserList] = useState(false)

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const userId = e.target[0].value;
    //     backendPing(userId).then(data => console.log(data))
    // }

    useEffect(() => {
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })
        }

        // const url = new URL('http://localhost:9090/.well-known/mercure')
        // url.searchParams.append('topic','https://example.com/ping')
        //
        // const eventSource = new EventSource(url,{withCredentials:true})
        // eventSource.onmessage = handleMessage
        //
        // return () => {
        //     eventSource.close()
        // }

    }, [currentUser])

    return (
        <section className={dark ? "contacts_container contacts_container-dark" : "contacts_container"}>
            <h1>Contacts : </h1>
            {userList ?
                <div className="contact_button_container">
                    {userList.map((user) => {
                        return (
                            <button className="contact_button" key={user.id} value={user.id}>
                                <NavLink to="/conversations">
                                    <div className="zigzag-timeline__item">
                                            <span className="zigzag-timeline__milestone"> </span>
                                        <br/>
                                        <p>{user.username}</p>
                                        <br/>
                                    </div>
                                </NavLink>
                            </button>
                        )
                    })}
                </div>
                :
                <span className="spinner"> </span>
            }
        </section>
    )
}