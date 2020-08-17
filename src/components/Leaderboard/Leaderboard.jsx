import React, { Component } from 'react';
import './Leaderboard.css';

export default class Leaderboard extends Component {

	render() {
    if (this.props.leaders !== null) {
			return (
				this.props.leaders.map(
          (team, index) => {
						return (
              <li key={index}>
                <div>{team.name}</div>
                <div>{team.points}</div>
              </li>
            )
          }
        )
      )
    } else {
      return (
        <div />
      )
    }
  }
}
