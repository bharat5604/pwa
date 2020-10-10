import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import User from './User';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/user">
          <Header/>
          <User />
          </Route>
          <Route path="/about">
            <Header/>
            <About/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
