import React, { Component } from 'react';
import './QualifyingRound.css';
import QualifyingRoundData from './qualifyingRoundData.json';
import Matchups from './Matchups/Matchups';

export default class QualifyingRound extends Component {
    constructor() {
		super();
        this.state = QualifyingRoundData;
        this.teamSelectHandler = this.teamSelectHandler.bind(this);
        // this.saveTeamsHandler = this.saveTeamsHandler.bind(this);
    }

    teamSelectHandler(teamShort, matchup) {
        // let search = this.state.eastTeams;
        // const conferenceLetter = matchup.slice(0,1);
        // if (conferenceLetter === "w") {
        //     search = this.state.westTeams;
        // }

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
                        <li>Click on one team in each matchup to select who you believe will win.</li>
                        <li>
                            <span className="scoring">Scoring: </span> 
                            <span className="num">1 point</span> for each correct pick, and &nbsp;
                            <span className="num">1 bonus point</span> for picking an&nbsp;
                            <div className="seed inline-seed">11</div> or&nbsp;
                            <div className="seed inline-seed">12</div> seed upset
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
                    {/* <div>
                        <h3 className="header align-right">east matchups</h3>
                        <ul className="matchups east-matchups">
                            { React.Children.toArray(
                                <Matchups
                                    teams={this.state.eastTeams}
                                    teamSelectHandler={this.teamSelectHandler}
                                ></Matchups>
                            )}
                        </ul>
                    </div> */}

                </section>

            </React.Fragment>
        );
    }

}
