import React from "react";
import Button from "../../components/button";
import Checkbox from "../../components/checkbox";
import Input from "../../components/input";

import './style.css';

export default function () {

    const [data, setData] = React.useState({
        loggedChecked: false,
        fileserverChecked: false,
        jiraChecked: true,
        sonarChecked: false,
        extraChecked: false,
        mitelChecked: false,
        mobileChecked: false,
        headsetChecked: false,
    });

    return (
        <div className="agency">
            <form>
                <h2>
                    Let setup the permissions & hardware!
                </h2>
                <div>
                    <Checkbox 
                        placeholder={"Logged Access"} 
                        checked={data.loggedChecked}
                        onChange={() => setData({...data, loggedChecked:!data.loggedChecked})}
                    />
                    <Checkbox 
                        placeholder={"File Server Access Required"} 
                        checked={data.fileserverChecked}
                        onChange={() => setData({...data, fileserverChecked:!data.fileserverChecked})}
                    />
                    <Checkbox
                        placeholder={"JIRA Access Required"}
                        checked={data.jiraChecked}
                        onChange={() => setData({...data, jiraChecked:!data.jiraChecked})}
                    />
                    <Checkbox 
                        placeholder={"Sonar Application"} 
                        checked={data.sonarChecked}
                        onChange={() => setData({...data, sonarChecked:!data.sonarChecked})}
                    />
                    <Checkbox
                        placeholder={"Extra Application"}
                        checked={data.extraChecked}
                        onChange={() => setData({...data, extraChecked:!data.extraChecked})}
                    />
                    <Checkbox 
                        placeholder={"Mitel Required"} 
                        checked={data.mitelChecked}
                        onChange={() => setData({...data, mitelChecked:!data.mitelChecked})}
                    />
                    <Checkbox 
                        placeholder={"Mobile Required"} 
                        checked={data.mobileChecked}
                        onChange={() => setData({...data, mobileChecked:!data.mobileChecked})}
                    />
                    <Checkbox 
                        placeholder={"Headset Required"} 
                        checked={data.headsetChecked}
                        onChange={() => setData({...data, headsetChecked:!data.headsetChecked})}
                    />
                </div>
                <Button
                    type="button"
                >Next</Button>
            </form>
        </div>
    )
}