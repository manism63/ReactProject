import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login';
import CreateAccount from './createAccount';
import Logout from './logout';
import HomePage from './homePage';

export default class Routes extends React.Component {
  render() {
    return(
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/createAccount" component={CreateAccount} />
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}
