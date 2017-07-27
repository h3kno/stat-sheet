import React from 'react';
import { Meteor } from 'meteor/meteor'
import {Teams} from '../api/teams';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
      e.target.playerName.value = '';
      let newPlayer = {
        gameId: this.props.gameId,
        teamId: this.props.teamId,
        isHome: this.props.teamName === 'Home',
        name: playerName,
        score: 0,
      }
      Meteor.call('addPlayer', newPlayer, (error => {
        if (error) {
          alert("Oops seomthing went wrong: " + error.reason)
        } else {
          console.log("Player has been added");
        }
      }));
    }
  }

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit.bind(this)} className="form">
          <input type="text" name="playerName" placeholder="Player name" className="form__input"/>
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
};
