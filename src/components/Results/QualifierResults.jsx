import React, { Component } from 'react';
// import './Leaderboard.css';

export default class QualifierResults extends Component {

  render() {
		if (this.props.userPicks !== null) {
			return (
				this.props.userPicks.map(
					(team, index) => {
						if (index % 10 === 0) {
							return (
							<li key={index}>
								<h3 className="user-name">{team.user}</h3>
								<div className="">
										<div className="round-robin">East round robin:
											<div className="points">
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
								<li key={index}>
									<div className="">
										<div className="round-robin">West round robin:
											<div className="points">
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
									<li key={index}>
										<div className="logo-wrapper team-points">	
											<img className="team-logo" 
													src={`/teamLogos/${team.team}.png`}
													alt={team.team} 
													title={team.team}
											/>
											<div className="points">
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
						// { () => { return "</div>" } 
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
