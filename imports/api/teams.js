import {Mongo} from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Teams = new Mongo.Collection('teams');

Teams.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Teams.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

if (Meteor.isServer) {
  Meteor.publish('teams', function(gameId) {
    let findQuery = gameId ? {'gameId': gameId} : {};
    return Teams.find(findQuery);
  })
}
