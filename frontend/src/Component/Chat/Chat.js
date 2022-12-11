import './chat.scss'
import './chat-dark.scss'

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

export default function Chat() {
    const dispatch = useDispatch()
    const getUserList = useGetUserList()
    const getMessages = useGetMessages()
    const currentUserId = useGetCurrentUserId()
    const getTopic = useGetTopicFromUsers()

    const currentUser = useSelector(store => store.SigninReducer)
    const otherUser = useSelector(store => store.ChatReducer)
    const dark = useSelector(store => store.DarkModeReducer)

    const [userList, setUserList] = useState(false)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    const handleChange = (e) => {
        setNewMessage(e.target.value)
    }

    useEffect(() => {
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })
            console.log(userList)
            getMessages(getTopic(currentUserId,otherUser.id))
                .then(data => {
                    if (data.chat !== null ) {
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
                            {userList ?
                                <ul>
                                    {userList.map((user) => {
                                        return (
                                            <li key={user.id}>
                                                <a onClick={ () => { dispatch(ChatAction(user.username,user.id)) }}>
                                                    <h3 className="chat-with">{user.username}</h3>
                                                    <p className="chat-num-messages">Dernier message</p>
                                                </a>
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
                    {otherUser ?
                        <>
                            <header className="chat-header">
                                <h2 className="chat-with">Discussion avec {otherUser.username}</h2>
                                <p className="chat-num-messages">{messages.length} messages</p>
                            </header>
                            <div className="chat-history">
                                {messages ?
                                    <ul>
                                        {messages.map((message) => {
                                            let datetime = new Date(message.createdAt)
                                            let date = datetime.getHours() + ":" + datetime.getMinutes() + " - " + datetime.toLocaleDateString('fr')

                                            if (currentUserId !== message.author.id) {
                                                return (
                                                    <li className=" other-message">
                                                        <div className="message-data">
                                                            <span
                                                                className="message-data-name">{message.author.username}</span>
                                                            <span className="message-data-time">{date}</span>
                                                        </div>
                                                        <div className="message message-text">
                                                            {message.content}
                                                        </div>
                                                    </li>
                                                )
                                            } else {
                                                return (
                                                    <li className="my-message">
                                                        <div className="message-data">
                                                            <span className="message-data-time">{date}</span> &nbsp; &nbsp;
                                                            <span
                                                                className="message-data-name">{message.author.username}</span><i
                                                            className="fa fa-circle me"> </i>
                                                        </div>
                                                        <div className="message message-text">
                                                            {message.content}
                                                        </div>
                                                    </li>
                                                )
                                            }
                                        })}
                                    </ul>
                                    :
                                    <p>po de messages gros naze</p>
                                }
                            </div>
                            <footer className="chat-message">
                                <span className="input" role="textbox" contentEditable onChange={handleChange}/>
                                <button><MdSend/></button>
                            </footer>
                        </>
                        :
                        <div className="chat-history">
                            <p>Reprends une conversation via la liste à gauche ou lances-en une nouvelle depuis ta liste de contacts !</p>
                        </div>
                    }
                </div>
            </section>
        </div>
    )
}