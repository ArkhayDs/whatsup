import React, {useState} from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from "./authentification_style";
import {useDispatch} from "react-redux";
import useRegister from "../../Hook/useRegister";
import {LoginAction} from "../../Action/LoginAction";
import global_style from "../style";

const SizedBox: React.FC<Props> = ({height, width}) => {
    return <View style={{height, width}}/>;
};

export default function Register({navigation}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [status, setStatus] = useState(false)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('error')

    const register = useRegister()

    const submit = (e) => {
        e.preventDefault()

        register(username, password, password2)
            .then(res => {
                setStatus(res.status)
                switch (status) {
                    case 200:
                        dispatch(LoginAction(res.jwt))
                        navigation.navigate("Conversations")
                        break
                    case 422:
                        setMessage(res.message)
                        setError(true)
                        break

                    default:
                        break
                }
            })
    }

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.safeAreaView}>
                <KeyboardAvoidingView
                    style={styles.content}
                >
                    <Text style={styles.title}>S'inscrire</Text>

                    <SizedBox height={8}/>

                    <Text style={styles.subtitle}>Inscrit toi avec ton super compte</Text>

                    <SizedBox height={32}/>

                    {error ? <Text style={global_style.error_message}>{message}</Text> : ""}

                    <Pressable>
                        <View style={styles.form}>
                            <Text style={styles.label}>Nom</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCompleteType="text"
                                autoCorrect={false}
                                keyboardType="text"
                                returnKeyType="next"
                                style={styles.textInput}
                                textContentType="username"
                                onChangeText={setUsername}
                            />
                        </View>
                    </Pressable>

                    <SizedBox height={16}/>

                    <Pressable>
                        <View style={styles.form}>
                            <Text style={styles.label}>MDP</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCompleteType="password"
                                autoCorrect={false}
                                returnKeyType="done"
                                secureTextEntry
                                style={styles.textInput}
                                textContentType="password"
                                onChangeText={setPassword}
                            />
                        </View>
                    </Pressable>

                    <SizedBox height={16}/>

                    <Pressable>
                        <View style={styles.form}>
                            <Text style={styles.label}>MDP</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCompleteType="password"
                                autoCorrect={false}
                                returnKeyType="done"
                                secureTextEntry
                                style={styles.textInput}
                                textContentType="password"
                                onChangeText={setPassword2}
                            />
                        </View>
                    </Pressable>

                    <SizedBox height={16}/>

                    <TouchableOpacity
                        onPress={(e) => submit(e)}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonTitle}>S'inscrire</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}