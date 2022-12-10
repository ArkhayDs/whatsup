import React, {useState} from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import Login from "./Login";
import Register from "./Register";


export default function Authentification() {
    let dark = false;
    const [login, setLogin] = useState(true)

    return (
        <View className={dark ? "contacts_header contacts_header-dark" : "contacts_header"}>
            <View className='nav-authentification'>
                <Pressable onClick={() => setLogin( true)} className={login? 'active': ''}><Text>Se connecter</Text></Pressable>
                <Pressable onClick={() => setLogin( false)} className={login? '': 'active'}><Text>S'inscrire</Text></Pressable>
            </View>
            {login
                ? <Login/>
                : <Register/>
            }
        </View>
    )
}