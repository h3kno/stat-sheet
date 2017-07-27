import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';

import { Teams } from '../api/teams';

export default class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: ''
    }
  }

  componentDidMount() {
    this.teamsTimeout = setTimeout(() => {
      this.teamsTracker();
    }, 0)
  }

  componentWillUnmount() {
    clearTimeout(this.teamsTimeout);
    this.teamsTracker.stop();
  }

  teamsTracker() {
    Tracker.autorun(() => {
      Meteor.subscribe('teams', this.props._id);
      this.setGames();
    });
  }

  setGames() {
    let teams = Teams.find({gameId: this.props._id}).fetch();
    this.setState({
      teams
    })
  }

  getGames() {
    console.log('this.state.teams: ', this.state.teams[0])
    return (
      this.state.teams.map((team) => {
        return (
          <table className="games-table" key={team._id}>
            <tbody>
              <tr className={team.name.toLowerCase()}>
                <td>
                  {team.name}
                </td>
                <td>
                  {team.teamScore}
                </td>
              </tr>
            </tbody>
          </table>
        )
      })

    )
  }

  render() {
    const props = this.props;
    const gameLink = `${props._id}`;
    if (this.state.teams) {
      return(
        <div>
          <Link to={gameLink} target="_blank">
              {this.getGames()}
          </Link>
        </div>
      )
    } else {
      return null;
    }

  }
}
