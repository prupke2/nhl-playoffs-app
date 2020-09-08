import React, { Component } from 'react';
import '../Matchups.css';
import Winner from './Winner';

export default function Cup(props) {

  if (props.cup === true) {
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
