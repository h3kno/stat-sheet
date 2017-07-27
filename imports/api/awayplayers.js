import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const AwayPlayers = new Mongo.Collection('awayplayer');

AwayPlayers.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

AwayPlayers.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

if (Meteor.isServer) {
  Meteor.publish('away-players', function(teamId) {
    let findQuery = teamId ? {'teamId': teamId} : {};
    return AwayPlayers.find(findQuery);
  });
}
