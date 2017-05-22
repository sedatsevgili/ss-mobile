import React from 'react';
import {  Form, Item, Input, Button, Text } from 'native-base';


export default class CommentForm extends React.Component {
    render() {
        return (
            <Form>
                <Item>
                    <Input multiline={true} numberOfLines={6} style={{height:100}}/>
                </Item>
                <Button  style={{marginTop: 20, marginLeft: 15}}>
                    <Text>Ekle</Text>
                </Button>
            </Form>
        );
    }
}