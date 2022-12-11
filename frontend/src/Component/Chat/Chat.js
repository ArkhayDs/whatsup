import './chat.scss'
import './chat-dark.scss'
import '../style.scss'

import {MdOutlineArrowBackIosNew, MdSend} from 'react-icons/md';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import useGetUserList from "../../Hook/useGetUserList";
import useGetMessages from "../../Hook/useGetMessages";
import useGetCurrentUserId from "../../Hook/useGetCurrentUserId";
import useGetCurrentUserUsername from "../../Hook/useGetCurrentUserUsername";
import useGetTopicFromUsers from "../../Hook/useGetTopicFromUsers";
import {ChatAction} from "../../Action/ChatAction";
import ChatMessages from "./SousComonent/ChatMessage";
import UserList from "./SousComonent/UserList";

export default function Chat() {
    const dispatch = useDispatch()

    const getUserList = useGetUserList()
    const getMessages = useGetMessages()

    const currentUserId = useGetCurrentUserId()
    const currentUserUsername = useGetCurrentUserUsername()

    const getTopic = useGetTopicFromUsers()

    const currentUser = useSelector(store => store.SigninReducer)
    const otherUser = useSelector(store => store.ChatReducer)
    const dark = useSelector(store => store.DarkModeReducer)

    const [userList, setUserList] = useState(false)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    useEffect(() => {
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })
            console.log(userList)
            getMessages(getTopic(currentUserId, otherUser.id))
                .then(data => {
                    if (data.chat !== null) {
                        setMessages(data.chat.messages)
                    } else {
                        console.log('ce chat est vide')
                    }
                })
        }
    }, [otherUser])

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
                        <UserList userList={userList} dispatch={dispatch}/>
                    </div>
                </div>
                <div className="chat">
                    {otherUser ?
                        <>
                            <header className="chat-header">
                                <h2 className="chat-with">Discussion avec {otherUser.username}</h2>
                                <p className="chat-num-messages">{messages.length} messages</p>
                            </header>
                            <div className="chat-history">
                                <ChatMessages messages={messages} currentUserId={currentUserId}/>
                            </div>
                            <footer className="chat-message">
                                <span className="input" role="textbox" contentEditable/>
                                <button><MdSend/></button>
                            </footer>
                        </>
                        :
                        <div className="chat-history">
                            <p>
                                Reprends une conversation via la liste à gauche ou lances-en une nouvelle depuis ta liste
                                de contacts !
                            </p>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}