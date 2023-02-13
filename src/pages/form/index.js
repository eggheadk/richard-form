import React from "react";
import Checkbox from "../../components/checkbox";

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
                    <Checkbox
                        placeholder={"JIRA Access Required"}
                        checked={jiraChecked}
                        onChange={() => setJiraChecked(!jiraChecked)}
                    />
                    <input className="form-control" placeholder={"Sonar Application"} />
                    <Checkbox
                        placeholder={"Extra Application"}
                        checked={extraChecked}
                        onChange={() => setExtraChecked(!extraChecked)}
                    />
                    <input className="form-control" placeholder={"Mitel Required"} />
                    <input className="form-control" placeholder={"Mobile Required"} />
                    <input className="form-control" placeholder={"Headset Required"} />
                </div>
                <button type="button" className="btn btn-primary">Next</button>
            </form>
        </div>
    )
}