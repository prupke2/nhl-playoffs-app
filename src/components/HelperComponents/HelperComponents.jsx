import React, { Component } from 'react';

export function Sidebar(props) {
    if (props.image) {
        return (
            <aside className={props.className}>
                <img src={props.image} className="logo" alt="Hockey logo" />
            </aside>
        );
    }
    return (
        <aside className={props.className}>
            {props.content}
        </aside>
    )
}

export function DisabledButton(props) {
    return (<button disabled="true" className={props.className}>
        {props.label}
    </button>);    
}

export function Button(props) {
    return (<button className={props.className}>
        {props.label}
    </button>);
}
