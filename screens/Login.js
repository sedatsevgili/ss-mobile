import React from 'react';
import {  Form, Item, Input, Button, Text } from 'native-base';


export default class Login extends React.Component {

    render() {
        return (
            <Form>
                <Item>
                    <Input placeholder="username" />
                </Item>
                <Item>
                    <Input placeholder="password" secureTextEntry={true} />
                </Item>
                <Button  style={{marginTop: 20, marginLeft: 15}}>
                    <Text>Log In</Text>
                </Button>
            </Form>
        );
        
    }

}

