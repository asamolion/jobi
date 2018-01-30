import React from 'react';
import MaskedInput from 'react-text-mask';
import bigLogo from './big_logo.png';

export default class Footer extends React.Component {
    componentDidMount() {
        document.getElementById('year').innerHTML = new Date().getFullYear();
    }

    render() {
        return (
            <footer className='footer'>
                <div className='copyright-container'>
                    <img src={bigLogo} className='footer-logo' />

                    <p className='footer-text'>&copy; <span id='year'></span> make happen GmbH / All rights reserved</p>
                    <p> <a href='javascript:void();'>Facebook</a> <a href='javascript:void();'>Tumblr</a></p>
                </div>
            </footer>
        );
    }
}
