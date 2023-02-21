import React from "react";

import "./style.css";

export default function ({ filter, onChange, ...rest }) {

    const onChangeHandle = (e) => {
        let value = e.target.value;

        if (filter) {
            if (filter(value)) {
                return;
            }
        }

        onChange(e);
    }

    return (
        <input
            className="form-control"
            {...rest}
            onChange={onChangeHandle}
        />
    )
}