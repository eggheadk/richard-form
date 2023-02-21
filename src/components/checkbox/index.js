import React from "react";

import "./style.css";

export default function ({ placeholder, checked, onChange, ...rest }) {
    return (
        <label
            className={`checkbox${checked ? ' active' : ''}`}
        >
            <span>
                {placeholder}
            </span>
            <input
                {...rest}
                type={"checkbox"}
                checked={checked || false}
                onChange={onChange} />
            <div />
        </label>
    )
}