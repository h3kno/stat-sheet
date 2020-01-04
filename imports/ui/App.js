import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import NewGame from './NewGame';

import Home from '../ui/Home';
import Signup from '../ui/Signup';
import Login from '../ui/Login';
import NotFound from '../ui/NotFound';
import CurrentGame from '../ui/CurrentGame';
import GamesContainer from '../ui/GamesContainer';

const App = () => (
	<Router>
		<TitleBar title="Score Tracker" />
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/games/:gameid" component={CurrentGame} />
			<Route path="*" component={NotFound} />
		</Switch>
	</Router>
);

export default App;
