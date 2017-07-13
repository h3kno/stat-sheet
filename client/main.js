import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Teams} from '../imports/api/teams';
import App from '../imports/ui/App';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let teams = Teams.find().fetch();
    let title = 'Stat Tracker';
    ReactDOM.render(<App title={title} teams={teams} />, document.getElementById('app'));
  });
});
