import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/api/teams';
import { Games } from '../imports/api/games';

Meteor.methods({
  getGame(gameId) {
    Meteor.publish('game', (gameId) => {
      return Games.find({'_id': 'ipeKrEubq5qtcsbJK'});
    })
    //   // Meteor.publish('gameinplay', function (gameId) {
    //   //   return Teams.find({});
    //   // });
  },
  newGame(game) {
    const currentGame = Games.insert(game);
    const team1 = {
      name: 'Home',
      gameId: currentGame,
    };
    const team2 = {
      name: 'Away',
      gameId: currentGame
    };
    Teams.insert(team1);
    Teams.insert(team2);
    Meteor.call('getGame', currentGame);
    return currentGame;
  },
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
