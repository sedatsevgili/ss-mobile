import React from 'react';
import { List, ListItem, Text } from 'native-base';

export default class Main extends React.Component {


    render() {
        var items = [
            'Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'
        ];
        return (
            <List dataArray={items}
                renderRow={(item) =>
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                }>
            </List>
        );
    }
}
