export default function DarkModeReducer(state = false, action) {
    switch (action.type) {
        case 'Dark':
            return action.mode;
        case 'Light':
            return action.mode;
        default:
            return state;
    }
}