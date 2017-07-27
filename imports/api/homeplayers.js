import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const HomePlayers = new Mongo.Collection('homeplayer');

HomePlayers.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

HomePlayers.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

if (Meteor.isServer) {
  Meteor.publish('home-players', function(teamId) {
    let findQuery = teamId ? {'teamId': teamId} : {};
    return HomePlayers.find(findQuery);
  });
}
