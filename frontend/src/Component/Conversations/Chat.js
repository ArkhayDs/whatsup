import './chat.scss'
import {MdOutlineArrowBackIosNew, MdSend} from 'react-icons/md';
import {NavLink} from "react-router-dom";

export default function Chat() {
    return (
        <>
            <section className="chatContainer">
                <div className="contacts">
                    <div className="contact-header">
                        <NavLink className="contact-header-button" to="/Conversations">
                            <MdOutlineArrowBackIosNew/>
                            <p>Retour</p>
                        </NavLink>
                    </div>
                    <div className="contact-view">
                        <ul>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">Vincent</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                            <li>
                                <h3 className="chat-with">coucou</h3>
                                <p className="chat-num-messages">Online</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chat">
                    <div className="chat-header">
                        <h2 className="chat-with">Chat with Vincent Porter</h2>
                        <p className="chat-num-messages">already 1 902 messages</p>
                    </div>
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
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
                                    Hi Vincent, how are you? How is the project coming along?
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
                    <div className="chat-message">
                        <span className="input" role="textbox" contentEditable/>
                        <button><MdSend/></button>
                    </div>
                </div>
            </section>
        </>
    )
}