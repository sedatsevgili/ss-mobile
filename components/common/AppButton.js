import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class AppButton extends React.Component {

    render() {
        const buttonStyle = this.props.buttonStyle ? this.props.buttonStyle : defaultStyles.defaultButton;
        const buttonTextStyle = this.props.buttonTextStyle ? this.props.buttonTextStyle : defaultStyles.defaultButtonText;
        const underlayColor = this.props.underlayColor ? this.props.underlayColor : '#81BAB4';
        const activeOpacity = this.props.activeOpacity ? this.props.activeOpacity : 0.7;

        return (
            <TouchableHighlight style={buttonStyle} underlayColor={underlayColor} activeOpacity={activeOpacity} onPress={() => {this.props.onPress()}} >
                <Text style={buttonTextStyle}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }    

}

const defaultStyles = StyleSheet.create({
    defaultButton: {
        marginTop: 30,
        backgroundColor: '#92CBC5',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: 102,
        height: 40
    },
    defaultButtonText: {
        flex: 1,
        marginTop: 8,
        fontSize: 14
    }
});

