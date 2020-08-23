import React, { Component } from 'react';
import QualifierResults from './QualifierResults';
import RoundResults from './RoundResults';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Leaderboard extends Component {

	render() {
		return (
			<Tabs defaultIndex={2}>
				<TabList>
					<div>
							<Tab><div className="tab small-tab">Qualifiers</div></Tab>
							<Tab><div className="tab small-tab">Conf Quarterfinals</div></Tab>
							<Tab><div className="tab small-tab">Conf Semifinals</div></Tab>
					</div>
				</TabList>

				<TabPanel>
					<QualifierResults 
						userPicks = {this.props.userPicks}
					/>
				</TabPanel>
				<TabPanel>
					<RoundResults 
						picks = {this.props.quarterfinalPicks}
						picksPerUser = {8}
					/>
				</TabPanel>
				<TabPanel>
					<RoundResults 
						picks = {this.props.semifinalPicks}
						picksPerUser = {4}
						/>
				</TabPanel>
			</Tabs>
		);
	}
}
