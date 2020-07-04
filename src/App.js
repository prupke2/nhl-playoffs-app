import React, { Component} from 'react';
import hockeyIcon from './assets/hockey_icon_large.png';
import PlayoffTree from './components/PlayoffTree/PlayoffTree';
import eastTeamByes from './assets/eastTeamByes.json';
import westTeamByes from './assets/westTeamByes.json';
import eastTeamMatchups from './assets/eastTeamMatchups.json';
import westTeamMatchups from './assets/westTeamMatchups.json';
import './App.css';

class App extends Component {

  state = {
    eastTeamByes: eastTeamByes,
    westTeamByes: westTeamByes,
    eastTeamMatchups: eastTeamMatchups,
    westTeamMatchups: westTeamMatchups,
    eastTeamByeChoices: new Array(4).fill(null),
    westTeamByeChoices: new Array(4).fill(null),
    currentTime: ""
  }

  getTime = () => {
    fetch('/api/time', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({currentTime: data.time}));
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={hockeyIcon} className="logo" alt="Hockey logo" />
        </header>
        <main>
          <PlayoffTree 
            currentTime = {this.state.currentTime}
            getTime = {this.getTime}
            eastTeamByes = {this.state.eastTeamByes}
            eastTeamMatchups = {this.state.eastTeamMatchups}
            westTeamByes = {this.state.westTeamByes}
            westTeamMatchups = {this.state.westTeamMatchups}
            >
          </PlayoffTree> 
        </main> 
      </div>
    );
  };
};

export default App;
