import React from "react";

import "./style.css";

export default function List ({labelKey, items, onSelect}) {
    return (
        <ul className="list">
            {items.map((i, k) => (
                <li key={k} onClick={() => onSelect(i)}>
                    {i[labelKey]}
                </li>
            ))}
        </ul>
    )
}