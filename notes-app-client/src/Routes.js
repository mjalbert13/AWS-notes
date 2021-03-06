import React, {Fragment} from "react";
import { Route, Switch } from "react-router-dom";
import AppliedRoute from "./components/AppliedRoutes";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnathenticatedRoute";
import Alert from './components/Alert';
import Home from "./containers/Home";
import Login from "./containers/Login";
import Notes from "./containers/Notes";
import Signup from "./containers/SignUp";
import NewNote from "./containers/NewNote";
import Settings from "./containers/Settings";
import NotFound from "./containers/404";

export default function Routes({ appProps }) {
  return (
    <Fragment>
    
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={Signup} appProps={appProps} />
      <AuthenticatedRoute path="/settings" exact component={Settings} appProps={appProps} />
      <AuthenticatedRoute path="/notes/new" exact component={NewNote} appProps={appProps} />
      <AuthenticatedRoute path="/notes/:id" exact component={Notes} appProps={appProps} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
    </Fragment>
  );
}