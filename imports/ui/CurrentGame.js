import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Teams } from '../api/teams';
import { Games } from '../api/games';

import TeamsContainer from './TeamsContainer';
import NewGame from './NewGame';
import GameTime from './GameTime';

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: '',
      gameTime: '',
      teams: []
    };
  }

  componentDidMount() {
    const gameId = this.props.params.gameid;
    this.setState({
      gameId,
      teams: []
    })

    this.teamsTracker = Tracker.autorun(() => {
      Meteor.subscribe('games', gameId);
      Meteor.subscribe('teams', gameId);
      this.setGameId();
      this.setTeams();
    });
  }

  componentWillUnmount() {
    this.teamsTracker.stop();
  }

  setGameId(gameId) {
    let currentGame = Games.find().fetch();
    this.setState({
      gameId,
      gameTime: currentGame[0] && currentGame[0].timeStarted
    })
  }

  setTeams() {
    const teams = Teams.find().fetch();

    this.setState({
      teams
    });
  }

  render() {
    return (
      <div>
        <div className="wrapper container-fluid">
          <div className="row">
            <GameTime gameTime={this.state.gameTime}/>
          </div>
          <div className="row">
            <TeamsContainer gameId={this.state.gameId} teams={this.state.teams} />
          </div>
        </div>
      </div>
    )
  }
}
