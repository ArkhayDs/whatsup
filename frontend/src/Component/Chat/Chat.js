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
import useGetTopicFromUsers from "../../Hook/useGetTopicFromUsers";
import ChatMessages from "./SousComonent/ChatMessage";
import UserList from "./SousComonent/UserList";
import {FaSmileBeam} from "react-icons/fa";
import useGetCurrentUserUsername from "../../Hook/useGetCurrentUserUsername";
import useSendMessage from "../../Hook/useSendMessage";

export default function Chat() {
    const dispatch = useDispatch()

    const getUserList = useGetUserList()
    const getMessages = useGetMessages()
    const sendMessage = useSendMessage()

    const getTopic = useGetTopicFromUsers()

    const currentUser = useSelector(store => store.SigninReducer)
    const otherUser = useSelector(store => store.ChatReducer)
    const dark = useSelector(store => store.DarkModeReducer)

    const currentUserId = useGetCurrentUserId(currentUser)
    const currentUsername = useGetCurrentUserUsername(currentUser)

    const [userList, setUserList] = useState(false)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    const chat_message_scroll = document.getElementById("chat_message_scroll");


    const handleSubmit = (e) => {
        e.preventDefault()
        setMessages(prev => [
            ...prev,
            {
                content: newMessage,
                createdAt: new Date(),
                author: {
                    id: currentUserId,
                    username: currentUsername
                }
            }
        ])
        sendMessage(getTopic(currentUserId, otherUser.id),newMessage)
        setNewMessage('')
    }

    useEffect(() => {
        if (chat_message_scroll) {
            chat_message_scroll.scrollTop = chat_message_scroll.scrollHeight
        }
    }, [messages])


    useEffect(() => {
        if (chat_message_scroll) {
            chat_message_scroll.scrollTop = chat_message_scroll.scrollHeight
        }
        
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })

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
                            <div id="chat_message_scroll" className="chat-history">
                                <ChatMessages messages={messages} currentUserId={currentUserId}/>
                            </div>
                            <footer className="chat-message">
                                <input className="input" role="textbox" contentEditable onChange={handleChange}/>
                                <button onClick={handleSubmit}><MdSend/></button>
                            </footer>
                        </>
                        :
                        <div className="chat-nohistory">
                            <FaSmileBeam size={150} />
                            <h3>
                                Reprends une conversation via la liste à gauche <br/><br/>
                                ou lances-en une nouvelle depuis ta liste de contacts !
                            </h3>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}