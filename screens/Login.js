import React from 'react';
import  { View, Text, TextInput, StyleSheet } from 'react-native'; 
import AppButton from '../components/common/AppButton.js';

export default class Login extends React.Component {

    render() {
        const placeholderTextColor = "rgba(255, 255, 255, 0.5)";
        return (
            <View style={styles.body}>
                <View style={[styles.row, {marginTop: 60} ]}>
                    <TextInput placeholder="Kullanıcı Adı"  placeholderTextColor={placeholderTextColor} style={styles.input} underlineColorAndroid={'rgba(255, 255, 255, 0.5)'}/>
                </View>

                <View style={styles.row}>
                    <TextInput placeholder="Şifre" secureTextEntry={true} placeholderTextColor={placeholderTextColor} style={styles.input} underlineColorAndroid={'rgba(255, 255, 255, 0.5)'}/>
                </View>

                <AppButton text="GİRİŞ" onPress={() => {} } buttonStyle={styles.button} />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: 20
    },
    row: {
        height: 50
    },
    input: {
        fontSize: 16,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.5)',
        textDecorationLine: 'none',
        padding: 10
    },
    button: {
        marginTop: 30,
        backgroundColor: '#92CBC5',
        width: 102,
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});