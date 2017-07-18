import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import { routes } from '../imports/routes/routes';

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
