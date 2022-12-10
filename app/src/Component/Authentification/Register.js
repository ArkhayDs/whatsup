import React from 'react';
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

const SizedBox: React.FC<Props> = ({ height, width }) => {
    return <View style={{ height, width }} />;
};

export default function Register() {
    return (
        <View style={styles.root}>
            <SafeAreaView style={styles.safeAreaView}>
                <KeyboardAvoidingView
                    style={styles.content}
                >
                    <Text style={styles.title}>S'inscrire</Text>

                    <SizedBox height={8} />

                    <Text style={styles.subtitle}>Inscrit toi avec ton super compte</Text>

                    <SizedBox height={32} />

                    <Pressable>
                        <View style={styles.form}>
                            <Text style={styles.label}>Mail</Text>

                            <TextInput
                                autoCapitalize="none"
                                autoCompleteType="email"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                style={styles.textInput}
                                textContentType="username"
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
                            />
                        </View>
                    </Pressable>

                    <SizedBox height={16} />

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.buttonTitle}>S'inscrire</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </View>
    )
}