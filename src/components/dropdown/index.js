import React from "react";
import Icon from "../icon";

import "./style.css";

export default function ({ initialLabel, label, onClose, container, ...rest }) {

    const [isDropdown, setIsDropdown] = React.useState(false);
    const boxRef = React.useRef(null);

    React.useEffect(() => {
        if (boxRef.current) {
            // boxRef.current.
        }
    }, []);

    return (
        <div className="dropdown">
            <div className="dropdown-picker" onClick={() => setIsDropdown(!isDropdown)}>
                <span>
                    {label === undefined
                        ? (initialLabel !== undefined ? initialLabel : "Select the item")
                        : label}
                </span>
                <Icon icon={"ArrowDown"} />
            </div>
            {container !== undefined && (
                <div ref={boxRef} className={`dropdown-box ${isDropdown ? 'dropdown-box-show' : 'dropdown-box-hide'}`}>
                    {container(() => setIsDropdown(false))}
                </div>
            )}
        </div>
    )
}
