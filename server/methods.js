import { Meteor } from 'meteor/meteor';
import { Teams } from '../imports/api/teams';
import { Games } from '../imports/api/games';
import { HomePlayers } from '../imports/api/homeplayers';
import { AwayPlayers } from '../imports/api/awayplayers';

Meteor.methods({
  newGame(game) {
    const currentGame = Games.insert(game);
    const team1 = {
      name: 'Home',
      gameId: currentGame,
      teamScore: 0,
      players: []
    };
    const team2 = {
      name: 'Away',
      gameId: currentGame,
      teamScore: 0,
      players: []
    };

    Teams.insert(team1);
    Teams.insert(team2);

    return currentGame;
  },

  insertTeam(team) {
    Teams.insert(team);
  },

  addPlayer(player) {
    const PlayerColl = player.isHome ? HomePlayers : AwayPlayers;
    PlayerColl.insert(player);
    console.log('addPlayer Method', PlayerColl.find().fetch());
  },

  updatePlayer(player) {
    const playerId = parseFloat(player.id);
    const PlayerColl = player.isHome ? HomePlayers : AwayPlayers;
    let playerScore = player.score;
    let currentScore = player.currentScore;
    let totalscore = (currentScore + playerScore);
    let incAmount = totalscore < 0 ? -Math.abs(Math.abs(playerScore) + totalscore) : playerScore;

    PlayerColl.update({
      _id: player.id
    },
    {
      $inc: {
        score: incAmount
      }
    });

    Teams.update(
      {_id: player.teamId},
      {$inc: {teamScore: incAmount}}
    )

  },

  deletePlayer(player) {
    const PlayerDB = player.isHome ? HomePlayers : AwayPlayers;

    PlayerDB.remove({_id: player.id})
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
