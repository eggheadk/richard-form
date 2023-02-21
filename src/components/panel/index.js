import React from "react";

import "./style.css";

export default function Panel ({children, header, footer}) {
    return (
        <div className="panel">
            {header && (
                <div className="panel-header">
                    {header}
                </div>
            )}
            <div className="panel-content">
                {
                    children
                }
            </div>
            {footer && (
                <div className="panel-footer">
                    {footer}
                </div>
            )}
        </div>
    )
}