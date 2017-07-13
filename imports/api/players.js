import {Mongo} from 'meteor/mongo';

export const Players = new Mongo.Collection('player');

Players.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Players.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});
