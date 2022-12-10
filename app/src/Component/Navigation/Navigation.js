import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import global_style from "../style";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Conversations from "../Conversations/Conversations";
import PopupMenu from "../PopupMenu/PopupMenu";
import Chat from "../Conversations/Chat";
import Contacts from "../Contacts/Contacts";
import SyncQrCodeScan from "../QrCode/SyncQrCodeScan";

const ChatStack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <ChatStack.Navigator
            defaultScreenOptions="Conversations"
        >
            <ChatStack.Screen
                name="Conversations"
                component={Conversations}
                options={{
                    animationTypeForReplace: "pop",
                    animation: 'slide_from_right',
                    headerRight: () => (
                        <PopupMenu />
                    ),
                }}/>
            <ChatStack.Screen
                name="Chat"
                component={Chat}
                options={({route}) => ({
                    title: route.params.name,
                    animationTypeForReplace: "pop",
                    animation: 'slide_from_right',
                    headerLeft: (navigate) => (
                        <TouchableOpacity
                            onPress={() =>
                                // console.log(route)
                                route.params.navigation.navigate('Conversations')
                            }
                        >
                            <AntDesign style={global_style.arrow_header} name="arrowleft" size={24} color="black"/>
                        </TouchableOpacity>
                    ),
                })}/>
            <ChatStack.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    animationTypeForReplace: "pop",
                    animation: 'flip'
                }}
            />
            <ChatStack.Screen
                name="QrCode"
                component={SyncQrCodeScan}
                options={{
                    animationTypeForReplace: "pop",
                    animation: 'flip',
                    header:false,
                }}
            />
        </ChatStack.Navigator>
    );
}