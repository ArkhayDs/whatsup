import React, {useEffect, useState} from 'react';
import {
    Pressable,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import {
    Actions,
    Bubble,
    GiftedChat,
    InputToolbar,
} from "react-native-gifted-chat";
import colors from "../colors_style";
import styles from "./Conversation_style";
import global_style from "../style";
import style from "../style";

const UselessTextInput = (props) => {
    return (
        <TextInput
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
        />
    );
}

export default function Chat({route, navigation}) {
    let dark = false;
    const [text, setText] = useState('');
    const [scrollView, setScrollView] = useState('');
    const { itemId, name } = route.params;

    return (
        <SafeAreaView style={global_style.sectionContainer}>
            <View style={styles.chat_container}>
                <ScrollView
                    ref={ref => setScrollView(ref)}
                    onContentSizeChange={() => scrollView.scrollToEnd({animated: true})}
                >
                    <View style={styles.chat_message_container}>

                        <View style={[styles.chat_message_curent_user, styles.chat_message]}>
                            <View>
                                <Text>curent_user</Text>
                                <Text> </Text>
                            </View>
                            <View>
                                <Text>{text}</Text>
                            </View>
                        </View>

                        <View style={[styles.chat_message_other_user, styles.chat_message]}>
                            <View>
                                <Text>{name}</Text>
                                <Text> </Text>
                            </View>
                            <View>
                                <Text>{text}</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.chat_input_container}>
                <View
                    style={styles.chat_input_text}>
                    <UselessTextInput
                        multiline
                        onChangeText={e => setText(e)}
                        value={text}
                        style={{padding: 10}}
                    />
                </View>

                <TouchableOpacity
                    className="contact_button"
                    onPress={() => console.log('send')}
                    style={styles.send_button}>
                    <Text><Ionicons name="send" size={20} color={colors.white}/></Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}