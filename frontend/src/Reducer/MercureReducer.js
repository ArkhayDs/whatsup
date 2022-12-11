export default function useMercureLogin(state = false, action) {
    switch (action.type) {
        case 'SESSION':
            return action.eventSource

        default:
            return state;
    }
}