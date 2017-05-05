import React from 'react';
import Layout from './components/common/Layout.js';
import Login from './screens/Login.js';
import Main from './screens/Main.js';


export default class App extends React.Component {

    render() {
        return (
            <Layout title="Giriş">
                <Main />
            </Layout>
        );
    }

}

