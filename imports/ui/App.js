import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import Teams from './Teams';
import AddTeam from './AddTeam';
import Reset from './Reset';
import NewGame from './NewGame';


export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} />
        <div className="wrapper container-fluid">
          <div className="row">
            <Teams teams={this.props.teams} />
          </div>
          <NewGame />
          <AddTeam />
        </div>
        <Reset />
      </div>
    );
  }
}
