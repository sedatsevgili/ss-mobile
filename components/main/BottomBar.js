import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddButton from './AddButton.js';

export default class BottomBar extends React.Component {
    render(){
        return (
            <View style={styles.bottomBar}>
                <AddButton onPress={() => {}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        padding: 12
    }
});
