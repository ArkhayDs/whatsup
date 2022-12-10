import React, {useState, useEffect, useContext} from 'react';
import {Text, View, StyleSheet, Button, Dimensions} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default function SyncQrCodeScan() {
    const [events, setEvents] = useState()


    const scanQrCode =  ({ type, data }) => {
        console.log(data)
        console.log(type)
    }


    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanQrCode}
                style={styles.camera}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:"center",
        width: "100%",
        height: "100%",

    },
    camera: {
        flex: 1,
        aspectRatio: 9 / 16,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,

    },
});
