/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const App: () => Node = () => {
    return (
        <SafeAreaView style={styles.sectionContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                    <Text style={styles.sectionTitle}>
                        Hello World
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        flex:1,
        backgroundColor:'red',
        justifyContent:"center",
        alignItems:'center'
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color:'white',
    },
});

export default App;
