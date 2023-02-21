import React from "react";

import "./style.css";

export default function Button({ children, ...rest }) {
    return (
        <button
            className="btn btn-primary"
            {...rest}
        >
            {
                children
            }
        </button>
    )
}