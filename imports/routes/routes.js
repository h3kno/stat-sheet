import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import App from '../ui/App';
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import CurrentGame from '../ui/CurrentGame';
import GamesContainer from '../ui/GamesContainer';

export const routes = (
	<Router>
		<Switch>
			<Route path="/">
				<App />
			</Route>
			<Route path="/games/:id">
				<CurrentGame />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</Router>
);
