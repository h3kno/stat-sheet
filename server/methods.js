import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/api/teams';

Meteor.methods({
  insertTeam(team) {
    Teams.insert(team);
  },
  addPlayer(player) {
    Teams.update({_id: player.teamId}, { "$push": { "players": player }});
  },
  updatePlayer(player) {
    const playerId = parseFloat(player.id);
    Teams.update({
      _id: player.teamId,
      "players.num": playerId
    },
    {
      $inc: {
        "players.$.score": player.score,
        teamScore: player.score
      }
    });
  },
  deletePlayer(player) {
    Teams.update(
      {'_id': player.teamId},
      { $pull: { "players" : { num: player.num } } },
      false,
      true
    );
  }
});
