import React from "react";

const icons = {
    Home: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"></path>
        </svg>
    ),
    ArrowDown: (
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
        </svg>
    )
}

export default function Icon({ icon, className, fill, size, marginLeft, marginRight }) {

    const styles = {
        display: 'inline-flex',
        color: fill,
        width: size || 16,
        height: size || 16,
        marginLeft: marginLeft || 0,
        marginRight: marginRight || 0
    }

    return (
        <div
            className={className}
            style={{ ...styles }}
        >
            {icons[icon]}
        </div>
    )
}