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
import {LoginAction} from "../../Action/LoginAction";
import useLogin from "../../Hook/useLogin";
import SigninReducer from "../../Reducer/SigninReducer";

const SizedBox: React.FC<Props> = ({ height, width }) => {
    return <View style={{ height, width }} />;
};

export default function Login({navigation}) {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = useLogin()

    const submit = (e) => {
        login(username,password)
            .then(res => dispatch(LoginAction(res.jwt)))
            .then(() => navigation.navigate("Conversations"))
    }

    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.safeAreaView}>
                <KeyboardAvoidingView
                    style={styles.content}
                >
                    <Text style={styles.title}>Se connecter</Text>

                    <SizedBox height={8} />

                    <Text style={styles.subtitle}>Se connecter avec ton compte.</Text>

                    <SizedBox height={32} />

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

                    <SizedBox height={16} />

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

                    <SizedBox height={16} />

                    <View style={styles.forgotPasswordContainer}>
                        <Text style={styles.textButton}>Mot de passe oublié</Text>
                    </View>

                    <SizedBox height={16} />

                    <TouchableOpacity
                        onPress={(e) => submit(e)}
                    >
                        <View style={styles.button}>
                            <Text style={styles.buttonTitle}>Se connecter</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}