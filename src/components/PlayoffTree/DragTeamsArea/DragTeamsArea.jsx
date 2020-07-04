import React, { Component } from 'react';
import './DragTeamsArea.css';
import { Droppable, Draggable } from 'react-drag-and-drop';
import Teams from './Teams/Teams';

class DragTeamsArea extends Component {
    render() {
        console.log(this.props);
        return this.props.teams.teams.map((team, index) => {
            return(
                <div>
                    <Draggable
                        className="LogoWrapper"
                        type={this.props.teams.conference}
                        data={team.short}
                    >
                        <Teams 
                            team={team}>
                        </Teams> 
                    </Draggable>

                    <Droppable
                        // `teamWrapper ${this.props.conference}`
                        types={[this.props.teams.conference]}  
                        onDrop={this.onDrop.bind(this)}>
                        <div id={`${this.props.teams.conference}-choice-${index + 1}` } className={`teamWrapper ${this.props.teams.conference}` }>
                            <div className="watermark">{index + 1}</div>
                        </div>
                    </Droppable>
                </div>
            );
        });
    }

    onDrop(data) {
        console.log(data)
        return(
            <div>Hello</div>
        );
        // => banana 
    }
}

export default DragTeamsArea;

/* 
					<ul>
						<DragTeamsArea
							conference="east"
							position="1">
						</DragTeamsArea>

						<DragTeamsArea
							conference="east"
							position="2">
						</DragTeamsArea>
						<DragTeamsArea
							conference="east"
							position="3">
						</DragTeamsArea>
						<DragTeamsArea
							conference="east"
							position="4">
						</DragTeamsArea>
					</ul>
					<ul>
						<DragTeamsArea
							conference="west"
							position="1">
						</DragTeamsArea>
						<DragTeamsArea
							conference="west"
							position="2">
						</DragTeamsArea>
						<DragTeamsArea
							conference="west"
							position="3">
						</DragTeamsArea>
						<DragTeamsArea
							conference="west"
							position="4">
						</DragTeamsArea>
					</ul> */	
