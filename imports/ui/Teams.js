import React from 'react';
import TeamList from './TeamList';

export default class Team extends React.Component {
  renderTeams() {
    if (this.props.teams.length === 0) {
      return (
        <div className="item">
          <p className="item__message">
            Add your first team to get started
          </p>
        </div>
      )
    } else {
      return this.props.teams.map((team) => {
        return <TeamList key={team._id} team={team} />;
      });
    }
  }

  render() {
    return (
      <div>
        {this.renderTeams()}
      </div>
    )
  }
}
