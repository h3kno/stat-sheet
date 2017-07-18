import React, { Component } from 'react';

export default class GameTime extends Component {
  render() {
    return (
      <div className="col-xs-12">
        <p className="gametime">Game started at {this.props.gameTime}</p>
      </div>
    )
  }
}
