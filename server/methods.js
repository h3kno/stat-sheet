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
    let playerScore = player.score;
    let currentScore = player.currentScore;
    let totalscore = (currentScore + playerScore);
    let incAmount = totalscore < 0 ? -Math.abs(Math.abs(playerScore) + totalscore) : playerScore;

    Teams.update({
      _id: player.teamId,
      "players.num": playerId
    },
    {
      $inc: {
        "players.$.score": incAmount,
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
  },
  resetGame() {
    let team1 = {
      team: 'team1',
      teamScore: 0,
      players: []
    }
    let team2 = {
      team: 'team2',
      teamScore: 0,
      players: []
    }
    Teams.remove({});
    Teams.insert(team1);
    Teams.insert(team2);
  }
});
