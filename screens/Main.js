import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AddButton from '../components/main/AddButton.js';
import BottomBar from '../components/main/BottomBar.js';


export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {bottomBarTexting: false};
    }

    render() {
        const bottomBarStyle = this.state.bottomBarTexting ? styles.bottomBarTexting : styles.bottomBar;

        return (
            <View style={styles.main}>
                <ScrollView style={styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.blogContent}>Bugün şöyle oldu böyle oldu</Text>
                        <Text style={styles.blogDate}>01.05.2017 18:09:42</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.blogContent}>Bugün şöyle oldu böyle oldu</Text>
                        <Text style={styles.blogDate}>01.05.2017 18:09:42</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.blogContent}>Bugün şöyle oldu böyle oldu</Text>
                        <Text style={styles.blogDate}>01.05.2017 18:09:42</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.blogContent}>Bugün şöyle oldu böyle oldu</Text>
                        <Text style={styles.blogDate}>01.05.2017 18:09:42</Text>
                    </View>
                </ScrollView>
                <BottomBar style={bottomBarStyle} onTexting={() => {
                    this.setState({bottomBarTexting: true})
                    }}
                    
                    onTextout = {() => {
                        this.setState({bottomBarTexting: false})
                    }}
                    />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch'
    },
    body: {
        flex: 1
    },
    bottomBar: {
        flex: 0.25,
        padding: 12
    },
    bottomBarTexting: {
        flex: 3,
        padding: 12
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 20
    },
    blogContent: {
        fontSize: 18,
        color: '#D8D8D8'
    },
    blogDate: {
        fontSize: 12,
        color: '#D8D8D8'
    },
    
});