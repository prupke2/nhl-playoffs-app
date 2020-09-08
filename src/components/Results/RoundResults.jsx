import React, { Component } from 'react';
// import './Leaderboard.css';

export default class RoundResults extends Component {

  render() {
    return (
      this.props.picks.map(
        (team, index) => {
          return(
            <li key={index}>
              {index % this.props.picksPerUser === 0 && (
              <h3 className="user-name">{team.name}</h3>
              )}
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
      )
    )
  }
}
