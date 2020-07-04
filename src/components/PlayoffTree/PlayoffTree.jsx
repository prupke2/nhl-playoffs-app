import React, { Component } from 'react';
import './PlayoffTree.css';
import DragTeamsArea from './DragTeamsArea/DragTeamsArea';

class PlayoffTree extends Component {

	render() {
		return (
			<div className="PlayoffTreeWrapper">
				<section className="ByeRound">
					<div className="EastByesWrapper">
						<DragTeamsArea
							teams={this.props.eastTeamByes}
							>
						</DragTeamsArea>
					</div>
					<div className="WestByesWrapper">
						<DragTeamsArea
							teams={this.props.westTeamByes}
							>
						</DragTeamsArea>
					</div>
				</section>
				{/* <section className="PlayoffTree">
					<ul>
						<Teams 
							teams={this.props.eastTeamMatchups}>
						</Teams>
					</ul>	
					<ul>
						<Teams 
							teams={this.props.westTeamMatchups}>
						</Teams>
					</ul>	
				</section> */}
			</div>
		);
	}

	// onDrop(data) {
    //     console.log(data)
    //     // => banana 
    // }

}

export default React.memo(PlayoffTree);
