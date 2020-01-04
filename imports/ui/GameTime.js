import React, { Component } from 'react';

const GameTime = props => (
	<div className="col-xs-12">
		<div className="game-time">
			<p className="gametime">Game started on {props.gameTime}</p>
		</div>
	</div>
);

export default GameTime;
