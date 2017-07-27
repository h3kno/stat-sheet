import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'

import { Games } from '../api/games';
import { Teams } from '../api/teams';
import GamesList from './GamesList';

export default class GamesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: ''
    }
  }

  componentDidMount() {
    this.gamesTimeout = setTimeout(() => {
      this.gamesTracker();
    }, 0)
  }

  componentWillUnmount() {
    clearTimeout(this.gamesTimeout);
    this.gamesTracker.stop();
  }

  gamesTracker() {
    Tracker.autorun(() => {
      Meteor.subscribe('allGames2');
      this.setGames();
    });
  }

  setGames() {
    let games = Games.find().fetch();
    console.log('games', games);
    this.setState({
      games
    })
  }
  
  renderGames() {
    if (this.state.games) {
      return (
        this.state.games.map((game) => {
          console.log('game', game);
          return (
            <div className="col-xs-12" key={game._id}>
              <p>{game.timeStarted}</p>
              <GamesList {...game} />
            </div>
          )
        })
      )
    } else {
      return null;
    }



  }

  render() {
    return (
      <div>
        {this.renderGames()}
      </div>
    )
  }
}
