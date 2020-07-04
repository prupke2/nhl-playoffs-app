import React, { Component } from 'react';
import './Teams.css';

class Teams extends Component {

    // className={`teamWrapper matchup team-${this.props.team.short}`}

    render() {
        return (
            <React.Fragment key={this.props.team.seed} className="TeamWrapper" >
                <div className="seed">
                    {this.props.team.seed}
                </div>
                <img className="teamLogo" 
                    src={this.props.team.logo} 
                    alt={this.props.team.short} 
                    title={this.props.team.name}
                />
            </React.Fragment>
        );
    }

}

export default Teams;
