import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddButton from './AddButton.js';
import CommentPanel from './CommentPanel.js';

export default class BottomBar extends React.Component {
    render(){
        const style = this.props.style ? this.props.style : styles.bottomBar;
        return (
            <View style={style}>
                {/* <AddButton onPress={() => {}}/> */}
                <CommentPanel onTexting={this.props.onTexting} onTextout={this.props.onTextout} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bottomBar: {
        padding: 12
    }
});
