export default function ChatMessages({messages, currentUserId}) {
    return (
        <>
            {
                messages ?
                    <ul>
                        {messages.map((message,i) => {
                            let datetime = new Date(message.createdAt)
                            let date = datetime.getHours() + ":" + datetime.getMinutes() + " - " + datetime.toLocaleDateString('fr')

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

                    <div className="indeterminate-progress-bar">
                        <div className="indeterminate-progress-bar__progress"> </div>
                    </div>
            }
        </>
    )
}