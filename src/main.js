//main.js
import React from 'react';
import { render } from 'react-dom';
//import { Router, Route, browserHistory } from 'react-router'; 升级前
import {BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom';//4.0
import Routes from './config/route';
import Home from './components/home';
import Hot from './components/hot';
import Article from './components/article';
import './css/common.scss'

render(
    <Router>
        <div>
            <footer>
                <ul>
                    <li><NavLink to={Routes.Home} activeClassName="active">首页</NavLink></li>
                    <li><NavLink to='/hot/5' activeClassName="active">热门</NavLink></li>
                    <li><NavLink to={`/article/${88}`} activeClassName="active">文章</NavLink></li>
                </ul>
            </footer>
            <Route exact path={Routes.Home} component={Home}/>
            <Route path={Routes.Hot} component={Hot}/>
            <Route path={Routes.Article} component={Article}/>
        </div>
    </Router>,
    document.getElementById('root')
);