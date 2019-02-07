import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Books from './components/Books';
import Loans from './components/Loans';
import PrivateRoute from './components/PrivateComponent';
import Menu from './components/Menu';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Authentication Frontend</h1>
        <Menu />
        <Switch>
          <Route path='/' exact component={ Home } />
          <Route path='/login' exact component={ Login } />
          <Route path='/signup' exact component={ Signup } />
          <PrivateRoute path='/books' exact component={ Books } />
          <PrivateRoute path='/loans' exact component={ Loans } />
        </Switch>
      </div>
    );
  }
}

export default App;
