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
    userInput: "",
    count: 0,
    currentTime: "",
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    return state;
  }

  render() {

    // const charList = this.state.userInput.split('').map((char, index) => {
    //   return <Char character={char} 
    //   key={index} 
    //   clicked={() => this.deleteCharHandler(index)} />;
    // });

    // let persons = null;

    // if (this.state.showPersons) {
    //   persons = (
    //     <div>
    //       <Persons 
    //         persons = {this.state.persons}
    //         clicked = {this.deletePersonHandler}
    //         changed = {this.nameChangeHandler} />
    //     </div>
    //   );
    // }

    return (
        // <div className="App" style={appStyle}>
        //   <Cockpit 
        //   inputChanged = {this.inputChangedHandler}
        //   userInput = {this.state.userInput}
        //   showPersons = {this.state.showPersons}
        //   clicked = {this.togglePersonsHandler}
        //   currentTime = {this.state.currentTime}
        //   getTime = {this.getTime}
        //   />
        //   <p>{persons}</p>
        //   <p>{charList}</p>
        // </div>

      <div className="App">
        <header className="App-header">
          <img src={nhlLogo} className="Nhl-logo" alt="NHL logo" />


        </header>
        <main>
          <PlayoffTree 
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
