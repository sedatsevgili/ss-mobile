import React from 'react';
import {  Form, Item, Input } from 'native-base';


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
            </Form>
        );
        
    }

}

