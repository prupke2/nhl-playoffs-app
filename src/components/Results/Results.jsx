import React, { Component } from 'react';
import QualifierResults from './QualifierResults';
import RoundResults from './RoundResults';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Leaderboard extends Component {

	render() {
		return (
			<Tabs defaultIndex={3}>
				<TabList>
					<div>
							<Tab><div className="tab small-tab">Qualifiers</div></Tab>
							<Tab><div className="tab small-tab">Conf Quarterfinals</div></Tab>
							<Tab><div className="tab small-tab">Conf Semifinals</div></Tab>
							<Tab><div className="tab small-tab">Final 4</div></Tab>
					</div>
				</TabList>

				<TabPanel>
					{this.props.userPicks !== null && (
					<QualifierResults 
						userPicks = {this.props.userPicks}
					/>
					)}
				</TabPanel>
				<TabPanel>
					{this.props.quarterfinalPicks !== null && (
					<RoundResults 
						picks = {this.props.quarterfinalPicks}
						picksPerUser = {8}
					/>
					)}
				</TabPanel>
				<TabPanel>
					{this.props.semifinalPicks !== null && (
					<RoundResults 
						picks = {this.props.semifinalPicks}
						picksPerUser = {4}
						/>
					)}
				</TabPanel>
				<TabPanel>
					{this.props.conferenceFinalPicks !== null && (
					<RoundResults 
						picks = {this.props.conferenceFinalPicks}
						picksPerUser = {3}
					/>
					)}
				</TabPanel>
			</Tabs>
		);
	}
}
