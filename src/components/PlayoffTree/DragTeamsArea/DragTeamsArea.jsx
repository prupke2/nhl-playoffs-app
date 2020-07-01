import React, { Component } from 'react';
import './DragTeamsArea.css';

const DragTeamsArea = (props) => {
    
    return (
        <ul>
            <li id={`${props.conference}-choice-1` } className={`teamWrapper ${props.conference}` }>
                <div className="watermark">1</div>
            </li>
            <li id={`${props.conference}-choice-2` } className={`teamWrapper ${props.conference}` }>
                <div className="watermark">2</div>
            </li>
            <li id={`${props.conference}-choice-3` } className={`teamWrapper ${props.conference}` }>
                <div className="watermark">3</div>
            </li>
            <li id={`${props.conference}-choice-4` } className={`teamWrapper ${props.conference}` }>
                <div className="watermark">4</div>
            </li>
        </ul>    
    );
}

export default DragTeamsArea;
