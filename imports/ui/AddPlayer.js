import React from 'react';
import {Teams} from '../api/teams';
import Mongo from 'meteor/mongo';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if (playerName) {
      e.target.playerName.value = '';
      let newPlayer = {
        teamId: this.props.teamId,
        name: playerName,
        score: 0,
        _id: Date.now(),
        num: Date.now()
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
