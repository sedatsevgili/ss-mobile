import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar.js';

export default class Layout extends React.Component {

    render() {
        return (
            <View style={styles.layout}>
                <AppBar title={this.props.title} style={styles.appBar} />
                <View style={styles.body}>
                    {this.props.children}
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    appBar: {
        flex: 1
    },
    body: {
        flex: 4,
        backgroundColor: '#303030'
    }
});