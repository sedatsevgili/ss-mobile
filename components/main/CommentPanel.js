import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppButton from '../common/AppButton.js';

export default class CommentPanel extends React.Component {

    render() {
        return (
            <View style={styles.panel}>
                <TextInput multiline={true} numberOfLines={4} style={styles.comment}
                onFocus={() => {
                    this.props.onTexting();}}
                onBlur={() => { this.props.onTextout(); }}

                onEndEditing={() => {this.props.onTextout();}}
                 />
                <AppButton text="GÖNDER" onPress={() => {} } buttonStyle={styles.button} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        paddingLeft: 8
    },
    comment: {
        fontSize: 18,
        color: '#D8D8D8'
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