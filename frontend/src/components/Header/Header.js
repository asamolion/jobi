import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import logo from './logo.jpg';

class Header extends Component {
    render() {
        return (
            <header className='header container-fluid'>
                <div className='row'>
                    <div className='col-xs-6 col-sm-3'>
                        <div className='yellow-icon'>
                            <FontAwesome name='bars' size='2x' />
                        </div>
                    </div>
                    <div className='logo-container col-sm-6 hidden-xs hidden-sm'>
                        <img className='logo' src={logo} alt='Jobi logo' />
                    </div>
                    <div className='col-xs-6 col-sm-3 pull-right'>
                        <div className='yellow-icon pull-right hidden-xs hidden-sm'>
                            <FontAwesome name='user' size='2x' />
                        </div>
                        <h3 className='mobile-title hidden-md hidden-lg'>JOBI</h3>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
