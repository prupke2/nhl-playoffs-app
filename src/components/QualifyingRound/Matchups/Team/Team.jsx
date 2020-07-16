import React, { Component } from 'react';
// import './Matchups.css';

export default class Team extends Component {
    constructor() {
		super();
    }

    render() {
        return(
                <li key={this.props.team.seed} className={`matchup team-`}>
                <div className="logo-wrapper" 
                // onClick={() => passTeamSelection(this.props.team.short, this.props.team.matchup)}>
                >
                    <div className="seed">
                        {this.props.team.seed}
                    </div>
                    <img className="team-logo" 
                        draggable="false"
                        src={`/teamLogos/${this.props.team.short}.png`}
                        alt={this.props.team.short} 
                        title={this.props.team.name}
                    />
                </div>
                <div className="team-info">
                    <span className="team-short">{this.props.team.short}</span>
                </div>
            </li>
        )
    }
}
