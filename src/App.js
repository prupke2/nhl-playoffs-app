import React, { Component} from 'react';
import hockeyIcon from './assets/hockey_icon_large.png';
import ByeTeams from './components/ByeTeams/ByeTeams';
import QualifyingRound from './components/QualifyingRound/QualifyingRound';
import Results from './components/Results/Results';
import Leaderboard from './components/Leaderboard/Leaderboard';
import SemiFinals from './components/SemiFinals/SemiFinals';
import { Sidebar, Button, Input, Footer } from './components/HelperComponents/HelperComponents';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import MatchupWrapper from './components/MatchupWrapper/MatchupWrapper';
import MatchupInstructions from './components/MatchupWrapper/MatchupInstructions/MatchupInstructions';
import conferenceSemiFinals from './assets/semiFinalRoundData.json';
import qualifyingTeams from './assets/qualifyingRoundData.json';
import final4Teams from './assets/final4data.json';


class App extends Component {

  state = {
    byeTeamsStatus: "ready",
    byeTeams: null,
    qualifyingTeamsStatus: "not_ready",
    qualifyingTeams: null,
    teams: null,
    name: null,
    nameStatus: null,
    saveStatus: null,
    saveMessage: null,
    club: null,
    leaders: null,
    user: null,
    userPicks: null,
    quarterfinalPicks: null,
    semifinalPicks: null,
    conferenceFinalPicks: null
  }

  componentDidMount() {
    let user = this.getCookie("user");
    if (this.state.user === null) {
      this.setState({user: user})
    }
    this.getLeaders();
    this.getUserPicks();
    this.getQuarterfinalPicks();
    this.getSemifinalPicks();
    this.getConferenceFinalPicks();
  }

  getLeaders = () => {
    fetch('/api/leaderboard', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({ leaders: data.leaders }));
  }

  getUserPicks = () => {
    fetch('/api/user_picks', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({ userPicks: data.picks }));
  }

  getQuarterfinalPicks = () => {
    fetch('/api/quarterfinal_picks', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({ quarterfinalPicks: data.picks }));
  }
  
  getSemifinalPicks = () => {
    fetch('/api/semifinal_picks', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({ semifinalPicks: data.picks }));
  }

  getConferenceFinalPicks = () => {
    fetch('/api/conferencefinal_picks', {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({ conferenceFinalPicks: data.picks }));
  }

  checkIfNameIsTaken = (name) => {
    fetch('/names/' + name, {
      method: 'GET',
    })
    .then(results => results.json())
    .then(data => this.setState({ nameStatus: data.status }));
  }

  checkIfReady = (check) => {
    let user = this.getCookie("user");
    this.setState({user: user});

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
    } else if (check === "byeTeams") {
      for (let i=1; i < 8; i++) {
        if ((this.state.byeTeams[i].type === "east") || (this.state.byeTeams[i].type === "west")) {
          this.setState({byeTeamsStatus: "not_ready"});
          return
        }
      }
      if (count === 0) {
        this.setState({byeTeamsStatus: "ready"});
      }
    } else if (check === "conferenceSemiFinals") {
        for (let i=0; i < 8; i++) {
          if (this.state.teams[i].selected === true) {
            count += 1
          }
        }
        if (count >= 4) {
          this.setState({qualifyingTeamsStatus: "ready"});
        }
    } else {
      // final 4
      for (let i=0; i < 6; i++) {
        if (this.state.teams[i].selected === true) {
          count += 1
        }
      }
      if (count >= 3) {
        this.setState({qualifyingTeamsStatus: "ready"});
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

  saveConferenceSemiFinalsToState = (teams) => {
    this.setState({
      teams: teams.teams
    }, () => {
      this.checkIfReady("conferenceSemiFinals")
    });
  }

  saveTeamsToState = (teams) => {
    this.setState({
      teams: teams.teams
    }, () => {
      this.checkIfReady("final4")
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
    }

    this.setState( {
      user: name
    }, () => {
      if (name !== null) {
        this.setState({nameStatus: "available"});
      }
    });
  }

  saveRound = () => {
    fetch('/api/save_round', {
      method: 'POST',
      body: JSON.stringify(
        { 
          name: this.state.user,
          picks: this.state.teams
        }
      )
    })
    .then(results => results.json())
    .then(data => this.setState({saveStatus: data.status, saveMessage: data.message}))
  }

  saveToDB = () => {
    let club = this.getRequests().club;
    this.setCookie("club", club);
    this.setCookie("user", this.state.name);

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
    .then(data => this.setState({saveStatus: data.status, saveMessage: data.message}))
  }

  getCookie = (cookieName) => {
    let name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie = (string, value) => {
    const expiry = new Date(); 
    expiry.setDate(expiry.getDate() + 90)
    document.cookie = string + "=" + value + "; expires=" + expiry
  }

  render() {
    return (
      <main>
        <section>
          <h1>2020 NHL Playoff Pool</h1>
        </section>
        <Sidebar 
          className="left-aside"
          image={hockeyIcon}
        />

        <Tabs defaultIndex={2}>
          <TabList>
            <div>
              <Tab><div className="tab">Leaderboard</div></Tab>
              <Tab><div className="tab">Full Results</div></Tab>
            </div>
          </TabList>
          
          {/* <TabPanel>
            <h2>Final 4</h2>
            <MatchupInstructions 
            />
            <MatchupWrapper
              saveTeams={this.saveTeamsToState}
              teamData = {final4Teams}
              round = {1}
              cup = {true}
            />
            <Input 
              type="text"
              nameChanged={this.nameChangeHandler}
              nameStatus={this.state.nameStatus}
              user={this.state.user}
            />
            <Button 
              name = {this.state.user}
              save = {this.saveRound}
              nameStatus = {this.state.nameStatus}
              qualifyingTeamsStatus = {this.state.qualifyingTeamsStatus}
              label="Submit picks"
              saveStatus = {this.state.saveStatus}
              saveMessage = {this.state.saveMessage}
            /> 
          </TabPanel> */}
          <TabPanel>
            <ul className="leaders">
              <Leaderboard 
                leaders={this.state.leaders}
                user={this.state.user}
              />
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="results">
              <Results
                user={this.state.user}
                userPicks={this.state.userPicks}
                quarterfinalPicks={this.state.quarterfinalPicks}
                semifinalPicks={this.state.semifinalPicks}
                conferenceFinalPicks={this.state.conferenceFinalPicks}
              />
            </ul>
          </TabPanel>       
        </Tabs>

        {/* 
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
        /> */}
        <Sidebar 
          className="right-aside"
        />
        <Footer />
      </main>
    );
  };
};

export default App;
