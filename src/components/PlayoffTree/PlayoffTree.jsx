import React, { Component } from 'react';
import Teams from './Conference/Teams';
import './playoffTree.css';

// var data = {
//     content: {
//         people: [
//           {
//             name: "Test",
//             age : 24
//           },
//           {
//             name: "Foo",
//             age: 25
//           }
//         ]
//      }
//   };
  
//   var App = React.createClass({
//     render: function() {
//       var people = data.content.people.map(function(person){
//         return (<div>{person.name}</div>);
//       });
  
//       return (<div>{people}</div>)
//     }
//   }); 

// var Teams = React.createClass({
//     render: function() {
//         var teams = teamsList.teams.map(function(team) {
//             return (
//                 <div>
//                     {team.name}
//                 </div>
//             )
//         });

//         return (<div>{teams}</div>)
//     }
// });

// const PlayoffTree = (props) => {


//     return (
//         <section className="Playoff-tree">
//             <div>{props}
//             </div>
//         </section>
//     )
// }

class PlayoffTree extends Component {
    static getDerivedStateFromProps(props, state) {
		// console.log({props});
		return state;
    }
    
    render() {
		return (
			<div className="PlayoffTree">
				<section>
					<Teams 
						teams={this.props.eastTeams}>
					</Teams>
				</section>	
				<section>
					<Teams 
						teams={this.props.westTeams}>
					</Teams>
				</section>
			</div>
		);
    }
}

export default React.memo(PlayoffTree);
