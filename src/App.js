import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Components/Login';
import Register from './Components/Register';
import Nav from 'react-bootstrap/Nav';

const App = () => {

  return (
    <Router>

      <nav className="navbar" activeKey="/">
        <div>
          <Link className="navbar__item" to="/">Home</Link>
        </div>
        <div className="navbar__container">
          <Link className="navbar__item" to="/login">Login</Link>
          <Link className="navbar__item" to="/register">Register</Link>
        </div>
      </nav>

      <div className='container'>
        <Switch>
          <Route path="/" exact>
            <div>This is my Home Page</div>
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
