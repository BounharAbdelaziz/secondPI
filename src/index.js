import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// react mdl
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// end react mdl

// react router dom
import {BrowserRouter} from 'react-router-dom';
// end router dom

// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// end bootstrap

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
