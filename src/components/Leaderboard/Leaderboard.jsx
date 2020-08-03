import React, { Component } from 'react';
import './Leaderboard.css';
import ByeTeamLeaderboard from './ByeTeamLeaderboard/ByeTeamLeaderboard';
import QualifyingTeamLeaderboard from './QualifyingTeamLeaderboard/QualifyingTeamLeaderboard';

export default class Leaderboard extends Component {

	render() {
		if (this.props.byeTeams !== null) {
			return(
				<React.Fragment>
					<h2>
						Round 1 is now closed. Come back to make your picks before round 2!
					</h2>
					<section className="user-picks">
						<ul>
							<h3>Bye teams</h3>
							<ByeTeamLeaderboard
								byeTeams = {this.props.byeTeams}
							/>
						</ul>
						<ul>
							<h3>Qualifying Teams</h3>
							<QualifyingTeamLeaderboard
								qualifyingTeams = {this.props.qualifyingTeams}
							/>
						</ul>
					</section>
				</React.Fragment>
				)
		} 
		console.log("props: " + JSON.stringify(this.props, null, 4))
		
		
		if (this.props.qualifyingTeams !== null) {
			return(
				<div>
					{this.props.qualifyingTeams}
				</div>
			)
		} else {
			return (
				<div />
			)
		}
	}
}
