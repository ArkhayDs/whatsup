import {ChatAction} from "../../../Action/ChatAction";

export default function UserList({userList, dispatch}) {
    return (
        <>
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
                <div className="indeterminate-progress-bar">
                    <div className="indeterminate-progress-bar__progress"> </div>
                </div>
            }
        </>
    )
}