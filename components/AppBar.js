import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppBar extends React.Component {
    render() {
        return (
            <View style={styles.appBarBg}>
                <Text style={styles.appBarTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appBarBg: {
        height: 80,
        backgroundColor: '#212121',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        shadowOpacity: 1.0,
        elevation: 4
    },
    appBarTitle: {
        left: 72,
        top: 41,
        color: '#92CBC5',
        fontSize: 20,
        lineHeight: 28
    }
});