import React, { Component } from 'react';
import './QualifyingRound.css';
// import QualifyingRoundData from './qualifyingRoundData.json';
import QuarterfinalRoundData from './quarterfinalRoundData.json';
import Matchups from './Matchups/Matchups';

export default class QualifyingRound extends Component {
    constructor() {
		super();
        this.state = QuarterfinalRoundData;
        this.teamSelectHandler = this.teamSelectHandler.bind(this);
        // this.saveTeamsHandler = this.saveTeamsHandler.bind(this);
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

        let saveQualifiers = this.props.saveQualifiers;
        saveQualifiers(this.state);

    }

    // saveTeamsHandler = (event) => {
    //     let saveQualifiers = this.props.saveQualifiers;
    //     console.log("STATE: " + JSON.stringify(this.state, null, 4))
    //     saveQualifiers(this.state);
    // }

    render() {

        return (
            <React.Fragment>
                <h2>Qualifying Round</h2>
                <div className="instructions">
                    <ul>
                        <li>For each matchup, click on the team you think will win.</li>
                        <li>
                            <span className="scoring">Scoring: </span> 
                            <span className="num">1 point</span> for each correct pick, and &nbsp;
                            <span className="num">1 bonus point</span> for picking a&nbsp;
                            <div className="seed inline-seed">7</div> or&nbsp;
                            <div className="seed inline-seed">8</div> seed upset.
                        </li>
                    </ul>
                </div>
                <section className="qualifying-round">
                    <div>
                        <h3 className="header align-left">west matchups</h3>
                        <h3 className="header align-left" id="east-matchups">east matchups</h3>

                        <ul className="matchups">
                            { React.Children.toArray(
                                <Matchups
                                    teams={this.state}
                                    teamSelectHandler={this.teamSelectHandler}
                                ></Matchups>
                            )}
                        </ul>
                    </div>

                </section>

            </React.Fragment>
        );
    }

}
