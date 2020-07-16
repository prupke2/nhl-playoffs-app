import React, { Component} from 'react';
import hockeyIcon from './assets/hockey_icon_large.png';
import ByeTeams from './components/ByeTeams/ByeTeams';
import QualifyingRound from './components/QualifyingRound/QualifyingRound'
import matchups from './assets/matchups.json';
import { Sidebar } from './components/HelperComponents/HelperComponents';

import './App.css';

class App extends Component {

  state = {
    matchups: matchups,
    eastTeamByeChoices: new Array(4).fill(null),
    westTeamByeChoices: new Array(4).fill(null),
    currentTime: null,
    byeStatus: "unsaved",
    byeTeams: null
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
    console.log("teams: " + teams);
    this.setState({byeStatus: "ready", byeTeams: teams})
  }

  saveByes = (teams) => {
    fetch('/api/save_byes', {
      method: 'POST',
      body: JSON.stringify({ teams: teams })
    })
    .then(results => results.json())
    .then(data => this.setState({byeStatus: data.status, data: teams}));
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
        
        {/* <header className="left-header">
        </header> */}
          <ByeTeams 
            saveByes= {this.saveByesToState}
            byeStatus={this.state.byeStatus}
          />    
          <QualifyingRound />
        {/* <header className="right-header" /> */}

        <Sidebar 
          className="right-aside"
        />

      </main>
    );
  };
};

export default App;
