import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './static/css/bootstrap.min.css';
import './static/css/font-awesome.min.css';
import './index.scss';
import App from './App';

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
