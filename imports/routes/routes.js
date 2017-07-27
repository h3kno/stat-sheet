import React from 'react';
import { Route, Router, browserHistory } from 'react-router';

import App from '../ui/App';
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import CurrentGame from '../ui/CurrentGame';
import GamesContainer from '../ui/GamesContainer';

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/games" component={GamesContainer}/>
    <Route path="/games/:gameid" component={CurrentGame} />
    <Router path="*" component={NotFound}/>
  </Router>
);
