import React, { Component } from 'react';
import './Leaderboard.css';
import ByeTeamLeaderboard from './ByeTeamLeaderboard/ByeTeamLeaderboard';
import QualifyingTeamLeaderboard from './QualifyingTeamLeaderboard/QualifyingTeamLeaderboard';

export default class Leaderboard extends Component {

	render() {
		// console.log("props: " + JSON.stringify(this.props, null, 4))
		if (this.props.userPicks !== null) {
			return(
				this.props.userPicks.map(
					(team, index) => {
						if (index % 10 === 0) {
							return (
							<li>
								<h3 className="user-name">{team.user}</h3>
								<div className="">
										<div className="round-robin">East round robin:
											<div class="points">
												{
														(() => {
																if (team.points === 0)
																		return "❌"
																if (!team.points)
																		return "--"
																else
																		return "✅ " + "+" + team.points
														})()
													}
											</div>
										</div>
									</div>	
							</li>
							)
						} else if (index % 10 - 1 === 0) {
							return (
								<li>
									<div className="">
										<div className="round-robin">West round robin:
											<div class="points">
												{
													(() => {
															if (team.points === 0)
																	return "❌"
															if (!team.points)
																	return "--"
															else
																	return "✅ " + "+" + team.points
													})()
												}
											</div>
										</div>
									</div>	
									<br />
									<div className="round-robin">Qualifying Round: </div>
									<br />
								</li>
							)
						}	else {
								return (
									<li>
										<div className="logo-wrapper team-points">	
											<img className="team-logo" 
													src={`/teamLogos/${team.team}.png`}
													alt={team.team} 
													title={team.team}
											/>
											<div class="points">
												{
													(() => {
															if (team.points === 0)
																	return "❌"
															if (!team.points)
																	return "--"
															else
																	return "✅ " + "+" + team.points
													})()
												}
											</div>

										</div>			
									</li>
								);
							}
					}
				)
			)
				// <React.Fragment>
				// 	<div>Hi {this.props.user}</div>
				// 	<h2>
				// 		Round 1 is now closed. Come back to make your picks before round 2!
				// 	</h2>
				// 	<section className="user-picks">
					
				// 		<ul>
				// 			<h3>Bye teams</h3>
				// 			<ByeTeamLeaderboard
				// 				byeTeams = {this.props.byeTeams}
				// 			/>
				// 		</ul>
				// 		<ul>
				// 			<h3>Qualifying Teams</h3>
				// 			<QualifyingTeamLeaderboard
				// 				qualifyingTeams = {this.props.qualifyingTeams}
				// 			/>
				// 		</ul>
				// 	</section>
				// </React.Fragment>
				// )
		// } 
		
		
		// if (this.props.qualifyingTeams !== null) {
		// 	return(
		// 		<div>
		// 			{this.props.qualifyingTeams}
		// 		</div>
		// 	)
		// } else {
		// 	return (
		// 		<div />
		// 	)
		// }
	} else {
		return (
			<div />
		)
		}
	}
}
