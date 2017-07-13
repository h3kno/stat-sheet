import React from 'react';

export default class TeamScore extends React.Component {
  render() {
    let name = this.props.teamName === 'team1' ? 'HOME' : 'AWAY';
    return (
      <div className="team-score">
        <h2>{name}: <span>{this.props.teamScore}</span></h2>
      </div>
    )
  }
}
