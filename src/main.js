//main.js
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router'; 升级前
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';//4.0
import Routes from './config/route';
import Demo1 from './components/demo1';
import './css/common.scss'

render(
    <Router>
        <Route path='/' component={Demo1}/>
    </Router>,
    document.getElementById('root')
);