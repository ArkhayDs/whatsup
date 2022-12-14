import './chat.scss'
import './chat-dark.scss'
import '../style.scss'

import {MdOutlineArrowBackIosNew, MdSend} from 'react-icons/md';
import {NavLink, useNavigate} from "react-router-dom";
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
import usePersistMessage from "../../Hook/usePersistMessage";

export default function Chat() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getUserList = useGetUserList()
    const getMessages = useGetMessages()

    const sendMessage = useSendMessage()
    const persistMessage = usePersistMessage()

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
        let topic = getTopic(currentUserId, otherUser.id)
        let date = new Date()

        console.log('submit :',messages)
        setMessages(prev => [
            ...prev,
            {
                content: newMessage,
                createdAt: date,
                author: {
                    id: currentUserId,
                    username: currentUsername
                }
            }
        ])

        sendMessage(topic, newMessage, otherUser.id)
        persistMessage(topic, newMessage, date)
        setNewMessage('')
    }

    const handleMessage = (e) => {
        let data = JSON.parse(e.data)
        console.log('mercure :',messages)
        setMessages(prev => [
            ...prev,
            {
                content: data.content,
                createdAt: new Date(),
                author: {
                    id: data.author.id,
                    username: data.author.username
                }
            }
        ])
    }

    useEffect( () => {
        const url = new URL('http://localhost:9090/.well-known/mercure')
        url.searchParams.append('topic', 'https://example.com/chat')

        const eventSource = new EventSource(url, {withCredentials: true})
        eventSource.onmessage = handleMessage

        return () => {
            eventSource.close()
        }
    }, [])

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
                        setMessages([])
                    }
                })
        }
        setNewMessage('')
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
                                <p className="chat-num-messages">{messages.length >= 0 ? messages.length : "Aucun"} messages</p>
                            </header>
                            <div id="chat_message_scroll" className="chat-history">
                                <ChatMessages messages={messages} currentUserId={currentUserId}/>
                            </div>
                            <form className="chat-message">
                                <input className="input" role="textbox" contentEditable onChange={handleChange} value={newMessage}/>
                                <button type="submit" onClick={handleSubmit}><MdSend/></button>
                            </form>
                        </>
                        :
                        <div className="chat-nohistory">
                            <FaSmileBeam size={150} />
                            <h3>
                                Reprends une conversation via la liste ?? gauche <br/><br/>
                                ou lances-en une nouvelle depuis ta liste de contacts !
                            </h3>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}