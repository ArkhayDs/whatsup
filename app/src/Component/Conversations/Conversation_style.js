import {StyleSheet, Dimensions} from "react-native"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    chat_container: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        flexDirection:"column",
    },
    chat_input_container: {
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-end",
        flexDirection:"row",
        paddingRight:30,
        paddingLeft:30,
        paddingBottom:15,
        paddingTop:15,
        backgroundColor: '#e3e3e3',
    },
    chat_input_text: {
        backgroundColor: '#ffffff',
        width: 300,
        borderRadius: 15,
        maxHeight: 100,
    },
    send_button: {
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    chat_message_container: {
        flex:1,
        width:windowWidth,

    },

    chat_message: {
        padding:10,
        flex:1,
        marginTop:10,
        marginBottom:10,
    },
    chat_message_curent_user: {
        backgroundColor: '#8AB8D0',
        marginLeft:100,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,

    },
    chat_message_other_user: {
        backgroundColor: '#e3e3e3',
        marginRight:100,
        borderTopRightRadius:15,
        borderBottomRightRadius:15,

    }
})


export default styles