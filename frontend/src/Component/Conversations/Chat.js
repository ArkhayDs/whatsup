import './chat.scss'

export default function Chat() {
    return (
        <>
            <div className="chat">
                <div className="chat-header">
                    <h2 className="chat-with">Chat with Vincent Porter</h2>
                    <p className="chat-num-messages">already 1 902 messages</p>
                </div>
                <div className="chat-history">
                    <ul>
                        <li className="clearfix">
                            <div className="message-data align-right">
                                <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                                <span className="message-data-name">Olia</span><i className="fa fa-circle me"> </i>
                            </div>
                            <div className="message other-message float-right">
                                Hi Vincent, how are you? How is the project coming along?
                            </div>
                        </li>
                        <li>
                            <div className="message-data">
                                <span className="message-data-name">Vincent</span>
                                <span className="message-data-time">10:20 AM, Today</span>
                            </div>
                            <div className="message my-message">
                                Actually everything was fine. I'm very excited to show this to our team.
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="chat-message">
                    <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"/>
                    <button>Send</button>
                </div>
            </div>
        </>
    )
}