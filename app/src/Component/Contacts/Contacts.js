import React, {useState} from 'react';
import {
    Pressable, StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import './Contacts_style'
import global_style from "../style";

export default function Contacts({navigation}) {
    const [userList, setUserList] = useState([{id: 1, username: "Francise"}, {id: 2, username: "Beber"}, {
        id: 3,
        username: "Paul"
    }, {id: 5, username: "Mireil"}])

    return (
        <SafeAreaView style={global_style.sectionContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {userList ?
                        <View>
                            {userList.map((user) => {
                                return (
                                    <TouchableOpacity
                                        className="contact_button"
                                        key={user.id}
                                        onPress={() =>
                                            navigation.navigate('Chat', {
                                                itemId:user.id,
                                                name: user.username,
                                                navigation:navigation,
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
        </SafeAreaView>
    )
}