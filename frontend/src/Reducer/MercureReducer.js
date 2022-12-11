export default function useMercureLogin(state = false, action) {
    switch (action.type) {
        case 'CONNECT':
            const url = new URL('http://localhost:9090/.well-known/mercure')
            url.searchParams.append('topic', 'https://example.com/chat')
            return new EventSource(url, {withCredentials: true})

        case 'DISCONNECT':
            return false;

        default:
            return state;
    }
}