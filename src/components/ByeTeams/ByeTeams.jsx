import React, { Component } from 'react';
import './ByeTeams.css';
import byeTeamData from './byeTeamData.json';

export default class ByeTeams extends Component {

    constructor() {
		super();
        this.state = byeTeamData;
    }
 
	onDragStart = (event, team) => {
        event.dataTransfer.setData("draggedTeamShort", team.short);
        event.dataTransfer.setData("draggedTeamType", team.type);
        event.dataTransfer.setData("draggedTeamConference", team.conference);
        const eligibleBox = team.type + "-droppable-box";
        const eligibleSpots = document.getElementById(eligibleBox);
        if (eligibleSpots !== null) {
            // put a green box around the spots you can drag it to
            eligibleSpots.style.border = "2px solid var(--eligible)";
        }

        // sets the cursor to a closed hand while they are grabbing a box
        const box = document.getElementById(team.id);
        box.style.cursor = "grabbing";
    }
    
	onDragOver = (event) => {
        event.preventDefault();
    }
    
    onDragEnd = (event, id) => {

        const eastBoxes = document.getElementById("east-droppable-box");
        const westBoxes = document.getElementById("west-droppable-box");
        eastBoxes.style.border = "2px solid black";
        westBoxes.style.border = "2px solid black";

        // in case the user drops a box in the wrong spot, this sets the cursor back to an open hand instead of closed
        const box = document.getElementById(id);
        box.style.cursor = "grab";
    }

	onDrop = (event, droppedTeamType) => {

        event.preventDefault();
        const droppedTeamConference = droppedTeamType.slice(0,4);

        let draggedTeamShort = event.dataTransfer.getData("draggedTeamShort");
        let draggedTeamType = event.dataTransfer.getData("draggedTeamType");
        let draggedTeamConference = event.dataTransfer.getData("draggedTeamConference");

        // when dropping anywhere, put all borders back to normal
        const eastBoxes = document.getElementById("east-droppable-box");
        const westBoxes = document.getElementById("west-droppable-box");
        eastBoxes.style.border = "2px solid black";
        westBoxes.style.border = "2px solid black";

        // if east is dragged into west (or vice versa), don't allow it to stay.
        if (draggedTeamConference !== droppedTeamConference) {
            return;
        } else {
            let teams;

            // if team was dropped from the byes area
            if (draggedTeamType === droppedTeamConference) {

                // cycle through the teams and update their types
                teams = this.state.byeSpots.teams.filter((team) => {
                    if (team.type === droppedTeamType) {
                        // if there is a team in this slot already, move it back to the byes area
                        team.type = draggedTeamType;
                    }
                    if (team.short === draggedTeamShort) {
                        // update the dragged team's type so it stays in the dropped slot
                        team.type = droppedTeamType;
                    }
                    return team;
                });
            } else {
                // team was dragged from one slot to another

                // cycle through the teams to update the dragged and dropped slot types
                teams = this.state.byeSpots.teams.filter((team) => {
                    if (team.type === droppedTeamType && droppedTeamType !== "east" && droppedTeamType !== "west") {
                        // update team in target spot to the dragged team's old spot
                        team.type = draggedTeamType;
                    }
                    if (team.short === draggedTeamShort) {
                        // update the dragged team's type so it stays in the dropped slot
                        team.type = droppedTeamType;
                    }
                    return team;
                });
            };

            this.setState({
                ...this.state,
                teams
            });

            let saveByes = this.props.saveByes;
            saveByes(teams);
        };
    }

	render() {
		var columns = {
          west: [],
          west1: [],
          west2: [],
          west3: [],
          west4: [],
          east1: [],
          east2: [],
          east3: [],
          east4: [],
          east: []
        }

		this.state.byeSpots.teams.forEach ((team) => {
        columns[team.type].push(
            <div key={team.id} 
                id={team.id}
                onDragStart = {(event) => this.onDragStart(event, team)}
                onDragOver = {(event) => this.onDragOver(event)}
                onDragEnd = {(event) => this.onDragEnd(event, team.id)}
                draggable
                className="team-wrapper"
		    >
                <div className="logo-wrapper">
                    <div className="seed">
                        {team.seed}   
                    </div>
                    <img className="team-logo" 
                        draggable="false"
                        src={`/teamLogos/${team.short}.png`}
                        alt={team.short} 
                        title={team.name}
                    />
                </div>
                <div className="team-info">
                    <span className="team-short">{team.short}</span>
                </div>
		      
		    </div>
		  );
        });

	    return (
            <React.Fragment>
                <h2 className="round-robin">Bye Team Round Robin</h2>
                <div className="instructions">
                    <ul>
                        <li><span className="scoring">Bonus round -</span>  Drag and drop the teams in the order you think they will finish.</li>
                        <li>
                            <span className="scoring">Scoring: </span> 
                            <span className="num">2 points</span> for each conference that has the order correct (must be perfect).
                        </li>   
                    </ul>

                </div>
                <section className="bye-team-round">

                    <div className="drag-container drag-container-west">
                        <div className="drag-west"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>{this.onDrop(event, "west")}}>
                            <h3 className="header align-right">west byes</h3>
                        {columns.west}
                        </div>
                    </div>

                    <div className="drop-container" id="west-droppable-box">
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "west1")}>
                            <span className="header small-header">west 1</span>
                            {columns.west1}
                        </div>	       
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "west2")}>
                            <span className="header small-header">west 2</span>
                            {columns.west2}
                        </div>	 
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "west3")}>
                            <span className="header small-header">west 3</span>
                            {columns.west3}
                        </div>	 
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "west4")}>
                            <span className="header small-header">west 4</span>
                            {columns.west4}
                        </div>	
                    </div>  

                    <div className="drop-container" id="east-droppable-box">
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "east1")}>
                            <span className="header small-header">east 1</span>
                            {columns.east1}
                        </div>	       
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "east2")}>
                            <span className="header small-header">east 2</span>
                            {columns.east2}
                        </div>	 
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "east3")}>
                            <span className="header small-header">east 3</span>
                            {columns.east3}
                        </div>	 
                        <div className="droppable"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>this.onDrop(event, "east4")}>
                            <span className="header small-header">east 4</span>
                            {columns.east4}
                        </div>	
                    </div>  

                    <div className="drag-container drag-container-east">
                        <div className="drag-east"
                            onDragOver={(event)=>this.onDragOver(event)}
                            onDrop={(event)=>{this.onDrop(event, "east")}}>
                            <h3 className="header align-left">east byes</h3>
                            {columns.east}
                        </div>
                    </div>

                </section>

            </React.Fragment>

	    );
  	}
}
