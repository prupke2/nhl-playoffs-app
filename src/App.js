import React, { Component} from 'react';
import nhlLogo from './assets/nhl.png';
import PlayoffTree from './components/PlayoffTree/PlayoffTree';
import eastTeams from './assets/eastTeams.json';
import westTeams from './assets/westTeams.json';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    eastTeams: eastTeams,
    westTeams: westTeams,
    currentTime: ""
  }

  getTime = () => {
    fetch('/time', {
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
          <img src={nhlLogo} className="Nhl-logo" alt="NHL logo" />
        </header>
        <main>
          <PlayoffTree 
            currentTime = {this.state.currentTime}
            getTime = {this.getTime}
            eastTeams = {this.state.eastTeams}
            westTeams = {this.state.westTeams}>
          </PlayoffTree> 
        </main> 
      </div>
    );
  };
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={nhlLogo} className="Nhl-logo" alt="NHL logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <PlayoffTree></PlayoffTree>
//     </div>
//   );
// }

export default App;
