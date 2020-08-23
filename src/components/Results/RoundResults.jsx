import React, { Component } from 'react';
// import './Leaderboard.css';

export default class QualifierResults extends Component {

  render() {
		// console.log("props: " + JSON.stringify(this.props, null, 4))
		if (this.props.picks !== null) {
			return (
				this.props.picks.map(
					(team, index) => {
            if (index % 8 === 0) {
							return (
							<li key={index}>
								<h3 className="user-name">{team.name}</h3>
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
							)
						} else {
              return (
                <li key={index}>
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
    } else {
      return (
        <div />
      )
    }
  }
}
