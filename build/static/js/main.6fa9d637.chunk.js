(this.webpackJsonpplayoffs=this.webpackJsonpplayoffs||[]).push([[0],[,,,,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a.p+"static/media/hockey_icon_large.cc443e14.png"},function(e){e.exports=JSON.parse('{"byeSpots":{"teams":[{"id":"e1","conference":"east","type":"east","name":"Boston Bruins","short":"BOS","seed":1},{"id":"e2","conference":"east","type":"east","name":"Tampa Bay Lightning","short":"TBL","seed":2},{"id":"e3","conference":"east","type":"east","name":"Washington Capitals","short":"WSH","seed":3},{"id":"e4","conference":"east","type":"east","name":"Philadelphia Flyers","short":"PHI","seed":4},{"id":"w1","conference":"west","type":"west","name":"St. Louis Blues","short":"STL","seed":1},{"id":"w2","conference":"west","type":"west","name":"Colorado Avalanche","short":"COL","seed":2},{"id":"w3","conference":"west","type":"west","name":"Vegas Golden Knights","short":"VGK","seed":3},{"id":"w4","conference":"west","type":"west","name":"Dallas Stars","short":"DAL","seed":4}]}}')},function(e){e.exports=JSON.parse('{"teams":[{"id":"e1","conference":"east","name":"Philadelphia Flyers","short":"PHI","seed":1,"matchup":"e1","selected":null},{"id":"e8","conference":"east","name":"Montreal Canadiens","short":"MTL","seed":12,"matchup":"e1","selected":null},{"id":"e2","conference":"east","name":"Washington Capitals","short":"WSH","seed":2,"matchup":"e2","selected":null},{"id":"e7","conference":"east","name":"New York Islanders","short":"NYI","seed":7,"matchup":"e2","selected":null},{"id":"3","conference":"east","name":"Boston Bruins","short":"BOS","seed":3,"matchup":"e3","selected":null},{"id":"e6","conference":"east","name":"Carolina Hurricanes","short":"CAR","seed":6,"matchup":"e3","selected":null},{"id":"e4","conference":"east","name":"Tampa Bay Lightning","short":"TBL","seed":4,"matchup":"e4","selected":null},{"id":"e5","conference":"east","name":"Columbus Blue Jackets","short":"CBJ","seed":9,"matchup":"e4","selected":null},{"id":"w1","conference":"west","name":"Vegas Golden Knights","short":"VGK","seed":1,"matchup":"w1","selected":null},{"id":"w8","conference":"west","name":"Chicago Blackhalks","short":"CHI","seed":12,"matchup":"w1","selected":null},{"id":"w2","conference":"west","name":"Colorado Avalanche","short":"COL","seed":2,"matchup":"w2","selected":null},{"id":"w7","conference":"west","name":"Arizona Coyotes","short":"ARI","seed":11,"matchup":"w2","selected":null},{"id":"w3","conference":"west","name":"Dallas Stars","short":"DAL","seed":3,"matchup":"w3","selected":null},{"id":"w6","conference":"west","name":"Calgary Flames","short":"CGY","seed":8,"matchup":"w3","selected":null},{"id":"w4","conference":"west","name":"St. Louis Blues","short":"STL","seed":4,"matchup":"w4","selected":null},{"id":"w5","conference":"west","name":"Vancouver Canucks","short":"VAN","seed":7,"matchup":"w4","selected":null}]}')},function(e){e.exports=JSON.parse('{"teams":[{"id":"e1","conference":"east","name":"Pittsburgh Penguins","short":"PIT","seed":1,"matchup":"e1","selected":null},{"id":"e5","conference":"east","name":"Montreal Canadiens","short":"MTL","seed":5,"matchup":"e1","selected":null},{"id":"e2","conference":"east","name":"Carolina Hurricanes","short":"CAR","seed":2,"matchup":"e2","selected":null},{"id":"e3","conference":"east","name":"New York Rangers","short":"NYR","seed":3,"matchup":"e2","selected":null},{"id":"w5","conference":"west","name":"Edmonton Oilers","short":"EDM","seed":1,"matchup":"w1","selected":null},{"id":"w5","conference":"west","name":"Chicago Blackhalks","short":"CHI","seed":5,"matchup":"w1","selected":null},{"id":"w2","conference":"west","name":"Nashville Predators","short":"NSH","seed":2,"matchup":"w2","selected":null},{"id":"w3","conference":"west","name":"Arizona Coyotes","short":"ARI","seed":3,"matchup":"w2","selected":null}]}')},function(e){e.exports=JSON.parse('{"teams":[{"id":"e1","conference":"east","name":"Tampa Bay Lightning","short":"TBL","seed":2,"matchup":"e1","selected":null,"round":1},{"id":"e6","conference":"east","name":"New York Islanders","short":"NYI","seed":6,"matchup":"e1","selected":null,"round":1},{"id":"w1","conference":"west","name":"Vegas Golden Knights","short":"VGK","seed":1,"matchup":"w1","selected":null,"round":1},{"id":"w3","conference":"west","name":"Dallas Stars","short":"DAL","seed":3,"matchup":"w1","selected":null,"round":1},{"id":"ef","conference":"east","name":"","short":"","seed":null,"matchup":"finals","selected":null,"round":2},{"id":"wf","conference":"west","name":"","short":"","seed":null,"matchup":"finals","selected":null,"round":2},{"id":"winner","conference":"","name":"","short":"","seed":2,"matchup":"winner","selected":null,"round":3}]}')},function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e){e.exports=JSON.parse("{}")},function(e){e.exports=JSON.parse("{}")},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),l=(a(22),a(1)),i=a(2),o=a(4),u=a(3),m=a(12),d=a.n(m),h=a(6),p=(a(23),a(13)),f=(n.Component,a(7)),g=(a(24),a(14)),E=(a(25),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.teamSelectHandler;return this.props.teams.teams.map((function(t,a){return s.a.createElement("li",{key:t.id,className:"matchup-".concat(t.matchup," ").concat(t.selected," ").concat(t.conference),onClick:function(){return e(t.short,t.matchup)}},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("div",{className:"seed"},t.seed),s.a.createElement("img",{className:"team-logo",draggable:"false",src:"/teamLogos/".concat(t.short,".png"),alt:t.short,title:t.name})),s.a.createElement("div",{className:"team-info"},s.a.createElement("span",{className:"team-short"},t.short)))}))}}]),a}(n.Component)),v=(n.Component,function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null!==this.props.userPicks?this.props.userPicks.map((function(e,t){return t%10===0?s.a.createElement("li",{key:t},s.a.createElement("h3",{className:"user-name"},e.user),s.a.createElement("div",{className:""},s.a.createElement("div",{className:"round-robin"},"East round robin:",s.a.createElement("div",{className:"points"},0===e.points?"\u274c":e.points?"\u2705 +"+e.points:"--")))):t%10-1===0?s.a.createElement("li",{key:t},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"round-robin"},"West round robin:",s.a.createElement("div",{className:"points"},0===e.points?"\u274c":e.points?"\u2705 +"+e.points:"--"))),s.a.createElement("br",null),s.a.createElement("div",{className:"round-robin"},"Qualifying Round: "),s.a.createElement("br",null)):s.a.createElement("li",{key:t},s.a.createElement("div",{className:"logo-wrapper team-points"},s.a.createElement("img",{className:"team-logo",src:"/teamLogos/".concat(e.team,".png"),alt:e.team,title:e.team}),s.a.createElement("div",{className:"points"},0===e.points?"\u274c":e.points?"\u2705 +"+e.points:"--")))})):s.a.createElement("div",null)}}]),a}(n.Component)),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.picks.map((function(t,a){return s.a.createElement("li",{key:a},a%e.props.picksPerUser===0&&s.a.createElement("h3",{className:"user-name"},t.name),s.a.createElement("div",{className:"logo-wrapper team-points"},"finals"===t.matchup&&s.a.createElement("img",{className:"small-cup",src:"/cup.png",alt:""}),"e1"===t.matchup&&s.a.createElement("p",null,"East"),"w1"===t.matchup&&s.a.createElement("p",null,"West"),s.a.createElement("img",{className:"team-logo",src:"/teamLogos/".concat(t.team,".png"),alt:t.team,title:t.team}),s.a.createElement("div",{className:"points"},0===t.points?"\u274c":t.points?"\u2705 +"+t.points:"--")))}))}}]),a}(n.Component),y=a(5),S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(y.d,{defaultIndex:3},s.a.createElement(y.b,null,s.a.createElement("div",null,s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab small-tab"},"Qualifiers")),s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab small-tab"},"Conf Quarterfinals")),s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab small-tab"},"Conf Semifinals")),s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab small-tab"},"Final 4")))),s.a.createElement(y.c,null,null!==this.props.userPicks&&s.a.createElement(v,{userPicks:this.props.userPicks})),s.a.createElement(y.c,null,null!==this.props.quarterfinalPicks&&s.a.createElement(k,{picks:this.props.quarterfinalPicks,picksPerUser:8})),s.a.createElement(y.c,null,null!==this.props.semifinalPicks&&s.a.createElement(k,{picks:this.props.semifinalPicks,picksPerUser:4})),s.a.createElement(y.c,null,null!==this.props.conferenceFinalPicks&&s.a.createElement(k,{picks:this.props.conferenceFinalPicks,picksPerUser:3})))}}]),a}(n.Component),b=(a(28),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null!==this.props.leaders?this.props.leaders.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("div",null,e.name),s.a.createElement("div",null,e.points))})):s.a.createElement("div",null)}}]),a}(n.Component)),w=(a(29),a(15));n.Component;function N(e){return e.image?s.a.createElement("aside",{className:e.className},s.a.createElement("img",{src:e.image,className:"logo",alt:"Hockey logo"})):s.a.createElement("aside",{className:e.className},e.content)}function C(e){return s.a.createElement("button",{disabled:!0,className:e.className,title:"Finish making your picks and enter your name!"},e.label)}function T(e){return"ready"===e.qualifyingTeamsStatus&&"saved"!==e.saveStatus?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:e.byeTeamsStatus,onClick:function(t){(0,e.save)()}},e.label),s.a.createElement(P,{saveStatus:e.saveStatus,saveMessage:e.saveMessage})):s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{className:"disabled-button",label:e.label}),s.a.createElement(P,{saveStatus:e.saveStatus,saveMessage:e.saveMessage}))}function P(e){if(null===e.status||null===e.saveStatus)return" ";var t="\ud83d\udeab";return"available"!==e.status&&"saved"!==e.saveStatus||(t="\u2705"),s.a.createElement("div",{className:"status ".concat(e.status," ").concat(e.saveStatus)},t," ",e.saveMessage)}function O(e){var t=function(t){(0,e.nameChanged)(t.target.value)};return null!==e.user?s.a.createElement("div",{className:"name-input"},s.a.createElement("input",{id:"input",type:"name",placeholder:"name / username",defaultValue:e.user,onChange:function(e){return t(e)},required:!0}),"\xa0",s.a.createElement(P,{status:e.nameStatus})):s.a.createElement("div",{className:"name-input"},s.a.createElement("input",{type:"name",placeholder:"name / username",value:"",onChange:function(e){return t(e)}}),"\xa0")}function j(e){return s.a.createElement("div",{className:"footer"})}a(30),a(31),a(8);var L=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.teamSelectHandler;return this.props.teamData.teams.map((function(a,n){return""===a.short||"winner"===a.id?s.a.createElement("li",{className:"null invisible"}):s.a.createElement("li",{key:n,className:"matchup-".concat(a.matchup," ").concat(a.selected," ").concat(a.conference," round-").concat(a.round),onClick:function(){return t(a.short,a.matchup,e.props.round)}},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("div",{className:"seed"},a.seed),s.a.createElement("img",{className:"team-logo",draggable:"false",src:"/teamLogos/".concat(a.short,".png"),alt:a.short,title:a.name})),s.a.createElement("div",{className:"team-info"},s.a.createElement("span",{className:"team-short"},a.short)))}))}}]),a}(n.Component);function q(e){if(1===e.round)return s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",{className:"header align-left",id:"west-matchups"},"west matchups"),s.a.createElement("h3",{className:"header align-left",id:"east-matchups"},"east matchups"))}function I(e){if(null!==e.winner)return s.a.createElement("img",{className:"team-logo winner",draggable:"false",src:"/teamLogos/".concat(e.winner,".png"),alt:"",title:e.winner})}function F(e){return!0===e.cup?s.a.createElement("div",{className:"cup-wrapper"},s.a.createElement("img",{className:"cup",src:"/cup.png",alt:""}),s.a.createElement(I,{winner:e.teamData.teams[6].short})):s.a.createElement("span",null)}var B=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).teamSelectHandler=e.teamSelectHandler.bind(Object(f.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({teams:this.props.teamData})}},{key:"teamSelectHandler",value:function(e,t,a){var n,s,c,r,l,i=this.state.teams.teams.filter((function(a){return a.short===e&&(a.selected=!0,"w1"==a.matchup&&(s=a.short,r=a.seed),"e1"==a.matchup&&(n=a.short,c=a.seed),"finals"==a.matchup&&(l=a.short)),a.matchup===t&&a.short!==e&&(a.selected=!1),a}));i=i.filter((function(e){return"ef"==e.id&&n&&(e.short=n,e.seed=c),"wf"==e.id&&s&&(e.short=s,e.seed=r),"winner"==e.id&&l&&(e.short=l),e})),this.setState({teams:{teams:i}}),(0,this.props.saveTeams)(this.state.teams)}},{key:"render",value:function(){return this.props.teamData?s.a.createElement("section",{className:"matchup-wrapper"},s.a.createElement("div",null,s.a.createElement(q,{round:this.props.round}),s.a.createElement(F,{cup:this.props.cup,teamData:this.props.teamData}),s.a.createElement("ul",{className:"matchups"},s.a.createElement(L,{teamData:this.props.teamData,teamSelectHandler:this.teamSelectHandler,round:this.props.round})))):s.a.createElement("div",null)}}]),a}(n.Component);function D(e){return s.a.createElement("div",{className:"instructions"},s.a.createElement("ul",null,s.a.createElement("li",null,"For each matchup, click on the team you think will win."),s.a.createElement("li",null,s.a.createElement("span",{className:"scoring"},"Scoring: "),s.a.createElement("span",{className:"num"},"1 point")," for each correct conference final pick. \xa0",s.a.createElement("span",{className:"num"},"3 points")," for picking the Stanley Cup winner. \xa0")))}a(32),a(33);var H=a(16),R=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={byeTeamsStatus:"ready",byeTeams:null,qualifyingTeamsStatus:"not_ready",qualifyingTeams:null,teams:null,name:null,nameStatus:null,saveStatus:null,saveMessage:null,club:null,leaders:null,user:null,userPicks:null,quarterfinalPicks:null,semifinalPicks:null,conferenceFinalPicks:null},e.getLeaders=function(){fetch("/api/leaderboard",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({leaders:t.leaders})}))},e.getUserPicks=function(){fetch("/api/user_picks",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({userPicks:t.picks})}))},e.getQuarterfinalPicks=function(){fetch("/api/quarterfinal_picks",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({quarterfinalPicks:t.picks})}))},e.getSemifinalPicks=function(){fetch("/api/semifinal_picks",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({semifinalPicks:t.picks})}))},e.getConferenceFinalPicks=function(){fetch("/api/conferencefinal_picks",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({conferenceFinalPicks:t.picks})}))},e.checkIfNameIsTaken=function(t){fetch("/names/"+t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({nameStatus:t.status})}))},e.checkIfReady=function(t){var a=e.getCookie("user");e.setState({user:a});var n=0;if("qualifyingTeams"===t){for(var s=0;s<16;s++)!0===e.state.qualifyingTeams.teams[s].selected&&(n+=1);n>=8&&e.setState({qualifyingTeamsStatus:"ready"})}else if("byeTeams"===t){for(var c=1;c<8;c++)if("east"===e.state.byeTeams[c].type||"west"===e.state.byeTeams[c].type)return void e.setState({byeTeamsStatus:"not_ready"});0===n&&e.setState({byeTeamsStatus:"ready"})}else if("conferenceSemiFinals"===t){for(var r=0;r<8;r++)!0===e.state.teams[r].selected&&(n+=1);n>=4&&e.setState({qualifyingTeamsStatus:"ready"})}else{for(var l=0;l<6;l++)!0===e.state.teams[l].selected&&(n+=1);n>=3&&e.setState({qualifyingTeamsStatus:"ready"})}},e.saveByesToState=function(t){e.setState({byeTeams:t},(function(){e.checkIfReady("byeTeams")}))},e.saveQualifyingTeamsToState=function(t){e.setState({qualifyingTeams:t},(function(){e.checkIfReady("qualifyingTeams")}))},e.saveConferenceSemiFinalsToState=function(t){e.setState({teams:t.teams},(function(){e.checkIfReady("conferenceSemiFinals")}))},e.saveTeamsToState=function(t){e.setState({teams:t.teams},(function(){e.checkIfReady("final4")}))},e.getRequests=function(){var e,t,a=window.location.search.substring(1,window.location.search.length).split("&"),n={};for(t=0;t<a.length;t+=1)e=a[t].split("="),n[decodeURIComponent(e[0]).toLowerCase()]=decodeURIComponent(e[1]);return n},e.nameChangeHandler=function(t){0===t.length&&e.setState({nameStatus:null}),e.setState({user:t},(function(){null!==t&&e.setState({nameStatus:"available"})}))},e.saveRound=function(){fetch("/api/save_round",{method:"POST",body:JSON.stringify({name:e.state.user,picks:e.state.teams})}).then((function(e){return e.json()})).then((function(t){return e.setState({saveStatus:t.status,saveMessage:t.message})}))},e.saveToDB=function(){var t=e.getRequests().club;e.setCookie("club",t),e.setCookie("user",e.state.name),fetch("/api/save",{method:"POST",body:JSON.stringify({name:e.state.name,byeTeams:e.state.byeTeams,qualifyingTeams:e.state.qualifyingTeams,club:t})}).then((function(e){return e.json()})).then((function(t){return e.setState({saveStatus:t.status,saveMessage:t.message})}))},e.getCookie=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var s=a[n];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""},e.setCookie=function(e,t){var a=new Date;a.setDate(a.getDate()+90),document.cookie=e+"="+t+"; expires="+a},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.getCookie("user");null===this.state.user&&this.setState({user:e}),this.getLeaders(),this.getUserPicks(),this.getQuarterfinalPicks(),this.getSemifinalPicks(),this.getConferenceFinalPicks()}},{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("section",null,s.a.createElement("h1",null,"2020 NHL Playoff Pool")),s.a.createElement(N,{className:"left-aside",image:d.a}),s.a.createElement(y.d,{defaultIndex:2},s.a.createElement(y.b,null,s.a.createElement("div",null,s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab"},"Final 4")),s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab"},"Leaderboard")),s.a.createElement(y.a,null,s.a.createElement("div",{className:"tab"},"Full Results")))),s.a.createElement(y.c,null,s.a.createElement("h2",null,"Final 4"),s.a.createElement(D,null),s.a.createElement(B,{saveTeams:this.saveTeamsToState,teamData:H,round:1,cup:!0}),s.a.createElement(O,{type:"text",nameChanged:this.nameChangeHandler,nameStatus:this.state.nameStatus,user:this.state.user}),s.a.createElement(T,{name:this.state.user,save:this.saveRound,nameStatus:this.state.nameStatus,qualifyingTeamsStatus:this.state.qualifyingTeamsStatus,label:"Submit picks",saveStatus:this.state.saveStatus,saveMessage:this.state.saveMessage})),s.a.createElement(y.c,null,s.a.createElement("ul",{className:"leaders"},s.a.createElement(b,{leaders:this.state.leaders,user:this.state.user}))),s.a.createElement(y.c,null,s.a.createElement("ul",{className:"results"},s.a.createElement(S,{user:this.state.user,userPicks:this.state.userPicks,quarterfinalPicks:this.state.quarterfinalPicks,semifinalPicks:this.state.semifinalPicks,conferenceFinalPicks:this.state.conferenceFinalPicks})))),s.a.createElement(N,{className:"right-aside"}),s.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.6fa9d637.chunk.js.map