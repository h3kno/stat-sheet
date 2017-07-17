import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import { Route, Router, browserHistory } from 'react-router';

import {Teams} from '../imports/api/teams';
import App from '../imports/ui/App';
import Signup from '../imports/ui/Signup';
import Login from '../imports/ui/Login';
import NotFound from '../imports/ui/NotFound';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Router path="*" component={NotFound}/>
  </Router>
);

Meteor.startup(() => {
  Tracker.autorun(() => {
    let teams = Teams.find().fetch();
    let title = 'Stat Tracker';
    ReactDOM.render(<App title={title} teams={teams} />, document.getElementById('app'));
  });
});
