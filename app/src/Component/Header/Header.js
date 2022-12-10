import React, {useState} from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import './Header_style'

export default function Header() {
    let dark = false;

    return (
        <View className={dark ? "contacts_header contacts_header-dark" : "contacts_header"}>
            <Text>Header</Text>
        </View>
    )
}