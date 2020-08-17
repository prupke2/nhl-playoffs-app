import React, { Component } from 'react';
import './Matchups.css';
import Matchups from './Matchups';
import { isThisTypeNode } from 'typescript';

export default class MatchupWrapper extends Component {
    constructor() {
		super();
        this.teamSelectHandler = this.teamSelectHandler.bind(this);
    }

    componentDidMount() {
      console.log("MOUNTING! ");
      this.setState({ 
        teams: this.props.teamData
      })
    }

    teamSelectHandler(teamShort, matchup, round) {

      let teamNextRound;
  
      let teams = this.state.teams.teams.filter((team) => {
  
          if (team.short === teamShort) {
              teamNextRound = team;
              if (team.selected !== true) {
                team.round = round + 1;
              }
                team.selected = true;
          }
          if (team.matchup === matchup && team.short !== teamShort) {
            if (team.selected === true) {
              team.round = round - 1;
            }
            team.selected = false;
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

    // teamSelectHandler(teamShort, matchup) {

    //   let teams = this.state.teams.teams.filter((team) => {

    //       if (team.short === teamShort) {
    //           team.selected = true;
    //       }
    //       if (team.matchup === matchup && team.short !== teamShort) {
    //           team.selected = false;
    //       }

    //       return team;
    //   });

    //   this.setState({
    //     teams: {
    //       teams: teams
    //     }
    //   })

    //   let saveTeams = this.props.saveTeams;
    //   saveTeams(this.state.teams);
    // }

    render() {

      if (this.props.teamData) {

        return (
            <React.Fragment>
                <section className="matchup-wrapper">
                    <div>
                      { () => 
                        {
                          if (this.props.round === 1) {
                            return(
                              <React.Fragment>
                                <h3 className="header align-left" id="west-matchups">west matchups</h3>
                                <h3 className="header align-left" id="east-matchups">east matchups</h3>
                              </React.Fragment>
                            );
                          }
                        }
                      }
                      <ul className="matchups">
                        <Matchups
                            teamData={this.props.teamData}
                            teamSelectHandler={this.teamSelectHandler}
                            round={this.props.round}
                        ></Matchups>
                      </ul>
                    </div>

                </section>

            </React.Fragment>
        );
      } else {
        return (<div />)
      }
    }

}
