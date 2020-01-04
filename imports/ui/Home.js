import React from 'react';

import NewGame from './NewGame';

const Home = () => (
	<div>
		<div className="wrapper container-fluid">
			<div className="row">
				<div className="col-xs-12">
					<p>A simple app to keep track of scores between two teams.</p>
					<p>
						Hit new game to start. Create players on each team. Tap on player's
						score to add 2 or 3 points. Hold on player score to remove points.
					</p>
				</div>
			</div>
			<NewGame />
		</div>
	</div>
);

export default Home;
