import React, { Component } from 'react';
import '../Matchups.css';

export default function MatchupInstructions(props) {

  return (
    <div className="instructions">
      <ul>
          <li>For each matchup, click on the team you think will win.</li>
          <li>
              <span className="scoring">Scoring: </span> 
              <span className="num">1 point</span> for each correct conference final pick. &nbsp;
              <span className="num">3 points</span> for picking the Stanley Cup winner. &nbsp;

              {/* <span className="num">1 bonus point</span> for picking a&nbsp; */}
              {/* <div className="seed inline-seed">7</div> or lower seed upset. */}
          </li>
      </ul>
    </div>
  );
}
