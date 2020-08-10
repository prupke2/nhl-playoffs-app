import React, { Component } from 'react';
import QualifierResults from './QualifierResults';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class Leaderboard extends Component {

	render() {
		return (
			<Tabs>
				<TabList>
					<div>
							<Tab><div className="tab">Round 1</div></Tab>
							{/* <Tab><div className="tab">Round 2</div></Tab> */}
					</div>
				</TabList>

				<TabPanel>
					<QualifierResults 
						userPicks = {this.props.userPicks}
					/>
				</TabPanel>

			</Tabs>
		);
	}
}
