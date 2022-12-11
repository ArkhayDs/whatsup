import './chat.scss'
import './chat-dark.scss'

import {MdOutlineArrowBackIosNew, MdSend} from 'react-icons/md';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useGetUserList from "../../Hook/useGetUserList";

export default function Chat() {
    const getUserList = useGetUserList()
    const currentUser = useSelector(store => store.SigninReducer)
    const dark = useSelector(store => store.DarkModeReducer)

    const [userList, setUserList] = useState(false)

    useEffect(() => {
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })
        }
    }, [currentUser])

    return (
        <div className={dark ? 'fond-black' : ''}>
            <section className={dark ? 'chatContainer chatContainer-dark' : 'chatContainer'}>
                <div className="contacts">
                    <header className="contact-header">
                        <NavLink className="contact-header-button" to="/">
                            <MdOutlineArrowBackIosNew/>
                            <p>Retour</p>
                        </NavLink>
                    </header>
                    <div className="contact-view">
                            {userList ?
                                <ul>
                                    {userList.map((user) => {
                                        return (
                                            <li key={user.id}>
                                                <h3 className="chat-with">{user.username}</h3>
                                                <p className="chat-num-messages">Dernier message</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                                :
                                <p>coucou</p>
                            }
                    </div>
                </div>
                <div className="chat">
                    <header className="chat-header">
                        <h2 className="chat-with">Chat with Vincent Porter</h2>
                        <p className="chat-num-messages">already 1 902 messages</p>
                    </header>
                    <div className="chat-history">
                        <ul>
                            <li className="my-message">
                                <div className="message-data">
                                    <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                                    <span className="message-data-name">Olia</span><i className="fa fa-circle me"> </i>
                                </div>
                                <div className="message message-text">
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                </div>
                            </li>
                            <li className=" other-message">
                                <div className="message-data">
                                    <span className="message-data-name">Vincent</span>
                                    <span className="message-data-time">10:20 AM, Today</span>
                                </div>
                                <div className="message message-text">
                                    Actually everything was fine. I'm very excited to show this to our team.
                                </div>
                            </li>
                        </ul>
                    </div>
                    <footer className="chat-message">
                        <span className="input" role="textbox" contentEditable/>
                        <button><MdSend/></button>
                    </footer>
                </div>
            </section>
        </div>
    )
}