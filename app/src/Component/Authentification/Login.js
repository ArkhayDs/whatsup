import React, {useState} from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';


export default function Login() {
    let dark = false;

    return (
        <View className={dark ? "contacts_header contacts_header-dark" : "contacts_header"}>
            <Text>Login</Text>
        </View>
    )
}