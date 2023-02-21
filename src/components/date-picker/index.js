import React from "react";
import { Calendar } from "react-calendar";

import Dropdown from "../dropdown";

import "./style.css";

export default function DatePicker({ onChange, ...rest }) {
    return (
        <Dropdown
            {...rest}
            container={(onClose) => (
                <Calendar
                    onChange={(d) => { onClose(); onChange(d); }}
                />
            )}
        />
    )
}
