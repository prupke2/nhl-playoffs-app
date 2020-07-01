import React, { Component } from 'react';
import './Teams.css';

class Teams extends Component {
    
    render() {
        return this.props.teams.teams.map((team, index) => {
            return (
                <li key={team.seed} className={`teamWrapper matchup team-${index}`}>
                    <div className="seed">
                        {team.seed}
                    </div>
                    <img className="teamLogo" 
                        src={team.logo} 
                        alt={team.short} 
                        title={team.name}
                    />
                </li>
              );
        });
    }
}

export default Teams;
