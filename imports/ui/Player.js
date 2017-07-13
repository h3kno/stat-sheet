import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable';

export default class Player extends React.Component {
  render() {
    return (
      <div key={this.props.player._id} className="item item--position">
        <div className="player row">
          <div className="col-xs-12 col-md-4">
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats"> {this.props.player.score} point(s).</p>
          </div>
          <div className="col-xs-12 col-md-8 player-actions">
            <div className="player__actions">
              <Tappable className="btn btn-info btn-points"
                onTap={() => {
                  let player = {
                    id: this.props.player._id,
                    teamId: this.props.teamId,
                    score: 2
                  }
                  Meteor.call('updatePlayer', player, (error => {
                    if (error) {
                      alert("Oops seomthing went wrong: " + error.reason)
                    }
                  }));
                }}
                onPress={() => {
                  let player = {
                    id: this.props.player._id,
                    teamId: this.props.teamId,
                    score: -2
                  }
                  Meteor.call('updatePlayer', player, (error => {
                    if (error) {
                      alert("Oops seomthing went wrong: " + error.reason)
                    }
                  }));
                }}>
                2
              </Tappable>
              <Tappable className="btn btn-info btn-points"
                  onTap={() => {
                    let player = {
                      id: this.props.player._id,
                      teamId: this.props.teamId,
                      score: 3
                    }
                    Meteor.call('updatePlayer', player, (error => {
                      if (error) {
                        alert("Oops seomthing went wrong: " + error.reason)
                      }
                    }));
                  }}
                  onPress={() => {
                    let player = {
                      id: this.props.player._id,
                      teamId: this.props.teamId,
                      score: -3
                    }
                    Meteor.call('updatePlayer', player, (error => {
                      if (error) {
                        alert("Oops seomthing went wrong: " + error.reason)
                      }
                    }));
                  }}>
                  3
                </Tappable>
              </div>
            </div>
          </div>
          <button className="btn player-delete btn-cancel" onClick={
            () => {
              if (confirm(`are you sure you want to delete player: ${this.props.player.name}?`)) {
                let player = {
                  num: this.props.player.num,
                  teamId: this.props.teamId
                }
                Meteor.call('deletePlayer', player, (error => {
                  if (error) {
                    alert("Oops seomthing went wrong: " + error.reason)
                  } else {
                    console.log('player successfully deleted');
                  }
                }));
              }
            }
          }>
            X
          </button>
        </div>

      )
    }
  }

Player.propTypes = {
  player: PropTypes.object.isRequired
};
