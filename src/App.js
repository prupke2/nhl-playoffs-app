import React, { Component} from 'react';
import hockeyIcon from './assets/hockey_icon_large.png';
import ByeTeams from './components/ByeTeams/ByeTeams';
import QualifyingRound from './components/QualifyingRound/QualifyingRound';
import { Sidebar, Button, Input, Footer } from './components/HelperComponents/HelperComponents';

import './App.css';

class App extends Component {

  state = {
    byeTeamsStatus: "not_ready",
    byeTeams: null,
    qualifyingTeamsStatus: "not_ready",
    qualifyingTeams: null,
    name: null,
    nameStatus: null,
    saveStatus: null,
    saveMessage: null,
    club: null
  }

  // function to test the api quickly
  getTime = () => {
    fetch('/api/time', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({currentTime: data.time}));
  }

  checkIfNameIsTaken = (name) => {
    console.log("name: " + name);
    fetch('/names/' + name, {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({nameStatus: data.status}))
    .then(console.log("Status: " + this.state.nameStatus));
  }

  checkIfReady = (check) => {
    let count = 0;

    if (check === "qualifyingTeams") {
      for (let i=0; i < 16; i++) {
        if (this.state.qualifyingTeams.teams[i].selected === true) {
          count += 1
        }
      }
      if (count >= 8) {
        this.setState({qualifyingTeamsStatus: "ready"});
      }
    } else {
      for (let i=1; i < 8; i++) {
        console.log("team: " + JSON.stringify(this.state.byeTeams[i], null, 4))
        if ((this.state.byeTeams[i].type === "east") || (this.state.byeTeams[i].type === "west")) {
          console.log("Not ready");
          this.setState({byeTeamsStatus: "not_ready"});
          return
        }
      }
      if (count === 0) {
        console.log("Ready.");
        this.setState({byeTeamsStatus: "ready"});
      }
    }
  }

  saveByesToState = (teams) => {
    this.setState({
      byeTeams: teams
    }, () => {
      this.checkIfReady("byeTeams");
    });
  }

  saveQualifyingTeamsToState = (teams) => {
    this.setState({
      qualifyingTeams: teams
    }, () => {
      this.checkIfReady("qualifyingTeams");
    });    
  }

  getRequests = () => {
    let s1 = window.location.search.substring(1, window.location.search.length).split('&'),
        r = {}, s2, i;
    for (i = 0; i < s1.length; i += 1) {
        s2 = s1[i].split('=');
        r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
    }
    return r;
  }

  nameChangeHandler = (name) => {
    if (name.length === 0) {
      this.setState( {
        nameStatus: null
      })
      return
    }

    this.setState( {
      name: name
    }, () => {
      if (name !== null) {
        this.checkIfNameIsTaken(name);
      }
    });
  }

  saveToDB = () => {
    let club = this.getRequests().club
    console.log(this.state.byeTeams, this.state.qualifyingTeamsStatus);
    fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify(
        { 
          name: this.state.name,
          byeTeams: this.state.byeTeams,
          qualifyingTeams: this.state.qualifyingTeams,
          club: club
        }
      )
    })
    .then(results => results.json())
    .then(data => this.setState({saveStatus: data.status, saveMessage: data.message}));
  }

  render() {

    console.log("status: " + this.state.saveStatus);
    console.log("message: " + this.state.saveMessage);

    return (
      <main>
        <section>
          <h1>2020 NHL Playoff Pool</h1>
        </section>
        <ul>
          <li>Select your picks in two minutes.</li>
          <li>No signup required.</li>
        </ul>
        <Sidebar 
          className="left-aside"
          image={hockeyIcon}
        />
        <QualifyingRound 
          saveQualifiers={this.saveQualifyingTeamsToState}
          qualifyingTeamsStatus={this.state.qualifyingTeamsStatus}
        />
        <ByeTeams 
          saveByes= {this.saveByesToState}
          byeStatus={this.state.byeStatus}
        />    
        <Input 
          type="text"
          nameChanged={this.nameChangeHandler}
          nameStatus={this.state.nameStatus}
          value={this.state.name}
        />
        <Button 
          name = {this.state.name}
          save = {this.saveToDB}
          nameStatus = {this.state.nameStatus}
          byeTeamsStatus ={this.state.byeTeamsStatus}
          qualifyingTeamsStatus = {this.state.qualifyingTeamsStatus}
          label="Submit picks"
          saveStatus = {this.state.saveStatus}
          saveMessage = {this.state.saveMessage}
        />
        <Sidebar 
          className="right-aside"
        />
        <Footer />
      </main>
    );
  };
};

export default App;
