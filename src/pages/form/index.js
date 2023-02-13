import React from "react";

import './style.css';

export default function () {

    const [jiraChecked, setJiraChecked] = React.useState(true);
    const [extraChecked, setExtraChecked] = React.useState(false);

    return (
        <div className="agency">
            <form>
                <h2>
                    Let setup the permissions & hardware!
                </h2>
                <div>
                    <input className="form-control" placeholder={"Logged Access"} />
                    <input className="form-control" placeholder={"File Server Access Required"} />
                    <label className={`checkbox${jiraChecked ? ' active' : ''}`}>
                        <span>JIRA Access Required</span>
                        <input type={"checkbox"} checked={jiraChecked} onChange={() => setJiraChecked(!jiraChecked)} />
                        <div></div>
                    </label>
                    <input className="form-control" placeholder={"Sonar Application"} />
                    <label className={`checkbox${extraChecked ? ' active' : ''}`}>
                        <span>Extra Application</span>
                        <input type={"checkbox"} checked={extraChecked} onChange={() => setExtraChecked(!extraChecked)} />
                        <div></div>
                    </label>
                    <input className="form-control" placeholder={"Mitel Required"} />
                    <input className="form-control" placeholder={"Mobile Required"} />
                    <input className="form-control" placeholder={"Headset Required"} />
                </div>
                <button type="button" className="btn btn-primary">Next</button>
            </form>
        </div>
    )
}