import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup.js';
import Login from '../Login/Login.js';

export default class Main extends React.Component {
    render() {
	return (
	    <Switch>
		<Route exact path='/register' component={Signup} />
		<Route exact path='/login' component={Login} />
	    </Switch>
	);
    }
}
