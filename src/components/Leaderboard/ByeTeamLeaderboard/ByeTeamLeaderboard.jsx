import React from 'react';
import '../Leaderboard.css';

export default function ByeTeamLeaderboard(props) {

	return (
		props.byeTeams.map(
			(team, index) => {
				if (index % 8 === 0) {
					return (
					<li className="bye-first">
						<div className="team-name">{team.name}'s picks</div>
						<div className="bye-team-wrapper">
							<div className="team-info">
									<span className="seed bye-seed">{team.spot[4]}</span>
							</div>
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
								<div className="team-info">
										<div className="seed bye-seed">{team.spot[4]}</div>
								</div>
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
					);
				}
			}
		)
	)
}
