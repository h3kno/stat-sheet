import React from 'react';
import { useHistory } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';

const NewGame = props => {
	let history = useHistory();
	function handleSubmit(e) {
		e.preventDefault();
		const gameTime = {
			timeStarted: moment().format('MMM Do YY, h:mm a')
		};
		Meteor.call('newGame', gameTime, (error, result) => {
			if (error) {
				alert('Oops seomthing went wrong: ' + error.reason);
			} else {
				//this.props.setGameId(result);
				history.push(`/games/${result}`);
			}
		});
	}

	return (
		<div className="item reset-game">
			<form onSubmit={handleSubmit} className="form ">
				<button className="btn btn-danger">New Game</button>
			</form>
		</div>
	);
};

export default NewGame;
