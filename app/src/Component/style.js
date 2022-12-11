import {Dimensions, StyleSheet} from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const global_style = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: "center",
        alignItems: 'center',
        height: windowHeight,
        width: windowWidth,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#8AB8D0',
    },
    contact_button_page: {
        position: "absolute",
        bottom: 20,
        right: 20,
        backgroundColor: "#8AB8D0",
        padding: 15,
        borderRadius: 10000,
    },
    arrow_header: {
        marginRight: 25
    },
    error_message: {
        backgroundColor: "#B0413E",
        color: "#F0F2F5",
        marginBottom: 25,
        padding: 10,
        textAlign: "center",
    }
})


export default global_style