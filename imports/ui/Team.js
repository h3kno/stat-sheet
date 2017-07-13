import React from 'react';
import PropTypes from 'prop-types';
import {Teams} from '../api/teams';
import TeamScore from './TeamScore';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';


export default class Team extends React.Component {
  render() {
    //Teams.find({_id: `${this.props.teamId}`}).fetch()
    const team = Teams.find('_id: `${this.props.team._id}`').fetch();
    return (
      <div className="col-xs-6" key={this.props.team._id}>
        <TeamScore teamScore={this.props.team.teamScore} teamName={this.props.team.team} />
        <PlayerList players={this.props.team.players} teamId={this.props.team._id}/>
        <AddPlayer teamId={this.props.team._id} />
      </div>
    )
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired
};
