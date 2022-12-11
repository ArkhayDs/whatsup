import React, {useEffect, useState} from 'react';
import {
    Pressable, StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity, Dimensions,
} from 'react-native';

import './Contacts_style'
import global_style from "../style";
import {useSelector} from "react-redux";
import useGetUserList from "../../Hook/useGetUserList";

export default function Contacts({navigation}) {
    // const [userList, setUserList] = useState([{id: 1, username: "Francise"}, {id: 2, username: "Beber"}, {
    //     id: 3,
    //     username: "Paul"
    // }, {id: 5, username: "Mireil"}])

    const [userList, setUserList] = useState(false)

    const getUserList = useGetUserList()
    // const currentUser = useSelector(store => store.SigninReducer)
    const currentUser = 'useSelector(store => store.SigninReducer)'

    useEffect(() => {
        if (currentUser) {
            getUserList().then(data => {
                setUserList(data.users)
            })
        }
    }, [currentUser])

    return (
        <SafeAreaView style={global_style.sectionContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    {userList ?
                        <View>
                            {userList.map((user, i) => {
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
                        <Text>Pas de contact</Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}