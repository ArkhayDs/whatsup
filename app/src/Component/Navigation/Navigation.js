import {TouchableOpacity} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import global_style from "../style";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Conversations from "../Conversations/Conversations";
import PopupMenu from "../PopupMenu/PopupMenu";
import Chat from "../Conversations/Chat";
import Contacts from "../Contacts/Contacts";
import SyncQrCodeScan from "../QrCode/SyncQrCodeScan";
import Authentification from "../Authentification/Authentification";

const ChatStack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <ChatStack.Navigator
            defaultScreenOptions="Authentification"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#346881FF',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <ChatStack.Screen
                name="Conversations"
                component={Conversations}
                options={{
                    animationTypeForReplace: "pop",
                    animation: 'slide_from_right',
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
                                route.params.navigation.navigate('Conversations')
                            }
                        >
                            <AntDesign style={global_style.arrow_header} name="arrowleft" size={24} color="#fff"/>
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
                }}
            />

            <ChatStack.Screen
                name="Authentification"
                component={Authentification}
                options={{
                    animationTypeForReplace: "pop",
                    animation: 'flip',
                }}
            />
        </ChatStack.Navigator>
    );
}