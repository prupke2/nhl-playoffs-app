import React, { Component } from 'react';
import './Matchups.css';
import Team from './Team/Team';


export default class Matchups extends Component {
    constructor() {
		super();
    }

    render() {
        var teamSelectHandler = this.props.teamSelectHandler;

        function selectValue(props) {
            const isSelected = props.team.selected;
            console.log("Test: " + props.team.selected);
            if (isSelected) {
                return("<div>SELECTED</div>")
            } else {
                return("<div>NOT SELECTED</div>")
            }
        }

        // console.log("props: " + JSON.stringify(this.props, null, 4))
        return this.props.teams.map((team, index) => {
            return (
                // <a onClick={this.handler}>
                // <Team
                //     key={team.seed}
                //     selectValue={true}
                //     team={team}
                //     onClick={() => passTeamSelection(team.short, team.matchup)}
                // >

                // </Team>
                <li 
                    key={team.seed} 
                    className={`matchup-${team.matchup} ${team.selected}`}
                    onClick={() => teamSelectHandler(team.short, team.matchup)}
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
