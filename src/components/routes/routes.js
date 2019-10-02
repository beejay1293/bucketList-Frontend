import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/home';
import Auth from '../Auth/auth';
import Dashboard from '../Dashboard/dashboard';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />

    </Switch>
)

export default Routes;