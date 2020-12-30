import React from 'react'
import { Switch, Redirect } from 'react-router-dom';
import Route from "./Route";
// import ProtectedRoute from "./ProtectedRoute";
import Home from './../Home';
import NotFound from "../NotFound";
import Trip from './../Trip';
import NewTrip from './../NewTrip';


function Routes() {
    return (
        <Switch>
            <Route exact path="/trip/new" component={NewTrip} />
            <Route path="/trip" component={Trip} />
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home} />
            <Redirect to="/not-found" />
        </Switch>
    )
}

export default Routes;
