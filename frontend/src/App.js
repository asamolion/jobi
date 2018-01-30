import React from 'react';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

export default class App extends React.Component {
    render() {
        return (
            <div id="main">
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
