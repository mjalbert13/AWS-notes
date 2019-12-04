import React, {useState,Fragment} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Routes from './Routes';
import "./App.css";

const  App = () =>{

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  

  return (
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

export default App;
