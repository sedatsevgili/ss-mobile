import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AddButton from '../components/main/AddButton.js';
import BottomBar from '../components/main/BottomBar.js';


export default class Main extends React.Component {

    render() {
        return (
            <View style={styles.main}>
                <ScrollView>
                    <View style={styles.row}>
                        <Text style={styles.blogContent}>Bugün şöyle oldu böyle oldu</Text>
                        <Text style={styles.blogDate}>01.05.2017 18:09:42</Text>
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.blogContent}>Bugün şöyle oldu böyle oldu</Text>
                        <Text style={styles.blogDate}>01.05.2017 18:09:42</Text>
                    </View>
                </ScrollView>
                <BottomBar />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
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