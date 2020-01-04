import React from 'react';
import Player from './Player';

const PlayerList = props => {
	function renderPlayers() {
		if (props.players.length === 0) {
			return (
				<div className="item">
					<p className="item__message">Add your first player to get started</p>
				</div>
			);
		}

		return props.players.map(player => {
			return (
				<Player
					updateScore={props.updateScore}
					teamId={props.teamId}
					key={player._id}
					player={player}
				/>
			);
		});
	}

	return <div>{renderPlayers()}</div>;
};

export default PlayerList;
