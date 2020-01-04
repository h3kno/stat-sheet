import React from 'react';
import PropTypes from 'prop-types';
import Tappable from 'react-tappable';
import { Meteor } from 'meteor/meteor';

export default class Player extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			score: this.props.player.score
		};
	}
	updateScore(points) {
		console.log('points: ' + points);
		let props = this.props;
		let player = {
			id: props.player._id,
			isHome: props.player.isHome,
			teamId: props.teamId,
			currentScore: this.state.score,
			score: points
		};
		let team = {
			id: props.teamId,
			currentScore: props.player.score,
			score: points
		};
		Meteor.call('updatePlayer', player, error => {
			if (error) {
				alert('Oops seomthing went wrong: ' + error.reason);
			} else {
				let playerScore = player.score;
				let currentScore = player.currentScore;
				let totalscore = currentScore + playerScore;
				let incAmount =
					totalscore < 0
						? -Math.abs(Math.abs(playerScore) + totalscore)
						: playerScore;
				let finalScore = this.state.score + incAmount;
				this.setState({
					score: finalScore
				});
			}
		});
	}

	onDeletePlayer() {
		if (
			confirm(
				`are you sure you want to delete player: ${this.props.player.name}?`
			)
		) {
			let player = {
				id: this.props.player._id,
				isHome: this.props.player.isHome
			};
			Meteor.call('deletePlayer', player, error => {
				if (error) {
					alert('Oops seomthing went wrong: ' + error.reason);
				} else {
					console.log('player successfully deleted');
				}
			});
		}
	}

	render() {
		return (
			<div key={this.props.player._id} className="item item--position">
				<div className="player row">
					<div className="col-xs-12 col-md-4">
						<h3 className="player__name">{this.props.player.name}</h3>
						<p className="player__stats"> {this.state.score} pts</p>
					</div>
					<div className="col-xs-12 col-md-8 player-actions">
						<div className="player__actions">
							<Tappable
								className="btn btn-info btn-points"
								onTap={() => {
									this.updateScore(2);
								}}
								onPress={() => {
									console.log('on press');
									this.updateScore(-2);
								}}
							>
								2
							</Tappable>
							<Tappable
								className="btn btn-info btn-points"
								onTap={() => {
									this.updateScore(3);
								}}
								onPress={() => {
									this.updateScore(-3);
								}}
							>
								3
							</Tappable>
						</div>
					</div>
				</div>
				<button
					className="btn player-delete btn-cancel"
					onClick={() => {
						this.onDeletePlayer();
					}}
				>
					X
				</button>
			</div>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired
};
