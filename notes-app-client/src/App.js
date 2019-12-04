import React, {Fragment} from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from './containers/Navbar';
import Home from './containers/Home';
import Routes from './routes/Routes';
import "./App.css";

function App(props) {
  return (
    <div >
      <Fragment>
        <Navbar />
        <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Routes} /> 
        </Switch>
        </div>
      </Fragment>
    </div>
  );
}

export default App;
