(this.webpackJsonpplayoffs=this.webpackJsonpplayoffs||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hockey_icon_large.cc443e14.png"},function(e){e.exports=JSON.parse('{"byeSpots":{"teams":[{"id":"e1","conference":"east","type":"east","name":"Boston Bruins","short":"BOS","seed":1},{"id":"e2","conference":"east","type":"east","name":"Tampa Bay Lightning","short":"TBL","seed":2},{"id":"e3","conference":"east","type":"east","name":"Washington Capitals","short":"WSH","seed":3},{"id":"e4","conference":"east","type":"east","name":"Philadelphia Flyers","short":"PHI","seed":4},{"id":"w1","conference":"west","type":"west","name":"St. Louis Blues","short":"STL","seed":1},{"id":"w2","conference":"west","type":"west","name":"Colorado Avalanche","short":"COL","seed":2},{"id":"w3","conference":"west","type":"west","name":"Vegas Golden Knights","short":"VGK","seed":3},{"id":"w4","conference":"west","type":"west","name":"Dallas Stars","short":"DAL","seed":4}]}}')},function(e){e.exports=JSON.parse('{"teams":[{"id":"e1","conference":"east","name":"Philadelphia Flyers","short":"PHI","seed":1,"matchup":"e1","selected":null},{"id":"e8","conference":"east","name":"Montreal Canadiens","short":"MTL","seed":12,"matchup":"e1","selected":null},{"id":"e2","conference":"east","name":"Washington Capitals","short":"WSH","seed":2,"matchup":"e2","selected":null},{"id":"e7","conference":"east","name":"New York Islanders","short":"NYI","seed":7,"matchup":"e2","selected":null},{"id":"3","conference":"east","name":"Boston Bruins","short":"BOS","seed":3,"matchup":"e3","selected":null},{"id":"e6","conference":"east","name":"Carolina Hurricanes","short":"CAR","seed":6,"matchup":"e3","selected":null},{"id":"e4","conference":"east","name":"Tampa Bay Lightning","short":"TBL","seed":4,"matchup":"e4","selected":null},{"id":"e5","conference":"east","name":"Columbus Blue Jackets","short":"CBJ","seed":9,"matchup":"e4","selected":null},{"id":"w1","conference":"west","name":"Vegas Golden Knights","short":"VGK","seed":1,"matchup":"w1","selected":null},{"id":"w8","conference":"west","name":"Chicago Blackhalks","short":"CHI","seed":12,"matchup":"w1","selected":null},{"id":"w2","conference":"west","name":"Colorado Avalanche","short":"COL","seed":2,"matchup":"w2","selected":null},{"id":"w7","conference":"west","name":"Arizona Coyotes","short":"ARI","seed":11,"matchup":"w2","selected":null},{"id":"w3","conference":"west","name":"Dallas Stars","short":"DAL","seed":3,"matchup":"w3","selected":null},{"id":"w6","conference":"west","name":"Calgary Flames","short":"CGY","seed":8,"matchup":"w3","selected":null},{"id":"w4","conference":"west","name":"St. Louis Blues","short":"STL","seed":4,"matchup":"w4","selected":null},{"id":"w5","conference":"west","name":"Vancouver Canucks","short":"VAN","seed":7,"matchup":"w4","selected":null}]}')},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(10),r=a.n(l),c=(a(19),a(1)),i=a(2),u=a(4),o=a(3),m=a(11),d=a.n(m),h=a(6),f=(a(20),a(12)),p=(n.Component,a(8)),g=(a(21),a(13)),v=(a(22),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.teamSelectHandler;return this.props.teams.teams.map((function(t,a){return s.a.createElement("li",{key:t.id,className:"matchup-".concat(t.matchup," ").concat(t.selected," ").concat(t.conference),onClick:function(){return e(t.short,t.matchup)}},s.a.createElement("div",{className:"logo-wrapper"},s.a.createElement("div",{className:"seed"},t.seed),s.a.createElement("img",{className:"team-logo",draggable:"false",src:"/teamLogos/".concat(t.short,".png"),alt:t.short,title:t.name})),s.a.createElement("div",{className:"team-info"},s.a.createElement("span",{className:"team-short"},t.short)))}))}}]),a}(n.Component)),E=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state=g,e.teamSelectHandler=e.teamSelectHandler.bind(Object(p.a)(e)),e}return Object(i.a)(a,[{key:"teamSelectHandler",value:function(e,t){var a=this.state.teams.filter((function(a){return a.short===e&&(a.selected=!0),a.matchup===t&&a.short!==e&&(a.selected=!1),a}));this.setState(Object(h.a)(Object(h.a)({},this.state),{},{teams:a})),(0,this.props.saveQualifiers)(this.state),console.log("state: "+JSON.stringify(this.state,null,4))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"instructions"},s.a.createElement("ul",null,s.a.createElement("li",null,"For each matchup, click on the team you think will win."),s.a.createElement("li",null,s.a.createElement("span",{className:"scoring"},"Scoring: "),s.a.createElement("span",{className:"num"},"1 point")," for each correct pick, and \xa0",s.a.createElement("span",{className:"num"},"1 bonus point")," for picking a\xa0",s.a.createElement("div",{className:"seed inline-seed"},"7")," or\xa0",s.a.createElement("div",{className:"seed inline-seed"},"8")," seed upset."))),s.a.createElement("section",{className:"qualifying-round"},s.a.createElement("div",null,s.a.createElement("h3",{className:"header align-left"},"west matchups"),s.a.createElement("h3",{className:"header align-left",id:"east-matchups"},"east matchups"),s.a.createElement("ul",{className:"matchups"},s.a.Children.toArray(s.a.createElement(v,{teams:this.state,teamSelectHandler:this.teamSelectHandler}))))))}}]),a}(n.Component),y=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null!==this.props.userPicks?this.props.userPicks.map((function(e,t){return t%10===0?s.a.createElement("li",null,s.a.createElement("h3",{className:"user-name"},e.user),s.a.createElement("div",{className:""},s.a.createElement("div",{className:"round-robin"},"East round robin:",s.a.createElement("div",{class:"points"},0===e.points?"\u274c":e.points?"\u2705 +"+e.points:"--")))):t%10-1===0?s.a.createElement("li",null,s.a.createElement("div",{className:""},s.a.createElement("div",{className:"round-robin"},"West round robin:",s.a.createElement("div",{class:"points"},0===e.points?"\u274c":e.points?"\u2705 +"+e.points:"--"))),s.a.createElement("br",null),s.a.createElement("div",{className:"round-robin"},"Qualifying Round: "),s.a.createElement("br",null)):s.a.createElement("li",null,s.a.createElement("div",{className:"logo-wrapper team-points"},s.a.createElement("img",{className:"team-logo",src:"/teamLogos/".concat(e.team,".png"),alt:e.team,title:e.team}),s.a.createElement("div",{class:"points"},0===e.points?"\u274c":e.points?"\u2705 +"+e.points:"--")))})):s.a.createElement("div",null)}}]),a}(n.Component),S=a(5),b=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement(S.d,null,s.a.createElement(S.b,null,s.a.createElement("div",null,s.a.createElement(S.a,null,s.a.createElement("div",{className:"tab"},"Round 1")))),s.a.createElement(S.c,null,s.a.createElement(y,{userPicks:this.props.userPicks})))}}]),a}(n.Component),w=(a(25),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return null!==this.props.leaders?this.props.leaders.map((function(e,t){return s.a.createElement("li",null,s.a.createElement("div",null,e.name),s.a.createElement("div",null,e.points))})):s.a.createElement("div",null)}}]),a}(n.Component));function N(e){return e.image?s.a.createElement("aside",{className:e.className},s.a.createElement("img",{src:e.image,className:"logo",alt:"Hockey logo"})):s.a.createElement("aside",{className:e.className},e.content)}function k(e){return s.a.createElement("button",{disabled:!0,className:e.className,title:"Finish making your picks and enter your name!"},e.label)}function T(e){return"ready"===e.qualifyingTeamsStatus&&"saved"!==e.saveStatus?s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:e.byeTeamsStatus,onClick:function(t){(0,e.save)()}},e.label),s.a.createElement(C,{saveStatus:e.saveStatus,saveMessage:e.saveMessage})):s.a.createElement(s.a.Fragment,null,s.a.createElement(k,{className:"disabled-button",label:e.label}),s.a.createElement(C,{saveStatus:e.saveStatus,saveMessage:e.saveMessage}))}function C(e){if(null===e.status||null===e.saveStatus)return" ";var t="\ud83d\udeab";return"available"!==e.status&&"saved"!==e.saveStatus||(t="\u2705",console.log("props.saveStatus: "+e.saveStatus+", props.saveMessage: "+e.saveMessage)),s.a.createElement("div",{className:"status ".concat(e.status," ").concat(e.saveStatus)},t," ",e.saveMessage)}function O(e){var t=function(t){(0,e.nameChanged)(t.target.value)};return null!==e.user?s.a.createElement("div",{className:"name-input"},s.a.createElement("input",{id:"input",type:"name",placeholder:"name / username",onChange:function(e){return t(e)},required:!0}),"\xa0",s.a.createElement(C,{status:e.nameStatus})):s.a.createElement("div",{className:"name-input"},s.a.createElement("input",{type:"name",placeholder:"name / username",value:e.user,onChange:function(e){return t(e)}}),"\xa0")}function j(e){return s.a.createElement("div",{className:"footer"})}a(26),a(27);var L=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={byeTeamsStatus:"ready",byeTeams:null,qualifyingTeamsStatus:"not_ready",qualifyingTeams:null,name:null,nameStatus:null,saveStatus:null,saveMessage:null,club:null,leaders:null,user:null,userPicks:null},e.getTime=function(){fetch("/api/time",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({currentTime:t.time})}))},e.getLeaders=function(){fetch("/api/leaderboard",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({leaders:t.leaders})}))},e.getUserPicks=function(){fetch("/api/user_picks",{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({userPicks:t.picks})}))},e.checkIfNameIsTaken=function(t){fetch("/names/"+t,{method:"GET"}).then((function(e){return e.json()})).then((function(t){return e.setState({nameStatus:t.status})}))},e.checkIfReady=function(t){var a=e.getCookie("user");e.setState({user:a});var n=0;if("qualifyingTeams"===t){for(var s=0;s<16;s++)!0===e.state.qualifyingTeams.teams[s].selected&&(n+=1);n>=8&&e.setState({qualifyingTeamsStatus:"ready"})}else{for(var l=1;l<8;l++)if("east"===e.state.byeTeams[l].type||"west"===e.state.byeTeams[l].type)return void e.setState({byeTeamsStatus:"not_ready"});0===n&&e.setState({byeTeamsStatus:"ready"})}},e.saveByesToState=function(t){e.setState({byeTeams:t},(function(){e.checkIfReady("byeTeams")}))},e.saveQualifyingTeamsToState=function(t){e.setState({qualifyingTeams:t},(function(){e.checkIfReady("qualifyingTeams")}))},e.getRequests=function(){var e,t,a=window.location.search.substring(1,window.location.search.length).split("&"),n={};for(t=0;t<a.length;t+=1)e=a[t].split("="),n[decodeURIComponent(e[0]).toLowerCase()]=decodeURIComponent(e[1]);return n},e.nameChangeHandler=function(t){0!==t.length?e.setState({name:t},(function(){null!==t&&e.setState({nameStatus:"available"})})):e.setState({nameStatus:null})},e.saveRound2=function(){fetch("/api/save_round2",{method:"POST",body:JSON.stringify({name:e.state.name,picks:e.state.qualifyingTeams})}).then((function(e){return e.json()})).then((function(t){return e.setState({saveStatus:t.status,saveMessage:t.message})}))},e.saveToDB=function(){var t=e.getRequests().club;e.setCookie("club",t),e.setCookie("user",e.state.name),fetch("/api/save",{method:"POST",body:JSON.stringify({name:e.state.name,byeTeams:e.state.byeTeams,qualifyingTeams:e.state.qualifyingTeams,club:t})}).then((function(e){return e.json()})).then((function(t){return e.setState({saveStatus:t.status,saveMessage:t.message})}))},e.getCookie=function(e){for(var t=e+"=",a=decodeURIComponent(document.cookie).split(";"),n=0;n<a.length;n++){for(var s=a[n];" "==s.charAt(0);)s=s.substring(1);if(0==s.indexOf(t))return s.substring(t.length,s.length)}return""},e.setCookie=function(e,t){var a=new Date;a.setDate(a.getDate()+90),document.cookie=e+"="+t+"; expires="+a},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.getCookie("user");this.setState({user:e}),this.getLeaders(),this.getUserPicks(),console.log("state: "+JSON.stringify(this.state,null,4))}},{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("section",null,s.a.createElement("h1",null,"2020 NHL Playoff Pool")),s.a.createElement(N,{className:"left-aside",image:d.a}),s.a.createElement("div",{className:"greeting"},null===this.state.user?"":"Hey "+this.state.user+", it's time to enter your picks for round 2!"),s.a.createElement(S.d,null,s.a.createElement(S.b,null,s.a.createElement("div",null,s.a.createElement(S.a,null,s.a.createElement("div",{className:"tab"},"Round 2")),s.a.createElement(S.a,null,s.a.createElement("div",{className:"tab"},"Leaderboard")),s.a.createElement(S.a,null,s.a.createElement("div",{className:"tab"},"Full Results")))),s.a.createElement(S.c,null,s.a.createElement("h2",null,"Conference Quarterfinals"),s.a.createElement(E,{saveQualifiers:this.saveQualifyingTeamsToState,qualifyingTeamsStatus:this.state.qualifyingTeamsStatus}),s.a.createElement(O,{type:"text",nameChanged:this.nameChangeHandler,nameStatus:this.state.nameStatus,user:this.state.user}),s.a.createElement(T,{name:this.state.user,save:this.saveRound2,nameStatus:this.state.nameStatus,qualifyingTeamsStatus:this.state.qualifyingTeamsStatus,label:"Submit picks",saveStatus:this.state.saveStatus,saveMessage:this.state.saveMessage})),s.a.createElement(S.c,null,s.a.createElement("ul",{className:"leaders"},s.a.createElement(w,{leaders:this.state.leaders,user:this.state.user}))),s.a.createElement(S.c,null,s.a.createElement("ul",{className:"results"},s.a.createElement(b,{user:this.state.user,userPicks:this.state.userPicks})))),s.a.createElement(N,{className:"right-aside"}),s.a.createElement(j,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.3e87bc3c.chunk.js.map