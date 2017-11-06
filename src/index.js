import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, Route } from 'react-router'
import LoginViaGithub from "./login/login.component"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
<Router>
    <Route path="/login" component={LoginViaGithub}></Route>
</Router>
    , document.getElementById('root'));
registerServiceWorker();
