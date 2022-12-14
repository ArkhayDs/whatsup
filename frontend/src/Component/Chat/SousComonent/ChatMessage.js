export default function ChatMessages({messages, currentUserId}) {
    return (
        <>
            {
                messages.length > 0 ?
                    <ul>
                        {messages.map((message,i) => {
                            let datetime = new Date(message.createdAt)
                            let date = datetime.toLocaleString("fr",{hour:'numeric',minute:'numeric'}) + " - " + datetime.toLocaleDateString('fr')

                            if (currentUserId !== message.author.id) {
                                return (
                                    <li className=" other-message" key={i}>
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
                                    <li className="my-message" key={message.id}>
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

                    <div>
                        <div>Aucun message</div>
                    </div>
            }
        </>
    )
}