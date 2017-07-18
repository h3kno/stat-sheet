import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import NewGame from './NewGame';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Score Tracker"
    }
  }
  render() {
    return (
      <div>
        <TitleBar title={this.state.title} />
        <div className="wrapper container-fluid">
          <div className="row">
            <div className="col-xs-12">To get started hit "New Game"</div>
          </div>
          <NewGame />
        </div>
      </div>
    );
  }
}
