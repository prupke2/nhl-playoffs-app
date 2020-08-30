import React, { Component } from 'react';
import './Matchups.css';
import Matchups from './Matchups';
import ConferenceHeaders from './ConferenceHeaders';
import Cup from './Cup/Cup';

export default class MatchupWrapper extends Component {
  constructor() {
  super();
      this.teamSelectHandler = this.teamSelectHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ 
      teams: this.props.teamData
    })
  }

  teamSelectHandler(teamShort, matchup, round) {

    let eastWinner, westWinner, eastSeed, westSeed, winner;

    // cycle through and update teams 
    let teams = this.state.teams.teams.filter((team) => {
      if (team.short === teamShort) {
        team.selected = true;
        if (team.matchup == "w1") {
          westWinner = team.short;
          westSeed = team.seed;
        }
        if (team.matchup == "e1") {
          eastWinner = team.short;
          eastSeed = team.seed;
        }
        if (team.matchup == "finals") {
          winner = team.short;
        }
      }
      if (team.matchup === matchup && team.short !== teamShort) {
        team.selected = false;
      }

      return team;
    });

    // cycle through again and update the next round if necessary
    teams = teams.filter((team) => {

      if (team.id == "ef" && eastWinner) {
        team.short = eastWinner;
        team.seed = eastSeed;
      }
      if (team.id == "wf" && westWinner) {
        team.short = westWinner;
        team.seed = westSeed;
      }
      if (team.id == "winner" && winner) {
        team.short = winner;
      }

      return team;
    });

    this.setState({
      teams: {
        teams: teams
      }
    })      

    let saveTeams = this.props.saveTeams;
    saveTeams(this.state.teams);
  }

  render() {

    if (this.props.teamData) {
      return (
        <section className="matchup-wrapper">
          <div>
            <ConferenceHeaders 
              round = {this.props.round}
            />
            <Cup 
              cup = {this.props.cup}
              teamData={this.props.teamData}
            />
            <ul className="matchups">
              <Matchups
                teamData={this.props.teamData}
                teamSelectHandler={this.teamSelectHandler}
                round={this.props.round}
              ></Matchups>
            </ul>
          </div>
        </section>
      );
    } else {
      return (<div />)
    }
  }
}
