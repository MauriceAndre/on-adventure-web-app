import React from 'react'
import { Switch, Redirect } from 'react-router-dom';
import Route from "./Route";
// import ProtectedRoute from "./ProtectedRoute";
import Home from './../Home';
import NotFound from "../NotFound/NotFound";
import MainNavbar from './../common/MainNavbar';


function Routes() {
    return (
        <Switch>
            <Route path="/not-found" component={NotFound} header={MainNavbar}/>
            <Route exact path="/" component={Home} header={MainNavbar}/>
            <Redirect to="/not-found" />
        </Switch>
    )
}

export default Routes;
