import React, {useState, useEffect, Fragment} from "react";
import { Switch, withRouter } from "react-router-dom";
import {Auth} from 'aws-amplify';
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Routes from './Routes';
import "./App.css";

const  App = () =>{

  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  

  return (
    !isAuthenticating &&
    <div >
      <Fragment>
        <Navbar appProps={{ isAuthenticated, userHasAuthenticated }} />
        <div className='container'>
        <Switch>
          <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </Switch>
        </div>
      </Fragment>
    </div>
  );
}

export default withRouter(App);
