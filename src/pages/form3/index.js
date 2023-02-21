import React from "react";
import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import Input from "../../components/input";

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
                    <Input placeholder={"Logged Access"} />
                    <Input placeholder={"File Server Access Required"} />
                    <Checkbox
                        placeholder={"JIRA Access Required"}
                        checked={jiraChecked}
                        onChange={() => setJiraChecked(!jiraChecked)}
                    />
                    <Input placeholder={"Sonar Application"} />
                    <Checkbox
                        placeholder={"Extra Application"}
                        checked={extraChecked}
                        onChange={() => setExtraChecked(!extraChecked)}
                    />
                    <Input placeholder={"Mitel Required"} />
                    <Input placeholder={"Mobile Required"} />
                    <Input placeholder={"Headset Required"} />
                </div>
                <Button
                    type="button"
                >Next</Button>
            </form>
        </div>
    )
}