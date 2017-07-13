import React from 'react';
import {Teams} from '../api/teams';

export default class AddTeam extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    let teamCount = Teams.find().fetch().length;
    if (teamCount < 2) {
      let teamCount = teamCount;
      Teams.insert({
        team: `team${teamCount}`,
        teamScore: 0,
        players: []
      });
    } else {
      alert('Only two teams for each game');
    }

    if (teamCount === 2) {
      e.currentTarget.className += " hidden";
    }
  }

  createTeam() {
    if (!Teams.find('gameDate').fetch()) {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      }

      if(mm<10) {
          mm = '0'+mm
      }

      today = mm + '-' + dd + '-' + yyyy;
    } else {
      let teamCount = Teams.find('team').fetch().length;
      Teams.update(Teams._id, {$push: {
        'team': {
          team: `team${teamCount+1}`,
          teamScore: 0,
          players: []
        }
      }});
    }
  }

  render() {
    let styles = 'form';
    if (Teams.find().fetch().length === 2) {
      styles += ' hidden';
    }
    return (
      <div>
        <form className={styles} onSubmit={this.handleSubmit.bind(this)}>
          <button className="button">Add Team</button>
        </form>
      </div>
    );
  }
};
