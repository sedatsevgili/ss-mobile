import React from 'react';
import  { View, Text, TextInput, StyleSheet } from 'react-native'; 
import AppButton from '../components/AppButton.js';

export default class Login extends React.Component {

    render() {
        const placeholderTextColor = "rgba(255, 255, 255, 0.5)";
        return (
            <View style={styles.body}>
                <View style={[styles.row, {marginTop: 60} ]}>
                    <TextInput placeholder="Kullanıcı Adı"  placeholderTextColor={placeholderTextColor} style={styles.input}/>
                </View>

                <View style={styles.row}>
                    <TextInput placeholder="Şifre" secureTextEntry={true} placeholderTextColor={placeholderTextColor} style={styles.input}/>
                </View>

                <AppButton text="GİRİŞ" onPress={() => {} } />

            </View>
        );
    }

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        margin: 20
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        padding: 10
    },
    input: {
        fontSize: 16,
        lineHeight: 24,
        color: 'rgba(255, 255, 255, 0.5)',
        textDecorationLine: 'none',
        padding: 10
    }
});