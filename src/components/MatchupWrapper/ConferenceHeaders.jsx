import React, { Component } from 'react';
import './Matchups.css';

export default function ConferenceHeaders(props) {
  if (props.round === 1) {
    return(
      <React.Fragment>
        <h3 className="header align-left" id="west-matchups">west matchups</h3>
        <h3 className="header align-left" id="east-matchups">east matchups</h3>
      </React.Fragment>
    );
  }
}
