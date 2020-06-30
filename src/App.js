import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { logout } from './modules/user'

import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import Nav from 'react-bootstrap/Nav';

const App = () => {

  const { user } = useSelector(({ user }) => ({ user: user.user, }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  }

  return (
    <Router>

      <nav className="navbar" activeKey="/">
        <div>
          <Link className="navbar__item" to="/">Home</Link>
        </div>
        <div className="navbar__container">
          {user ? (
            <>
              <p className="navbar__item">{user.user}</p>
              <Link onClick={onLogout} className="navbar__item" to="/logout">Logout</Link>
            </>
          ) : (
              <>
                <Link className="navbar__item" to="/login">Login</Link>
                <Link className="navbar__item" to="/register">Register</Link>
              </>
            )}

        </div>
      </nav>

      <div className='container'>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Login} path="/login" />
          <Route component={Register} path="/register" />
        </Switch>
      </div>

    </Router>
  );
}

export default App;
