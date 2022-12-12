import React, {useState} from 'react';
import {
    Text,
    View,
    TouchableOpacity, Dimensions,
} from 'react-native';
import Login from "./Login";
import Register from "./Register";


export default function Authentification({navigation}) {
    const [login, setLogin] = useState(true)

    return (
        <View style={{flex:1, width:Dimensions.get("window").width, backgroundColor: '#ffffff',}}>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                <TouchableOpacity onPress={() => setLogin( true)} className={login? 'active': ''}><Text>Se connecter</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => setLogin( false)} className={login? '': 'active'}><Text>S'inscrire</Text></TouchableOpacity>
            </View>
            {login ? <Login navigation={navigation}/> : <Register navigation={navigation}/>}
        </View>
    )
}