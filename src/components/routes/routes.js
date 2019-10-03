import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../Auth/auth';
import Dashboard from '../Dashboard/dashboard';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
    </Switch>
)

export default Routes;