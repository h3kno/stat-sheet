import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { Route, Router, browserHistory } from 'react-router';

import {Games} from '../imports/api/games';
import {Teams} from '../imports/api/teams';
import App from '../imports/ui/App';
import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';
import CurrentGame from '../imports/ui/CurrentGame';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/games/:id" component={CurrentGame} />
    <Router path="*" component={NotFound}/>
  </Router>
);

Tracker.autorun(() => {
  const allGames = Games.find({}).fetch();
  const allTeams = Teams.find({}).fetch();
  console.log('allGames: ' , allGames);
  console.log('allTeams: ' , allTeams);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
