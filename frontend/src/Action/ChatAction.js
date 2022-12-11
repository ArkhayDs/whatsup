export function ChatAction(username,id) {
    return {
        type: 'otheruser',
        otheruser: {
            username: username,
            id: id
        }
    }
}