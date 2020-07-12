import React, { Component } from 'react';
import './ByeTeams.css';
import teamData from './teamData.json';

export default class ByeTeams extends Component {

    constructor() {
		super();
        this.state = teamData;
    }
 
	onDragStart = (event, team) => {
        event.dataTransfer.setData("draggedTeamShort", team.short);
        event.dataTransfer.setData("draggedTeamType", team.type);
        event.dataTransfer.setData("draggedTeamConference", team.conference);
        const eligibleBox = team.type + "-droppable-box";
        const eligibleSpots = document.getElementById(eligibleBox);
        if (eligibleSpots !== null) {
            // put a green box around the spots you can drag it to
            eligibleSpots.style.border = "2px solid lightgreen";
        }
    }
    
	onDragOver = (event, type) => {
        event.preventDefault();
    }
    
    onDragEnd = (event) => {
        const eastBoxes = document.getElementById("east-droppable-box");
        const westBoxes = document.getElementById("west-droppable-box");
        eastBoxes.style.border = "2px solid black";
        westBoxes.style.border = "2px solid black";
    }

	onDrop = (event, droppedTeamType) => {
        console.log("state.byeSpots.teams: " + JSON.stringify(this.state.byeSpots.teams, null, 4));

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
            // console.log(draggedTeamConference + " does not match: " + droppedTeamConference);
            return;
        } else {
            // console.log("type " + draggedTeamConference + " matches conference: " + droppedTeamConference);
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
                });
            } else {
                // team was dragged from one slot to another

                // cycle through the teams to update the dragged and dropped slot types
                teams = this.state.byeSpots.teams.filter((team) => {
                    if (team.type === droppedTeamType) {
                        // console.log(team.short + " moving to slot: " + draggedTeamType);
                        // update team in target spot to the dragged team's old spot
                        team.type = draggedTeamType;
                    }

                    if (team.short === draggedTeamShort) {
                        // console.log(team.short + " moving to slot: " + droppedTeamType);

                        // update the dragged team's type so it stays in the dropped slot
                        team.type = droppedTeamType;
                    }

                });
            };

            this.setState({
                ...this.state,
                teams
            });
        };
    }

	render() {
		var columns = {
          east: [],
          east1: [],
          east2: [],
          east3: [],
          east4: [],
          west1: [],
          west2: [],
          west3: [],
          west4: [],
	      west: []
        }

		this.state.byeSpots.teams.forEach ((team) => {
        columns[team.type].push(
		    <div key={team.id} 
              onDragStart = {(event) => this.onDragStart(event, team)}
              onDragOver = {(event) => this.onDragStart(event, team.type)}
              onDragEnd = {(event) => this.onDragEnd(event)}
		      draggable
		      className="team-wrapper"
		    >
                <div className="logo-wrapper">
                    <div className="seed">
                        {team.seed}   
                    </div>
                    <img className="team-logo" 
                        draggable="false"
                        src={team.logo} 
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
        <section>
            <div className="drag-container drag-container-east">
                <div className="drag-east"
                    onDragOver={(event)=>this.onDragOver(event)}
                    onDrop={(event)=>{this.onDrop(event, "east")}}>
                    <span className="header align-right">east byes</span>
                    {columns.east}
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

            <div className="drag-container drag-container-west">
                <div className="drag-west"
                    onDragOver={(event)=>this.onDragOver(event)}
                    onDrop={(event)=>{this.onDrop(event, "west")}}>
                <span className="header align-left">west byes</span>
                {columns.west}
                </div>
            </div>
        </section>

	    );
  	}
}
