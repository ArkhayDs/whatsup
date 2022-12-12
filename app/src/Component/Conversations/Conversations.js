import React, {useEffect, useState} from 'react';
import {
    Pressable, StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity, Dimensions,
} from 'react-native';
import {AntDesign, Entypo} from "@expo/vector-icons";

import global_style from "../style";
import style from "../style";
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";
import PopupMenu from "../PopupMenu/PopupMenu";
import {Store} from "../../Store/Store";
import SigninReducer from "../../Reducer/SigninReducer";

export default function Conversations({navigation}) {
    const [convList, setConvList] = useState([{id: 1, username: "Francise"}, {id: 2, username: "Beber"}, {
        id: 3,
        username: "Paul"
    }, {id: 5, username: "Mireil"}])

    //je ne sais pas si c'est très propre mais ça marche là
    navigation.setOptions({
        headerRight: () => (
            <PopupMenu navigation={navigation}/>
        ),
    })

    useEffect( () => {
        if (!localStorage.getItem("WhatsUpJWT")) {
            navigation.navigate("Authentification")
        }
    },[])

    return (
        <SafeAreaView style={global_style.sectionContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {convList ?
                        <View>
                            {convList.map((user, i) => {
                                if (i%2 === 0) {
                                    return (

                                        <TouchableOpacity
                                            style={{
                                                width: Dimensions.get('window').width,
                                                height: 50,
                                                paddingLeft:20,
                                                disable:"flex",
                                                justifyContent:"center",
                                                backgroundColor:"#e3e3e3",
                                            }}
                                            key={user.id}
                                            onPress={() =>
                                                navigation.navigate('Chat', {
                                                    itemId: user.id,
                                                    name: user.username,
                                                    navigation: navigation,
                                                })
                                            }
                                        >
                                            <View>
                                                <Text>{user.username}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                } else {
                                    return (

                                        <TouchableOpacity
                                            style={{
                                                width: Dimensions.get('window').width,
                                                height: 50,
                                                paddingLeft:20,
                                                disable:"flex",
                                                justifyContent:"center",
                                                backgroundColor:"#ffffff",
                                            }}
                                            key={user.id}
                                            onPress={() =>
                                                navigation.navigate('Chat', {
                                                    itemId: user.id,
                                                    name: user.username,
                                                    navigation: navigation,
                                                })
                                            }
                                        >
                                            <View>
                                                <Text>{user.username}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                }

                            })}
                        </View>
                        :
                        <span className="spinner"> </span>
                    }
                </View>
            </ScrollView>
            <TouchableOpacity
                style={global_style.contact_button_page}
                onPress={() =>
                    navigation.navigate('Contacts')
                }
            >

                <AntDesign name="contacts" size={24} color="black"/>
            </TouchableOpacity>
        </SafeAreaView>
    )
}