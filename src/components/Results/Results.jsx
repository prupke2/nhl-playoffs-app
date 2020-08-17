import React, { Component } from 'react';
import QualifierResults from './QualifierResults';
import QuarterfinalResults from './QuarterfinalResults';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Leaderboard extends Component {

	render() {
		return (
			<Tabs defaultIndex={1}>
				<TabList>
					<div>
							<Tab><div className="tab small-tab">Qualifiers</div></Tab>
							<Tab><div className="tab small-tab">Conf Quarterfinals</div></Tab>
					</div>
				</TabList>

				<TabPanel>
					<QualifierResults 
						userPicks = {this.props.userPicks}
					/>
				</TabPanel>
				<TabPanel>
					<QuarterfinalResults 
						quarterfinalPicks = {this.props.quarterfinalPicks}
					/>
				</TabPanel>
			</Tabs>
		);
	}
}
