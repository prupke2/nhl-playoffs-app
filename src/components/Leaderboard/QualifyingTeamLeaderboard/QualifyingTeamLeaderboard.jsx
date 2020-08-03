import React from 'react';
import '../Leaderboard.css';

export default function ByeTeamLeaderboard(props) {

	return (
		props.qualifyingTeams.map(
			(team, index) => {
				if (index % 8 === 0) {
					return (
					<li>
						<div className="team-name-placeholder">&nbsp;</div>
						<div className="bye-team-wrapper">
							<div className="logo-wrapper">

								<img className="team-logo" 
										src={`/teamLogos/${team.team}.png`}
										alt={team.team} 
										title={team.team}
								/>
								</div>
								<div className="team-info">
										<span className="team-short">{team.short}</span>
								</div>
						</div>	
					</li>
					)
				} else {

					return (
						<li>
							<div className="bye-team-wrapper">
								<div className="logo-wrapper">
									<img className="team-logo" 
											src={`/teamLogos/${team.team}.png`}
											alt={team.team} 
											title={team.team}
									/>
									</div>
							</div>					
						</li>
					);
				}
			}
		)
	)
}
