import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Games = new Mongo.Collection('games');

Games.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

Games.deny({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});


// if (Meteor.isServer) {
//   Meteor.publish('teams', () => {
//     return Teams.find();
//   })
// }

if (Meteor.isServer) {
  Meteor.publish('games', function(gameId) {
    let findQuery = gameId ? {'_id': gameId} : {};
    return Games.find(findQuery);
  })
}
