import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import pClass from "./components/PracticeClass";
import pFunc from "./components/PracticeFunction";
import Home from "./components/Home";
import timer from "./components/Timer";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/PC1" component={pClass} />
                    <Route path="/PF1" component={pFunc} />
                    <Route path="/Timer" component={timer} />
                </Switch>
            </Router>
        )
    }
}