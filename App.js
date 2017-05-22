import React from 'react';
import Login from './screens/Login.js';
import Main from './screens/Main.js';
import CommentForm from './components/CommentForm.js';
import { Container, Header, Title, Content, Footer, Text, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Modal } from 'react-native';
import Expo from 'expo';


export default class App extends React.Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        isReady: false,
        isLogin: true,
        modalVisible: false
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

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
                            <Button vertical onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Icon name="add-circle" />
                                <Text>Ekle</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                }
                <Modal 
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}>
                    <Content style={{marginTop: 22}}>
                        <CommentForm />
                    </Content>
                </Modal>
            </Container>
        );
    }

}

