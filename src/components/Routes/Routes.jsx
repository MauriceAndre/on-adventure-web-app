import React from 'react'
import { Switch, Redirect } from 'react-router-dom';
import Route from "./Route";
// import ProtectedRoute from "./ProtectedRoute";
import Home from './../Home';
import NotFound from "../NotFound";
import Trip from './../Trip';


function Routes() {
    return (
        <Switch>
            <Route path="/trip" component={Trip} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to="/not-found" />
        </Switch>
    )
}

export default Routes;
