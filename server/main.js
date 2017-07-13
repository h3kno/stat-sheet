import {Meteor} from 'meteor/meteor';
import {Teams} from '../imports/api/teams';

Meteor.startup(() => {
  Meteor.publish('teams', function() {
    return Teams.find({});
  })
});
