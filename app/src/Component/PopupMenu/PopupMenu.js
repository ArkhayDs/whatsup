import React, {useEffect, useRef, useState} from 'react';
import {
    Animated, Easing,
    Modal,
    TouchableOpacity, TouchableOpacityComponent,
    View
} from 'react-native';
import {Entypo} from "@expo/vector-icons";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import {Text} from "react-native-paper";
import {AntDesign} from '@expo/vector-icons';

export default function PopupMenu({navigation}) {
    const [visible, setVisible] = useState(false)
    const scale = useRef(new Animated.Value(0)).current

    const options = [
        {
            title: 'Qr Code',
            action: () => navigation.navigate('QrCode'),
            icon: "qrcode"
        },
        {
            title: 'Authentification',
            action: () => navigation.navigate('Authentification'),
            icon: "poweroff"
        },
        {
            title: 'Déconnexion',
            action: () => {
                localStorage.removeItem('WhatsUpJWT')
                console.log(localStorage.getItem("WhatsUpJWT"))
                navigation.navigate('Authentification')
            },
            icon: 'logout'
        },
    ]

    function resizeBox(to) {
        to === 1 && setVisible(true)
        Animated.timing(scale, {
            toValue: to,
            useNativeDriver: true,
            duration: 200,
            easing: Easing.linear,
        }).start(() => to === 0 && setVisible(false))
    }

    return (
        <>
            <TouchableOpacity onPress={() => {
                resizeBox(1)
            }}>
                <Entypo name="dots-three-vertical" size={24} color="#fff"/>
            </TouchableOpacity>
            <Modal transparent visible={visible}>
                <SafeAreaView
                    style={{
                        paddingTop: 50,
                        flex: 1,
                        justifyContent: "flex-start",
                        alignItems: "flex-end",
                    }}
                    onTouchStart={() => resizeBox(0)}
                >
                    <Animated.View
                        style={{
                            transformOrigin:"top",
                            transform: [{scaleX:scale}]
                        }}
                    >
                        {
                            options.map((option, i) => {
                                return (
                                    <TouchableOpacity
                                        key={i}
                                        onPress={option.action}
                                        style={{
                                            backgroundColor: "#346881FF",
                                            flexDirection: 'row',
                                            paddingTop: 5,
                                            paddingBottom: 5,
                                            width: 200
                                        }}
                                    >
                                        <AntDesign
                                            style={{
                                                marginLeft: 10,
                                            }}
                                            name={option.icon}
                                            size={20}
                                            color="#fff"
                                        />
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color:"#fff",
                                            }}
                                        >
                                            {option.title}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </Animated.View>
                </SafeAreaView>
            </Modal>
        </>
    )
}