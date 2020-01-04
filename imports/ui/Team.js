import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import TeamScore from './TeamScore';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

import { Teams } from '../api/teams';
import { HomePlayers } from '../api/homeplayers';
import { AwayPlayers } from '../api/awayplayers';

export default class Team extends React.Component {
	constructor(props) {
		super(props);
		const teams = Teams.find({ _id: props.team._id }).fetch();
		const teamScore = teams.teamScore;
		const teamId = this.props.team._id;
		this.state = {
			teamId,
			players: [],
			score: teamScore
		};
	}

	componentDidMount() {
		this.playerSubTimeout = setTimeout(() => {
			this.playerSubTracker();
		}, 0);
	}

	componentWillUnmount() {
		clearTimeout(this.playerSubTimeout);
		//this.playerTracker.stop();
	}

	playerSubTracker() {
		Tracker.autorun(() => {
			const subscriptionName = `${this.props.team.name.toLowerCase()}-players`;
			Meteor.subscribe(subscriptionName, this.state.teamId);
			this.setPlayers();
		});
	}

	updateScore(points) {
		let currentScore = this.state.score;
		let newScore = currentScore + points;
		this.setState({
			score: newScore
		});
	}

	setPlayers(isHome) {
		const players =
			isHome || (this.props && this.props.team.name) === 'Home'
				? HomePlayers.find({}).fetch()
				: AwayPlayers.find({}).fetch();
		this.setState({
			players
		});
	}

	render() {
		return (
			<div className="col-xs-6" key={this.props.team._id}>
				<TeamScore
					teamScore={this.props.team.teamScore}
					teamName={this.props.team.name}
				/>
				<PlayerList
					updateScore={this.updateScore}
					teamName={this.props.team.name}
					teamId={this.props.team._id}
					players={this.state.players}
				/>
				<AddPlayer
					gameId={this.props.gameId}
					teamName={this.props.team.name}
					teamId={this.props.team._id}
					setPlayers={this.setPlayers}
				/>
			</div>
		);
	}
}

Team.propTypes = {
	team: PropTypes.object.isRequired
};
