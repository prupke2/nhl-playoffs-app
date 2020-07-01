import React from 'react';
import Teams from './Teams/Teams';
import './PlayoffTree.css';
import DragTeamsArea from './DragTeamsArea/DragTeamsArea';

const PlayoffTree = (props) => {

    
		return (
			<div className="PlayoffTreeWrapper">
				<section className="ByeRound">
					<ul>
						<Teams 
							teams={props.eastTeamByes}>
						</Teams>
					</ul>
						<DragTeamsArea
							conference="east">
						</DragTeamsArea>
					<ul>
						<Teams
							teams={props.westTeamByes}>
						</Teams>
					</ul>
						<DragTeamsArea
							conference="west">
						</DragTeamsArea>			
				</section>
				
				<section className="PlayoffTree">
					<ul>
						<Teams 
							teams={props.eastTeamMatchups}>
						</Teams>
					</ul>	
					<ul>
						<Teams 
							teams={props.westTeamMatchups}>
						</Teams>
					</ul>	
				</section>
			</div>
		);
    
}

export default React.memo(PlayoffTree);
