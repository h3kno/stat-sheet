import React from 'react';
import {Teams} from '../api/teams';
import Mongo from 'meteor/mongo';

export default class Reset extends React.Component {
  handleSubmit(e) {
    if (confirm("Are you sure you want reset this game?")) {
      Meteor.call('resetGame', {}, (error => {
        if (error) {
          alert("Oops seomthing went wrong: " + error.reason)
        } else {
          console.log("Game reset");
        }
      }));
    }
  }

  render() {
    return (
      <div className="item reset-game">
        <form onSubmit={this.handleSubmit.bind(this)} className="form ">
          <button className="button btn-danger">Reset Game</button>
        </form>
      </div>
    );
  }
};
