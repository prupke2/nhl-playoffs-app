import React, { Component } from 'react';
import '../Matchups.css';
import Winner from './Winner';

export default function Cup(props) {
  console.log("SHORT1: " + props.cup);

  if (props.cup === true) {
    console.log("SHORT: " + props.teamData.teams[6].short);
    return(
      <div className="cup-wrapper">
        <img className="cup" src="/cup.png" alt=""/>
        <Winner
          winner={props.teamData.teams[6].short} 
        />
      </div>
    );
  } else {
    return(
      <span />
    )
  }
}
