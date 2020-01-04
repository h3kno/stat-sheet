import React from 'react';

export default class TeamScore extends React.Component {
	render() {
		return (
			<div className="team-score">
				<h2>{this.props.teamName}</h2>
				<span>{this.props.teamScore}</span>
			</div>
		);
	}
}
