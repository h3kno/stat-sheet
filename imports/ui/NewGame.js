import React from 'react';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';

import {Games} from '../api/games';

export default class Reset extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const gameTime = {
      timeStarted: moment().format('MMMM Do YYYY, h:mm:ss a')
    };
    Meteor.call('newGame', gameTime, (error, result) => {
      if (error) {
        alert("Oops seomthing went wrong: " + error.reason)
      } else {
        //this.props.setGameId(result);
        browserHistory.push(`/games/${result}`);
      }
    });
  }

  render() {
    return (
      <div className="item reset-game">
        <form onSubmit={this.handleSubmit.bind(this)} className="form ">
          <button className="btn btn-danger">New Game</button>
        </form>
      </div>
    );
  }
};
