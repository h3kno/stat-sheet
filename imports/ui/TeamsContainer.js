import React from 'react';
import Team from './Team';

export default class TeamsContainer extends React.Component {
  renderTeams() {
    return this.props.teams.map((team) => {
      return <Team key={team._id + team.name} gameId={this.props.gameId} team={team} />
    });
  }


  render() {
    return (
      <div>
        {this.renderTeams()}
      </div>
    )
  }
}
