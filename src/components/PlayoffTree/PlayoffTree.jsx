import React, { Component } from 'react';
import Teams from './Conference/Teams';
import './playoffTree.css';

const PlayoffTree = (props) => {

    // static getDerivedStateFromProps(props, state) {
	// 	// console.log({props});
	// 	return state;
    // }
    
		return (
			<div className="PlayoffTree">
				<section>
					<Teams 
						teams={props.eastTeams}>
					</Teams>
				</section>
				<section style={{width: "150px;"}}>
					<button
						onClick={props.getTime}
					>Get time
					</button>
					<p>Current Time: {props.currentTime}</p>
				</section>	
				<section>
					<Teams 
						teams={props.westTeams}>
					</Teams>
				</section>

			</div>
		);
    
}

export default React.memo(PlayoffTree);
