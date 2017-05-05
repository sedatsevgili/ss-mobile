import React from 'react';
import {TouchableHighlight, Image, StyleSheet} from 'react-native';

export default class AddButton extends React.Component {

    render() {
        return (
            <TouchableHighlight onPress={() => {this.props.onPress()}} underlayColor="#303030">
                <Image source={require('../../assets/img/add.png')} style={styles.addButton} />
            </TouchableHighlight>
        );
        
    };
}

const styles = StyleSheet.create({
    addButton: {
        width: 24,
        height: 24
    }
});