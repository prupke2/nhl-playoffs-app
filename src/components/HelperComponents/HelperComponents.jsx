import React from 'react';

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
    return (
        <button disabled={true} className={props.className} title="Finish making your picks and enter your name!">
            {props.label}
        </button>)
    ;    
}

export function Button(props) {

    const saveHandler = (event) => {
        let save = props.save;
        save();
    }

    if (
        props.byeTeamsStatus === "ready" 
        && props.qualifyingTeamsStatus === "ready" 
        && props.nameStatus === "available"
        && props.saveStatus !== "saved"
        ) {
        return (
            <React.Fragment>

                <button 
                    className={props.byeTeamsStatus}
                    onClick={saveHandler}
                >
                    {props.label}
                </button>
                <Message
                    saveStatus={props.saveStatus}
                    saveMessage={props.saveMessage}

                />
            </React.Fragment>

        );
    }
    
    return (
        <React.Fragment>
            <DisabledButton 
                className="disabled-button"
                label={props.label}
            />
            <Message
                saveStatus={props.saveStatus}
                saveMessage={props.saveMessage}
            />
        </React.Fragment>
    );
}

export function Message(props) {
    if (props.status === null || props.saveStatus === null) {
        return " "
    }

    let message = "🚫"
    if (props.status === "available" || props.saveStatus === "saved") {
        message = "✅"
        console.log("props.saveStatus: " + props.saveStatus + ", props.saveMessage: " + props.saveMessage);
    }
    return (
        <span className={`status ${props.status} ${props.saveStatus}`}>
            {message} {props.saveMessage}
        </span>
    );
}

export function Input(props) {
    const nameChangeHandler = (event) => {
        let updateName = props.nameChanged;
        updateName(event.target.value);
    }
    
    return (
        <div className="name-input">
            <input 
                type="name"
                placeholder="name / username"
                value={props.name}
                onChange={(event) => nameChangeHandler(event)}
            />&nbsp;
            <Message
                status={props.nameStatus}
            />
        </div>
    );
}

export function Footer(props) {
    return (
        <div className="footer" />
    )

}
