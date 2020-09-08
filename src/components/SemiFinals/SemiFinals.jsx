import React, { Component } from 'react';
import './semiFinals.css';
import SemiFinalData from './semiFinalRoundData.json';
import Matchups from '../QualifyingRound//Matchups/Matchups';

export default class SemiFinals extends Component {
    constructor() {
		super();
        this.state = SemiFinalData;
        this.teamSelectHandler = this.teamSelectHandler.bind(this);
    }

    teamSelectHandler(teamShort, matchup) {

        let teams = this.state.teams.filter((team) => {

            if (team.short === teamShort) {
                team.selected = true;
            }
            if (team.matchup === matchup && team.short !== teamShort) {
                team.selected = false;
            }

            return team;
        });

        this.setState({
            ...this.state,
            teams
        })

        let saveConferenceSemiFinals = this.props.saveConferenceSemiFinals;
        saveConferenceSemiFinals(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <div className="instructions">
                    <ul>
                        <li>For each matchup, click on the team you think will win.</li>
                        <li>
                            <span className="scoring">Scoring: </span> 
                            <span className="num">1 point</span> for each correct pick in the conference semifinals.<br />
                            <span className="num">2 points</span> for each correct pick in the conference finals.<br />
                            <span className="num">3 points</span> for each correct pick in the finals.<br />
                            <span className="num">4 points</span> for correctly picking the Stanley Cup winner.<br />
                        </li>
                    </ul>
                </div>
                <section className="qualifying-round semifinals">
                    <div>
                        <h3 className="header align-left">west matchups</h3>
                        <h3 className="header align-left" id="east-matchups">east matchups</h3>
                        <ul className="matchups">
                            { 
                              React.Children.toArray(
                                <Matchups
                                    teams={this.state}
                                    teamSelectHandler={this.teamSelectHandler}
                                ></Matchups>
                              )
                            }
                        </ul>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
