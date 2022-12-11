import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#8AB8D0',
        borderRadius: 8,
        height: 48,
        justifyContent: 'center',
    },
    buttonTitle: {
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
    },
    form: {
        alignItems: 'center',
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        paddingHorizontal: 16,
    },
    label: {
        color: 'rgba(235, 235, 245, 0.6)',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        width: 80,
    },
    root: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    safeAreaView: {
        flex: 1,
    },
    subtitle: {
        color: 'rgba(0,0,0,0.6)',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
    },
    textButton: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
    },
    textInput: {
        color:"#ffffff",
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 34,
    },
});

export default styles