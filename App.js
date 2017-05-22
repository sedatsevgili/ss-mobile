import React from 'react';
import Login from './screens/Login.js';
import Main from './screens/Main.js';
import { Container, Header, Title, Content, Footer, Text, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import Expo from 'expo';


export default class App extends React.Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        isReady: false,
        isLogin: true,
      };
    }

     async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
        });
        this.setState({isReady: true});
    }

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Le Blog</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {this.state.isLogin ? (
                        <Main />
                    ) : (
                        <Login />
                    )}
                </Content>
                {this.state.isLogin &&
                    <Footer>
                        <FooterTab>
                            <Button vertical>
                                <Icon name="add-circle" />
                                <Text>Ekle</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                }
            </Container>
        );
    }

}

