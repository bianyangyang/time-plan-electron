import React, { Component } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import App from './App';
import Login from './Login/index';

class Router extends Component {
    render() {
        return <HashRouter>
            <Route path="/" exact component={App}></Route>
            <Route path="/login" component={Login}></Route>
        </HashRouter>
    }
}
export default Router;