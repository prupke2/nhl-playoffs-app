import React, { Component } from 'react';
import './Teams.css';

class Teams extends Component {

    getTime = () => {
        fetch('/time', {
          method: 'GET',
        })
        .then(results => results.json())
        .then(data => this.setState({currentTime: data.time}));
    }
    
    render() {
        return this.props.teams.teams.map((team, index) => {
            return (
                <div className="teamWrapper">
                    <span>({team.seed})</span>
                    <img className="teamLogo" src={team.logo} />
                    &nbsp;{team.name}
                </div>
              );
        });
    }
}

export default Teams;
