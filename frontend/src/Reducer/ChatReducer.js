export default function ChatReducer(state = false, action) {
    switch (action.type) {
        case 'otheruser':
            return action.otheruser;
        default:
            return state;
    }
}