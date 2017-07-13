import {Mongo} from 'meteor/mongo';

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
