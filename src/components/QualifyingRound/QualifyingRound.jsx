import React, { Component } from 'react';
import './QualifyingRound.css';
import QualifyingRoundData from './qualifyingRoundData.json';
import Matchups from './Matchups/Matchups';

export default class QualifyingRound extends Component {
    constructor() {
		super();
        this.state = QualifyingRoundData;
        this.teamSelectHandler = this.teamSelectHandler.bind(this)
    }

    teamSelectHandler(teamShort, matchup) {
        let search = this.state.eastTeams;
        const conferenceLetter = matchup.slice(0,1);
        if (conferenceLetter === "w") {
            search = this.state.westTeams;
        }

        let teams = search.filter((team) => {

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
        console.log("State: " + JSON.stringify(this.state, null, 4))
    }

    render() {
        return (
            <React.Fragment>
                <h2>Qualifying Round</h2>
                <section className="qualifying-round">
                    <div>
                        <h3 className="header align-left">west matchups</h3>
                        <ul className="matchups west-matchups">
                            { React.Children.toArray(
                                <Matchups
                                    teams={this.state.westTeams}
                                    teamSelectHandler={this.teamSelectHandler}
                                ></Matchups>
                                // this.state.eastTeams.map((team, i) => <li>{team.name}</li>)
                            )}
                        </ul>
                    </div>
                    <div>
                        <h3 className="header align-right">east matchups</h3>
                        <ul className="matchups east-matchups">
                            { React.Children.toArray(
                                <Matchups
                                    teams={this.state.eastTeams}
                                    teamSelectHandler={this.teamSelectHandler}
                                ></Matchups>
                                // this.state.eastTeams.map((team, i) => <li>{team.name}</li>)
                            )}
                        </ul>
                    </div>

                </section>
            </React.Fragment>
        );
    }

}
