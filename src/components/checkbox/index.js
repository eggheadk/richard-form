import React from "react";

export default function ({ placeholder, checked, onChange, ...rest }) {
    return (
        <label className={`checkbox${checked ? ' active' : ''}`}>
            <span>JIRA Access Required</span>
            <input type={"checkbox"} checked={checked || false} onChange={onChange} />
            <div></div>
        </label>
    )
}