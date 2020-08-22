import React, { Component } from 'react';
import './Matchups.css';


export default class Matchups extends Component {

    render() {
        var teamSelectHandler = this.props.teamSelectHandler;

        return this.props.teamData.teams.map((team, index) => {
            // if (this.props.round <= team.round)
            return (
                <li 
                    key={index} 
                    className={`matchup-${team.matchup} ${team.selected} ${team.conference} round-${team.round}`}
                    onClick={() => teamSelectHandler(team.short, team.matchup, this.props.round)}
                >
                    <div className="logo-wrapper">
                        <div className="seed">
                            {team.seed}
                        </div>
                        <img className="team-logo" 
                            draggable="false"
                            src={`/teamLogos/${team.short}.png`}
                            alt={team.short} 
                            title={team.name}
                        />
                    </div>
                    <div className="team-info">
                        <span className="team-short">{team.short}</span>
                    </div>
                </li>
              );
        });
    }
}
