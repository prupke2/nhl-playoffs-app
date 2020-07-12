import React, { Component} from 'react';
import hockeyIcon from './assets/hockey_icon_large.png';
import ByeTeams from './components/ByeTeams/ByeTeams';
import matchups from './assets/matchups.json';

import './App.css';

class App extends Component {

  state = {
    matchups: matchups,
    eastTeamByeChoices: new Array(4).fill(null),
    westTeamByeChoices: new Array(4).fill(null)
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
          <ByeTeams />        
        </main> 
      </div>
    );
  };
};

export default App;
