import React, {useState} from 'react';
import {
    Pressable, StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {AntDesign, Entypo} from "@expo/vector-icons";

import global_style from "../style";
import style from "../style";
import {Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger} from "react-native-popup-menu";

export default function Conversations({navigation}) {
    const [convList, setConvList] = useState([{id: 1, username: "Francise"}, {id: 2, username: "Beber"}, {
        id: 3,
        username: "Paul"
    }, {id: 5, username: "Mireil"}])

    return (
        <SafeAreaView style={global_style.sectionContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {convList ?
                        <View>
                            {convList.map((user) => {
                                return (
                                    <TouchableOpacity
                                        className="contact_button"
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
                                            <Text> </Text>
                                            <Text>{user.username}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
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