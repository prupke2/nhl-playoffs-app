import React, { Component} from 'react';
import hockeyIcon from './assets/hockey_icon_large.png';
import ByeTeams from './components/ByeTeams/ByeTeams';
import QualifyingRound from './components/QualifyingRound/QualifyingRound'
import matchups from './assets/matchups.json';
import { Sidebar, Button, DisabledButton } from './components/HelperComponents/HelperComponents';

import './App.css';

class App extends Component {

  state = {
    byeStatus: "not_ready",
    byeTeams: null,
    qualifyingTeamsStatus: "not_ready",
    qualifyingTeams: null
  }

  // function to test the api quickly
  getTime = () => {
    fetch('/api/time', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({currentTime: data.time}));
  }

  saveByesToState = (teams) => {
    this.setState({byeTeams: teams})
    console.log("state: " + JSON.stringify(this.state, null, 4))
  }

  saveQualifyingTeamsToState = (teams) => {
    this.setState({qualifyingTeams: teams})
    console.log("state: " + JSON.stringify(this.state, null, 4))
  }

  save = (name) => {
    fetch('/api/save_byes', {
      method: 'POST',
      body: JSON.stringify({ teams: this.state.byeTeams })
    })
    .then(results => results.json())
    .then(data => this.setState({byeStatus: data.status, data: this.state.byeTeams}));
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {

    return (
      <main>
        <Sidebar 
          className="left-aside"
          image={hockeyIcon}
        />
        <ByeTeams 
          saveByes= {this.saveByesToState}
          byeStatus={this.state.byeStatus}
        />    
        <QualifyingRound 
          saveQualifiers={this.saveQualifyingTeamsToState}
          qualifyingTeamsStatus={this.state.qualifyingTeamsStatus}
        />

        <input type="name" />Name:

        <Button 
          save= {this.saveByes}
          byeStatus={this.state.byeStatus}
          qualifyingTeamsStatus={this.state.qualifyingTeamsStatus}
          label="Save"
        />

        <Sidebar 
          className="right-aside"
        />
      </main>
    );
  };
};

export default App;
