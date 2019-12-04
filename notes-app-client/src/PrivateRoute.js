import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, appProps:{isAuthenticated},...rest}) => (
    <Route {...rest} render={props => !isAuthenticated ? (<Redirect to="/login" />) : (<Component {...props}/>)} />
)

export default PrivateRoute;