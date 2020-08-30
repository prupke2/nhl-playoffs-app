import React from 'react';
import '../Matchups.css';

export default function Winner(props) {
  if (props.winner !== null) {
    return(
      <img className="team-logo winner" 
        draggable="false"
        src={`/teamLogos/${props.winner}.png`}
        alt=""
        title={props.winner}
      />
    );
  }
}
