import React from 'react';
import TeamList from './TeamList';

export default class TeamsContainer extends React.Component {
  renderTeams() {
    return this.props.teams.map((team) => {
      return <TeamList key={team._id + team.name} team={team} gameId={this.props.gameId}/>;
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
